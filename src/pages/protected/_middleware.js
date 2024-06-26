// pages/protected/_middleware.js
import { NextResponse } from 'next/server';
import getToken from '../services/tokenservice'

export function middleware(req) {
  const token = getToken();

  if (!token) {
    return NextResponse.redirect('/');
  }

  return NextResponse.next();
}
