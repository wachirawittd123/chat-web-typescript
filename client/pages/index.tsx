import { NextPage } from 'next';
import React from 'react';
import { ICookieUser } from '../interface/common';
import Sidebar from '../components/siderbar'
import Chat from '../components/chat'

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
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default MainPage