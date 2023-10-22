import LeftMenu from "./LeftMenu";
import React, {ReactNode} from "react";
import Header from "./Header";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}:LayoutProps) => (
    <>
        <Header />
        <LeftMenu />
        {children}
    </>
)


export default Layout