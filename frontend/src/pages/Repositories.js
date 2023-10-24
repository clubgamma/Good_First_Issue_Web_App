import React from 'react'
import './Repositories.css'
import Card from './Card'

function Repositories() {
  return (
    <div className='repo-bg'>
      <h2>My Repositories</h2>
      <Card url="https://github.com/clubgamma/uneasy" title="Uneasy" desc="Uneasy is a Web Application where you can select and remove multiple followings from your twitter." />
      <Card url="https://github.com/clubgamma/give-my-resume" title="Give my resume" desc="A online quick platform and easy-to-use open-source tool which reduces time of creating resume" />
      <Card url="https://github.com/clubgamma/Trendit" title="Trendit" desc="This website provide Top Trending keywords for content creators." />
      <Card url="https://github.com/clubgamma/directlywa" title="DirectlyWA" desc="Direct WhatsApp ( DirectlyWA ) an app to go to chat of any number that is on whatsapp . Not limited to only this . Other features like getting quotes , meme and sharing from in app. Reminder to schedule the message via push notification." />
      <Card url="https://github.com/clubgamma/All-About-Food" title="All About Food" desc="No description, website, or topics provided." />
    </div>
  )
}

export default Repositories