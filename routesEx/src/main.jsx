import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom"
import Header from './components/Header.jsx'

import Body from './components/Body.jsx'


import MyForm from './components/MyForm.jsx'
import Form_action from './components/Form_action.jsx'
import PageBody from './components/landingPage/PageBody.jsx'
import Page2Body from './components/landingPage/Page2Body.jsx'
import Page3 from './components/landingPage/Page3.jsx'
import Page4 from './components/landingPage/Page4.jsx'







const router = createBrowserRouter([
  {
    path: '/',
    element: <App />

  },

  {
    path: '/header',
    element: <Header />
  },

  {
    path: '/body',
    element: <Body />
    // path: '/body',
    // element: <Body /> 
  },
 
 {
  path: '/form',
  element: <MyForm />,
  action: Form_action 
 },
 {
  path: '/page1',
  element: <PageBody />
 },
 {
  path: '/page2',
  element: <Page2Body />
 },
 {
  path: '/page3',
  element: <Page3 />
 },
 {
  path: '/page4',
  element: <Page4 />
 }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
