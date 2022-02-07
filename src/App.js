import Dashboard     from './pages/Dashboard'
import DefaultLayout from './layouts/DefaultLayout'
import React         from 'react'
import { Route }     from 'react-router-dom'
import { Routes }    from 'react-router-dom'


export default function App () {
  return (
    <Routes>
      <Route path='/' element={ <DefaultLayout /> }>
        <Route index element={ <Dashboard /> } />
      </Route>
    </Routes>
  )
}
