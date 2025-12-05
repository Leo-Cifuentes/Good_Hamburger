

const Navbar = () => {
    return (
        <>
            <section className="wrapper-nav">
                <div className="container-md">
                    <div className="row">
                        <nav className="navbar">
                            <div className="container">
                                <a className="navbar-brand" href="#">
                                    <img src="/src/assets/icon.svg" alt="Good Hamburger" height="50" className="d-inline-block align-tex-top me-2"/>
                                    Good <span>Hambuger</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar;