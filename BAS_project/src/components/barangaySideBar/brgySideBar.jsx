'use client';

import { Sidebar } from 'flowbite-react';
import {  HiChartPie, HiInbox, HiViewBoards, HiUserCircle } from 'react-icons/hi';
import '/src/components/barangaySideBar/brgySideBar.css'

export default function BrgySidebar() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example" className="sidebar-height">
      <Sidebar.Logo>
      <div className='user-logo'>
        <HiUserCircle size={200} color="black"/>
      </div>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item className="sidebar-item"
            href="#"
            icon={HiChartPie}
          >
            <p>
              Dashboard
            </p>
          </Sidebar.Item>
          <Sidebar.Item className="sidebar-item"
            href="#"
            icon={HiViewBoards}
          >
            <p>
              Report
            </p>
          </Sidebar.Item>
          <Sidebar.Item className="sidebar-item"
            href="#"
            icon={HiInbox}
          >
            <p>
              Account Setting
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}