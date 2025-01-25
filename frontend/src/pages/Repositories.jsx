import React from 'react'
import './Repositories.css'
import Card from './Card'

function Repositories() {
  const cards_data = [
    {
      url: "https://github.com/clubgamma/uneasy",
      image: "lowpolybgrd.png",
      title: "Uneasy",
      desc: "Uneasy is a Web Application where you can select and remove multiple followings from your twitter.",
      issue: "[ FEATURE ] Add Greetings for first-timers",
      tags: ['python', 'javascript', 'nodejs']
    },
    {
      url: "https://github.com/clubgamma/give-my-resume",
      image: "lowpolybgrd.png",
      title: "Give my resume",
      desc: "A online quick platform and easy-to-use open-source tool which reduces time of creating resume.",
      issue: "shift all sections from context api to redux",
      tags: ['python', 'javascript', 'nodejs']
    },
    {
      url: "https://github.com/clubgamma/Trendit",
      image: "lowpolybgrd.png",
      title: "Trendit",
      desc: "This website provide Top Trending keywords for content creators.",
      issue: "fetch data",
      tags: ['python', 'javascript', 'nodejs']
    },
    {
      url: "https://github.com/clubgamma/directlywa",
      image: "lowpolybgrd.png",
      title: "DirectlyWA",
      desc: "Direct WhatsApp ( DirectlyWA ) an app to go to chat of any number that is on whatsapp . Not limited to only this . Other features like getting quotes , meme and sharing from in app. Reminder to schedule the message via push notification.",
      issue: "Add Home Screen",
      tags: ['python', 'javascript', 'nodejs']
    },
    {
      url: "https://github.com/clubgamma/All-About-Food",
      image: "lowpolybgrd.png",
      title: "All About Food",
      desc: "No description, website, or topics provided.",
      issue: "",
      tags: ['python', 'javascript', 'nodejs']
    },
  ]
  return (
    <div className='repo-bg'>
      <h2>My Repositories</h2>
      {cards_data.map((card, index) => (
        <Card key={index} url={card.url} image={card.image} title={card.title} desc={card.desc} issue={card.issue} tags={card.tags} />
      ))}
    </div>
  )
}

export default Repositories