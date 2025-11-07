'use client';

import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setAuth} from '@/features/auth/authSlice';

export default function ReduxInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const AccessToken = localStorage.getItem('AccessToken');
    const userId = localStorage.getItem('userId');

    if (AccessToken && userId ) {
      dispatch(setAuth({AccessToken, userId,}));
    }
  }, [dispatch]);

  return null;
}