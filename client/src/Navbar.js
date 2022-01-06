import { Link } from "react-router-dom"
import Search from "./Search"
// import earth from "./images/world.jpg"

function Navbar({ user, setUser, searchTerm, setSearchTerm }) {

    function handleLogoutClick() {
        fetch("/logout", {
            method: "DELETE"
        })
            .then((r) => {
                if (r.ok) {
                    setUser(null);
                }
            });
    }

    return (
        <header className="img-header">
            <h1 className="header-text">Event-2-Planet</h1>
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <div className="nav-link">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div >
                    {user ? (
                        <>
                            <Link to="/home/new">Add New Event</Link>
                            <button onClick={handleLogoutClick}>Logout</button>
                        </>

                    ) : (
                        <>
                            <Link to="/signup">Signup</Link>
                            <Link to="/login">Login</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Navbar;