import React, { useEffect, useState } from 'react'
import GoogleLogin, { GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'

const GoogleSignInPage = () => {
  const clientId = '945303114228-8lbaoot9f96407s7b110efqb1bg0t52n.apps.googleusercontent.com'
  const [profile, setProfile] = useState([])
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }
    gapi.load('client:auth2', initClient)
  })
  const onSucess = (res) => {
    console.log('success', res)
    setProfile(res.profileObj)
  }
  const logOut = () => {
    setProfile(null)
  }

  return (
    <div>
        <h2>React Google Login</h2>
        {profile
          ? (
        <div>
            <img src={profile.imageUrl} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name {profile.name}</p>
            <p>{profile.email}</p>
            <GoogleLogout clientId={clientId} buttonText='Logout' onLogoutSuccess={logOut}/>
        </div>
            )
          : (
            <GoogleLogin
            clientId={clientId}
            buttonText='Sign in with google'
            onSuccess={onSucess}
            cookiePolicy='single_host_origin'
            isSignedIn={true} />
            )
     }
     <button>SignIn</button>
    </div>
  )
}
export default GoogleSignInPage
