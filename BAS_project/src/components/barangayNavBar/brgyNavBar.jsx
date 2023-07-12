'use client';

import { Dropdown, Navbar, Avatar } from 'flowbite-react'
import logoImage from '/src/assets/images/logos/BAS-Logo-1.2.png'
import logoImage2 from '/src/assets/images/logos/CodeVerts-logo-2.png'
import '/src/components/barangayNavBar/brgyNavBar.css'

export default function BrgyNavbar() {
  return (
    <Navbar
      fluid
      rounded
      style={{ backgroundColor: '#407C87', caretColor: 'transparent'}}
      // className="custom-navbar"
    >
      <Navbar.Brand href="">
        <img
          alt="BAS Logo"
          className="navbar-logo mr-3 h-6 sm:h-9"
          src={logoImage}
        />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> */}
        <span>  
          Barangay Appointment System
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img={logoImage2} rounded/> }
        >
          <Dropdown.Header>
            <span className="block text-sm">
            Welcome, Brgy!
            </span>
            <span className="block truncate text-sm font-medium">
              name@sample.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}