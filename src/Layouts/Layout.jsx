import Header from '../Components/Header.jsx';

function Layout({ children }) {
    return (
        <>
            <Header children='Klaudia's Photo Fetcher' />
            {children}
        </>
    );
}

export default Layout;
