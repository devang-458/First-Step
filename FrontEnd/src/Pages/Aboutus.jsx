import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutUsPage from '../components/AboutUsPage'
import LoggedInHeader from '../components/LoggedInHeader'

export default function Aboutus() {
  return (
    <div>
        <LoggedInHeader/>
        <AboutUsPage />
        <Footer />
    </div>
  )
}
