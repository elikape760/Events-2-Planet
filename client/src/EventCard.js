import { Card, Button, Grid, Comment, Input } from 'semantic-ui-react'
import { useState } from 'react'

function EventCard({ event, handleDeletEevent, handleUpdatedEvent, handleNewComment, user }) {

    const [comment, setComment] = useState("")
    const [updatedDate, setUpdatedDate] = useState("")
    const [updatedTime, setUpdatedTime] = useState("")
    const [updatedLocation, setUpdatedLocation] = useState("")

    function updateEventCard(e) {
        e.preventDefault();

        fetch(`http://localhost:3000/events/${event.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date: updatedDate,
                time: updatedTime,
                location: updatedLocation,
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                handleUpdatedEvent(data);
            })
        setUpdatedDate("")
        setUpdatedTime("")
        setUpdatedLocation("")
    }

    function handleDeleteClick(e) {
        e.preventDefault()

        fetch(`http://localhost:3000/events/${event.id}`, {
            method: "DELETE",
            body: JSON.stringify({ user_id: user.id })


        })
            .then((r => r.json()))
            .then(data => handleDeletEevent(data));

        handleDeletEevent(event.id);
    }



    function handleCommentSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: comment,
                event_id: event.id
            }),
        })
            .then((r) => r.json())
            .then((newComment) => handleNewComment(newComment));

        setComment("")
    }

    return (
        <Grid.Column>
            <Card centered >
                <Card.Content>
                    <Card.Header>{event.name}</Card.Header>
                    <Card.Description>{event.date}</Card.Description>
                    <Card.Description>{event.time}</Card.Description>
                    <Card.Description>{event.location}</Card.Description>
                    <Card.Description>{event.description}</Card.Description>
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar src='https://as1.ftcdn.net/v2/jpg/01/89/44/46/1000_F_189444626_ErFjW1mpwCCUEdnJ4ZnJfoLTk66Qf5Tj.jpg' />
                            <Comment.Content>
                                {event.comments.map((comment) => {
                                    return (
                                        <Comment.Text>{comment.comment}!</Comment.Text>
                                    )
                                })}
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                </Card.Content>
                <Card.Content extra>
                    <Button color='youtube' onClick={handleDeleteClick}>Delete Event</Button>
                </Card.Content>
                <div className="new-Event-form">
                    <form className='comment--button' onSubmit={handleCommentSubmit}>
                        <Input
                            type="text"
                            name="Comment"
                            placeholder="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button primary type="submit">Add Comment</Button>
                    </form>
                    <form onSubmit={updateEventCard}>
                        <Input
                            type="text"
                            name="date"
                            placeholder="Date"
                            value={updatedDate}
                            onChange={(e) => setUpdatedDate(e.target.value)}
                        />
                        <Input
                            type="text"
                            name="time"
                            placeholder="Time"
                            value={updatedTime}
                            onChange={(e) => setUpdatedTime(e.target.value)}
                        />
                        <Input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={updatedLocation}
                            onChange={(e) => setUpdatedLocation(e.target.value)}
                        />
                        <Button primary type="submit">Update Event</Button>
                    </form>
                </div>

            </Card>
        </Grid.Column>
    );
}
export default EventCard