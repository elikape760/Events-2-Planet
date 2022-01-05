import { Link } from "react-router-dom"
import Search from "./Search"

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
        <header>
            <h1>Event-2-Planet</h1>
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
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
        </header>
    );
}

export default Navbar;