import React, { Fragment, useEffect } from 'react'
import LogoutModal from './LogoutModal'
import FooterComponent from './FooterComponent'
import NavbarComponent from './NavbarComponent'
import LeftSidebarComponent from './LeftSidebarComponent'
import { Link, Outlet } from 'react-router-dom'

export default function DashboardLayout() {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <Fragment>
            <div id="wrapper">
                <LeftSidebarComponent />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavbarComponent />
                        <Outlet />
                    </div>
                    <FooterComponent />
                </div>
            </div>
            <Link className="scroll-to-top rounded d-block" onClick={() => scrollTop()}>
                <i className="fas fa-angle-up"></i>
            </Link>
            <LogoutModal />
        </Fragment>
    )
}
