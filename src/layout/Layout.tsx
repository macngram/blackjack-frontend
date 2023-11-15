import LeftMenu from "./LeftMenu";
import React, { ReactNode, MouseEvent, KeyboardEvent } from "react";
import Header from "./Header";

interface LayoutProps {
    children: ReactNode
}

export interface StateType {
    left: boolean;
}

export type Anchor = 'left';
export type ToggleDrawer = (anchor: Anchor, open: boolean) => void;


const Layout = ({children}:LayoutProps) => {
    const [state, setState] = React.useState<StateType>({
        left: false,
    });
    const toggleDrawer =
        (anchor: Anchor, open: boolean) => setState({ ...state, [anchor]: open });

    return (
        <>
            <Header toggleDrawer={toggleDrawer} />
            <LeftMenu state={state} toggleDrawer={toggleDrawer}/>
            {children}
        </>
    )
}

export default Layout