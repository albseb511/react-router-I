import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
      {[
        {
          link: '/',
          title: 'Home',
        },
        {
          link: '/about-us',
          title: 'About',
        },
        {
          link: '/contact',
          title: 'Contact',
        },
        {
          link: '/services',
          title: 'Services',
        },
        {
          link: '/login',
          title: 'Login',
        },
      ].map(item => (
        <Link style={{padding: 10}} key={item.link} to={item.link}>
          {item.title}
        </Link>
      ))}
    </>
  )
}

export default NavBar
