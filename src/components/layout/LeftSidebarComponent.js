import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function LeftSidebarComponent() {
    const location = useLocation()
    return (

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className={`nav-item ${location.pathname == '/' ? 'active' : ''}`}>
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Interface
            </div>

            <li className={`nav-item ${location.pathname == '/reports' ? 'active' : ''}`}>
                <Link to={'/reports'} className="nav-link" href="#">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Reports</span>
                </Link>
            </li>

            <li className={`nav-item ${location.pathname == '/payments' ? 'active' : ''}`}>
                <Link to={'/payments'} className="nav-link" href="#">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Payments</span>
                </Link>
            </li>


            <li className={`nav-item ${location.pathname == '/users' ? 'active' : ''}`}>
                <Link to={'/users'} className="nav-link" href="#">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Users</span>
                </Link>
            </li>

            <li className={`nav-item ${location.pathname == '/employees' ? 'active' : ''}`}>
                <Link to={'/employees'} className="nav-link" href="#">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Employess</span>
                </Link>
            </li>

            <li className={`nav-item ${location.pathname == '/orders' ? 'active' : ''}`}>
                <Link to={'/orders'} className="nav-link" href="#">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Orders</span>
                </Link>
            </li>


            <li className={`nav-item ${location.pathname == '/events' ? 'active' : ''}`}>
                <Link to={'/events'} className="nav-link" href="#">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Events</span>
                </Link>
            </li>
            <li className={`nav-item ${location.pathname == '/toast-example' ? 'active' : ''}`}>
                <Link to={'/toast-example'} className="nav-link" href="#">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Toast Examples</span>
                </Link>
            </li>

            <li className="nav-item d-none">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    )
}
