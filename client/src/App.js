// import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import EventList from "./EventList";
import 'semantic-ui-css/semantic.min.css'
import Navbar from "./Navbar";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import NewEvent from "./NewEvent";



function App() {
  const [events, setEvents] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then(resp => resp.json())
      .then(events => {
        // console.log(data);
        setEvents(events)
      });
  }, []);

  function handleNewEvent(newEvent) {
    const updatedEventArray = [...events, newEvent];
    setEvents(updatedEventArray);
  }

  const displayedEvents = events.filter((event) => {
    return event.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <Navbar
        user={user} setUser={setUser}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <Home user={user} />
            </Route>
          </Switch>
        ) : (
          <Switch>

            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>

            <Route path="/home/new">
              <NewEvent
                handleNewEvent={handleNewEvent} />
            </Route>

            <Route path="/">
              <Home />
              <EventList
                events={displayedEvents} />
            </Route>
            
          </Switch>
        )}
      </main>

    </div>
  );
}

export default App;
