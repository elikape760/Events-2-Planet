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
import Footer from "./Footer";



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
        setEvents(events)
      });
  }, []);

  function handleNewEvent(newEvent) {
    const updatedEventArray = [...events, newEvent];
    setEvents(updatedEventArray);
  }

  function handleNewComment(newComment) {
    const foundEvent = events.find((event) => event.id === newComment.event_id )
    const alteredEvent = {...foundEvent, comments: [...foundEvent.comments, newComment]}
    const newEvents = events.map((event) => {
      if (event.id === alteredEvent.id) {
        return alteredEvent
      } else {
        return event
      }
    });
    setEvents(newEvents)
  }

  function handleDeletEevent(id) {
    const updatedEventsArray = events.filter((event) => event.id !== id);
    setEvents(updatedEventsArray);
  }

  function handleUpdatedEvent(updatedEvent) {
    const updatedEventsArray = events.map((event) => {
      if (event.id === updatedEvent.id) {
        return updatedEvent;
      } else {
        return event;
      }
    });
    setEvents(updatedEventsArray)
  }

  const displayedEvents = events.filter((event) => {
    return event.name.toLowerCase().includes(searchTerm.toLowerCase())
  })


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
            

            <Route path="/home/new">
              <NewEvent
                handleNewEvent={handleNewEvent}
                user={user}
                />
            </Route>

            <Route path="/">
              <Home />
              <EventList
                events={displayedEvents}
                handleDeletEevent={handleDeletEevent}
                handleUpdatedEvent={handleUpdatedEvent}
                handleNewComment={handleNewComment}
                user={user}
              />
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

            <Route path="/">
              <Home user={user} />
              <EventList
                events={displayedEvents}
                handleDeletEevent={handleDeletEevent}
                handleUpdatedEvent={handleUpdatedEvent}
                handleNewComment={handleNewComment}
                user={user}
              />
            </Route>

          </Switch>
        )}
        <Footer />
      </main>

    </div>
  );
}

export default App;
