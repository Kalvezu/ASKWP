function Footer(){

    return(
        <footer className="position-absolute bottom-0">
            <p>Cassiano Speroto</p>
            <p>{new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;