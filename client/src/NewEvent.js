import { useState } from "react"
function NewEvent({ handleNewEvent, user }) {
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
        user_id: user.id
      }),
    })
      .then((r) => r.json())
      .then((newEvent) => handleNewEvent(newEvent));

    setName("")
    setDate("")
    setTime("")
    setLocation("")
    setDescription("")
  }

  return (

    <div className="new-Event-form">
      <div>

      </div>
      <h2 id="new-event-title" >New Event</h2>
      <img id="new-event-img" src="https://images.assetsdelivery.com/compings_v2/surfupvector/surfupvector2006/surfupvector200600845.jpg" alt="" />
      <form className="authForm" onSubmit={handleSubmit}>
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