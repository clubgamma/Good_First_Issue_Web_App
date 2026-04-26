import React from 'react'
import './Repositories.css'
import Card from './Card'
import IssueCardSkeleton from '../components/IssueCardSkeleton'

function Repositories() {
  return (
    <div className='repo-bg'>
      <h2>My Repositories</h2>
      <IssueCardSkeleton
        repoImage="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        repoName="clubgamma/Good_First_Issue_Web_App"
        repoDesc="A web app to find good first issues for beginners."
        issueTitle="[Good First Issue] Design Simple Figma Skeleton for GFI Issues Cards"
        issueDesc="Design Simple Figma Skeleton for GFI Issues Cards. Skeleton Should Include an Abstract of Repo Image, Repo Description, Issue Description, and Language Used to resolve the issue as a Tag in the card."
        languageTag="JavaScript"
      />
      <Card url="https://github.com/clubgamma/uneasy" title="Uneasy" desc="Uneasy is a Web Application where you can select and remove multiple followings from your twitter." />
      <Card url="https://github.com/clubgamma/give-my-resume" title="Give my resume" desc="A online quick platform and easy-to-use open-source tool which reduces time of creating resume" />
      <Card url="https://github.com/clubgamma/Trendit" title="Trendit" desc="This website provide Top Trending keywords for content creators." />
      <Card url="https://github.com/clubgamma/directlywa" title="DirectlyWA" desc="Direct WhatsApp ( DirectlyWA ) an app to go to chat of any number that is on whatsapp . Not limited to only this . Other features like getting quotes , meme and sharing from in app. Reminder to schedule the message via push notification." />
      <Card url="https://github.com/clubgamma/All-About-Food" title="All About Food" desc="No description, website, or topics provided." />
    </div>
  )
}

export default Repositories