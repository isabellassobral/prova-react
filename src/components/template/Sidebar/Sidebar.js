import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/logo.png'

function Sidebar(props) {

    return (
        <>
            <body class="sidebar-menu-collapsed">

                <section>

                    <div class="sidebar-menu sticky-sidebar-menu">

                        <div class="logo">
                            <h1><a href="index.html">Collective</a></h1>
                        </div>

                        <div class="logo-icon text-center">
                            <Link to='/index' title="logo"><img src={Logo} alt="logo-icon" /> </Link>
                        </div>

                        <div class="sidebar-menu-inner">

                            <ul class="nav nav-pills nav-stacked custom-nav">
                                <li><Link to='/index'><i class="fa fa-tachometer"></i><span> Dashboard</span></Link>
                                </li>
                                <li><Link to='/cards'><i class="fa fa-cogs"></i> <span>Default cards</span></Link></li>
                                <li><Link to='/pricing'><i class="fa fa-table"></i> <span>Pricing tables</span></Link></li>
                                <li><Link to='/blocks'><i class="fa fa-th"></i> <span>Content blocks</span></Link></li>
                                <li><Link to='/forms'><i class="fa fa-file-text"></i> <span>Forms</span></Link></li>
                            </ul>

                            <a class="toggle-btn" onclick="toggleMenu()">
                                <i class="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
                                <i class="fa fa-angle-double-right menu-collapsed__right"></i>
                            </a>

                        </div>
                    </div>
                </section>

            </body>

        </>
    )
}

export default Sidebar