import { NextPage } from 'next';
import React from 'react';
import { ICookieUser } from '../interface/common';

export async function getServerSideProps(context: any) {
  if(context.req?.cookies?.user) {
    return {
      props: JSON.parse(context.req?.cookies?.user?.replaceAll("j:", ""))
    }
  } 
  return {
    redirect: {
        destination: "/signin",
        permanent: false
    }
  }
}

const MainPage: NextPage<ICookieUser> = (data) => {
  console.log('data=======>',data)
  return (
    <div>
      test
    </div>
  )
}

export default MainPage