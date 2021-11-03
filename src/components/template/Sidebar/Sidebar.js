import React from 'react'

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
                            <a href="index.html" title="logo"><img src="assets/images/logo.png" alt="logo-icon" /> </a>
                        </div>

                        <div class="sidebar-menu-inner">

                            <ul class="nav nav-pills nav-stacked custom-nav">
                                <li><a href="index.html"><i class="fa fa-tachometer"></i><span> Dashboard</span></a>
                                </li>
                                <li><a href="cards.html"><i class="fa fa-cogs"></i> <span>Default cards</span></a></li>
                                <li><a href="pricing.html"><i class="fa fa-table"></i> <span>Pricing tables</span></a></li>
                                <li><a href="blocks.html"><i class="fa fa-th"></i> <span>Content blocks</span></a></li>
                                <li><a href="forms.html"><i class="fa fa-file-text"></i> <span>Forms</span></a></li>
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