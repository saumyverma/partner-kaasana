import React from 'react'
import VerifyEmailLayer from '@/components/VerifyEmailLayer'
export default async function Page({searchParams}) {
    const token = searchParams.token;
  const id = searchParams.id;

  console.log("token:", token);
  console.log("id:", id);
  return (
    <VerifyEmailLayer token={token} id={id} />
  )
}