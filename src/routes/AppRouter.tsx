import { BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Lobby from "../view/Lobby";
import React from "react";
import Room from "../view/Room";
import Layout from "../layout/Layout";


function AppRouter() {
    return ( <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/lobby" element={<Lobby />} />
                <Route path="/room" element={<Room />} />
            </Routes>
        </Layout>
    </BrowserRouter>)
}

export default AppRouter