'use server';


import { cookies } from 'next/headers';
import { axiosInstance } from '../axiosInstance';

// Server action for logging in and setting the tokens in cookies
export async function handleLogin(formData : any) {
  try {
    // Make the login request to your backend
    const response = await axiosInstance.post('/jwt/create/', formData);
    const { access: accessToken, refresh: refreshToken } = response.data;

    const cookieStore = cookies();

    // Save the access token in cookies (valid for 7 days)
    cookieStore.set('session_access_token', accessToken, {
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
      httpOnly: true, // Ensures cookies are not accessible to JavaScript on the client
      secure: process.env.NODE_ENV === 'production', // Only send cookie over HTTPS in production
    });

    // Save the refresh token in cookies (valid for 30 days)
    cookieStore.set('session_refresh_token', refreshToken, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    return { success: true, message: 'Login successful' };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'Login failed' };
  }
}
