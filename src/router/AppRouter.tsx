import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginPage } from '../auth/pages/LoginPage'
import { ShopRoutes } from '../shop/routes/ShopRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login */}
        <Route path='/auth/*' element={<LoginPage />}/>
            

        {/*  Coffee App */}
        <Route path='/*' element={<ShopRoutes />}/>
        
    </Routes>
  )
}
