import { BrowserRouter, Route, Routes, Link, redirect} from "react-router-dom"
import Lobby from "../view/Lobby";
import React from "react";
import Room from "../view/Room";
import Layout from "../layout/Layout";
import Login from "../view/Login";



function AppRouter() {
    let isAuthorized = sessionStorage.getItem("isLogin");

    return ( <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/lobby" element={<Lobby />} />
                <Route path="/room" element={<Room />} />
            </Routes>
        </Layout>
    </BrowserRouter>)
}

export default AppRouter