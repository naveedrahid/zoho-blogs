import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import PostDetail from '../components/pages/PostDetail'
import MasterLayout from '../components/MasterLayout/MasterLayout'
import { UnAuthenticatedRoutesConstant } from '../utils/nav.constant'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'

function UnAuthenticatedRoutes() {
  return (
    <Routes>
        <Route element={<MasterLayout />}>
            <Route path={UnAuthenticatedRoutesConstant.HOME} element={<Home />} />
            <Route path={UnAuthenticatedRoutesConstant.POST_DETAIL} element={<PostDetail />} />
            <Route path={UnAuthenticatedRoutesConstant.LOGIN} element={<Login />} />
            <Route path={UnAuthenticatedRoutesConstant.REGISTER} element={<Register />} />
        </Route>
    </Routes>
  )
}

export default UnAuthenticatedRoutes