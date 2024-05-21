
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Learning Management System</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText"> 
                    <ul className="nav justify-content-end">
                        <li className="nav-item p-3">
                            <a className="navbar-brand active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="navbar-brand" href="#">Courses</a>
                        </li>
                      
                        <li className="nav-item">
                            <a className="nav-link disabled"><button type="button" className="btn btn-secondary">Login</button></a>
                        </li>
                    </ul></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar