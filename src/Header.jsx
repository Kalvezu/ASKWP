import "../src/Styles/Header.css"

function Header(){

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
            <img src="" alt="Logo" />
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Products</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">About</a>
                </li>
            </ul>
            <div className="position-absolute end-0 me-5">
                <img src="" alt="Lupe" />
                <input />
            </div>
        </nav>
    )
}

export default Header;