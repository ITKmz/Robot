import './App.css'
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/homePage';
import CalendarPage from './pages/calendarPage';

function App() {
  const pathname = window.location.pathname;
  const [value, setValue] = React.useState(pathname);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </BrowserRouter>
      <paper></paper>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className='navbot'
      >
        <BottomNavigationAction href='/' value='/' label="Home" icon={<HomeIcon />} to='/' />
        <BottomNavigationAction href='/calendar' value='/calendar' label="Calendar" icon={<CalendarMonthIcon />} to='/calendar' />
        <BottomNavigationAction href='/search' value='/search' label="Search" icon={<SearchIcon />} to='/search' />
        <BottomNavigationAction href='/user' value='/user' label="User" icon={<PersonIcon />} to='/user' />
      </BottomNavigation>
    </>


  )
}

export default App
