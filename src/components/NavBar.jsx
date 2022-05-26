
const NavBar = () => {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <svg id="Layer_1" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m19 2v-2h-2v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2h-2v2h-2v19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-19zm0 19a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1-1v-17h14zm-2-12h-10v-2h10zm0 4h-10v-2h10zm-4 4h-6v-2h6z" /></svg>
                Note Keeper
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="https://youtu.be/dQw4w9WgXcQ">Home</a>
                    <a className="nav-item nav-link" href="https://youtu.be/dQw4w9WgXcQ">Features</a>
                    <a className="nav-item nav-link" href="https://youtu.be/dQw4w9WgXcQ">Pricing</a>
                    <a className="nav-item nav-link disabled" href="/">Disabled</a>
                </div>
            </div>
        </nav>
    </>;
};

export default NavBar;
