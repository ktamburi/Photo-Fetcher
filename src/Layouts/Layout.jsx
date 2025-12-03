import Header from '../Components/Header.jsx';

function Layout({ children }) {
    return (
        <>
            <Header children='Klaudias Photo Fetcher' />
            {children}
        </>
    );
}

export default Layout;
