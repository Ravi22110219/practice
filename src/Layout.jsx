import React from 'react'
import UpperNav from './Components/NavbarSection/UpperNav'
import NavBar from './Components/NavbarSection/NavBar'
import FooterSection from './Components/Footer/FooterSection'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <UpperNav />
    <NavBar />
    <Outlet />
    <FooterSection />
    </>
  )
}

export default Layout;