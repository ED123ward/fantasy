import React from 'react'
// import Page from './components/Page';
import { Page } from './components'
import { CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Terms from 'views/Terms'
import Home from 'views/Home'

function App() {
  return (
    <>
      <CssBaseline />
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tos" element={<Terms />} />
        </Routes>
      </Page>
    </>
  )
}

export default App
