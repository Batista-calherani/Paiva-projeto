import Link from "next/link";
export default function Header() {
    return (
        <>
            <header className="h-100 mb-1" >
                <nav className="navbar bg-1 fg-2">
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
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn-outline theme-success rounded p-2 bg-success " type="submit">Search</button>
                        </form>
                        <Link className="btn-solid theme-primary bg-info py-1 px-3 rounded fw-bold " role="button" aria-disabled="true" href={"/cadastro"} >
                            Cadastre-se
                        </Link>
                        <Link className="btn-solid theme-secondary bg-primary py-1 px-3 rounded fw-bold " role="button" aria-disabled="true" href={"/login"} >
                            Login
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
}
