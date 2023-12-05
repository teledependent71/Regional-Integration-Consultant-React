import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Integration Consultant</title>
        <meta property="og:title" content="Regional Integration Consultant" />
      </Helmet>
    </div>
  )
}

export default Home
