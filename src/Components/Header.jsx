import '../Styles/app.css'

function Header({ children }) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

export default Header;