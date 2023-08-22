import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
  const [auth, setAuth] = useState(null);

  //let isAuthenticated = localStorage.getItem('isAuthenticated');
  let isAuthenticated = sessionStorage.getItem('isAuthenticated');

  async function getCookies() {
      console.log('getCookies');
      let cookies = document.cookie.split(';');
      let authTokens = {
          'access-token': null
      };

      for (const cookie of cookies) {
          let cookiePair = cookie.split('=');

          if (authTokens.hasOwnProperty(cookiePair[0].trim().toLowerCase())) {
              authTokens[cookiePair[0].trim()] = decodeURIComponent(cookiePair[1]);
          }
      }

      return authTokens;
  }

  const authApiCall = async (payload) => {
    console.log('authApiCall' + payload);

    try {
    const response = await axios.post("/api/login", {
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + payload
      },
    });

    console.log(response.data);
    return response.data;
    } catch ( error ) {
      console.log(error.data);
    }
    return false
  };

  const fetchUserAuth = useCallback(async () => {

    console.log('fetchUserAuth');
    const token = await getCookies();
    console.log(token);
    if( token && token["access-token"] ) {
      const authBoolean = await authApiCall(token["access-token"]);
      if( authBoolean === true ) {
        setAuth(true)
        return true
      }
    }
    console.log('not authorized');
    setAuth(false)
    //window.location.href = '/login'
    return false
  }, []);

  useEffect(() => {
    if( !auth ) {
      fetchUserAuth();
    }
  }, [fetchUserAuth, auth])


  return (
    isAuthenticated === 'true' ? <Outlet /> : <Navigate to="/login" />
  )
}
