// pages/protected/_middleware.js
import { NextResponse } from 'next/server';
import getToken from '../services/tokenservice'

export default function Middleware(req) {
  const token = getToken();

  if (!token) {
    return NextResponse.redirect('/');
  }

  return NextResponse.next();
}
