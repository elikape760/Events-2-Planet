import { useState } from "react"
function NewEvent ({ handleNewEvent }) {
const [name, setName] = useState("")
const [date, setDate] = useState("")
const [time, setTime] = useState("")
const [location, setLocation] = useState("")
const [description, setDescription] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            date: date,
            time: time,
            location: location,
            description: description,
          }),
        })
          .then((r) => r.json())
          .then((newEvent) => handleNewEvent(newEvent));
      }
    
      return (
        <div className="new-Event-form">
          <h2>New Event</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Event name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="Date"
              placeholder="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="text"
              name="Time"
              placeholder="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <input
              type="text"
              name="Location"
              placeholder="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="text"
              name="Description"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Event</button>
          </form>
        </div>
      );
    
}
export default NewEvent