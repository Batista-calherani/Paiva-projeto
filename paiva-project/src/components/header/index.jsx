export default function Header() {
    return (
        <>
                <nav className="navbar lg:navbar-expand bg-1 fg-2">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Navbar
                        </a>
                        <button
                            className="btn-icon navbar-toggler"
                            type="button"
                            data-bs-toggle="drawer"
                            data-bs-target="#navbarNavMenu"
                            aria-controls="navbarNavMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" aria-hidden="true" />
                        </button>
                        <dialog
                            className="drawer drawer-end"
                            tabIndex={-1}
                            id="navbarNavMenu"
                            aria-labelledby="navbarNavMenuLabel"
                        >
                            <div className="drawer-header">
                                <h5 className="drawer-title" id="navbarNavMenuLabel">
                                    Menu
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="drawer"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="drawer-body">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Features
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="nav-link"
                                            type="button"
                                            data-bs-toggle="menu"
                                            aria-expanded="false"
                                        >
                                            Menu link
                                        </button>
                                        <div className="menu">
                                            <a className="menu-item" href="#">
                                                Action
                                            </a>
                                            <a className="menu-item" href="#">
                                                Another action
                                            </a>
                                            <a className="menu-item" href="#">
                                                Something else here
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </dialog>
                    </div>
                </nav>










                {/* <nav className="navbar fg-2">
                <div className="container-fluid justify-content-evenly ">
                    <Link className="navbar-brand" href="/">
                        <img
                            src="https://placehold.co/100x100"
                            alt="Logo"
                            width={30}
                            height={24}
                            className="d-inline-block align-text-top"
                        />
                        ShopOnline
                    </Link>
                    <form className="d-flex w-50 " role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn-outline theme-success rounded p-2 bg-success " type="submit">Search</button>
                    </form>
                    <Link className="btn-solid theme-primary bg-info py-1 px-3 rounded fw-bold " role="button" aria-disabled="true" href={"/cadastro"} >
                        Cadastre-se
                    </Link>
                    <Link className="btn-solid theme-secondary bg-primary py-1 px-3 rounded fw-bold " role="button" aria-disabled="true" href={"/login"} >
                        Login
                    </Link>
                </div>
            </nav> */}
        </>
    );
}
