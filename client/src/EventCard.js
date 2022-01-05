import { Card, Button, Grid, Comment, Input } from 'semantic-ui-react'
import { useState } from 'react'

function EventCard({ event, handleDeletEevent, handleUpdatedEvent, handleNewComment, user }) {

    // const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    // const [date, setDate] = useState("")


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
    }

    function handleDeleteClick(e) {
        e.preventDefault()

        fetch(`http://localhost:3000/events/${event.id}`, {
            method: "DELETE",
            body: JSON.stringify({user_id:user.id}) 

            
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
    }

    return (
        <Grid.Column>
            <Card>
                <Card.Content>
                    <Card.Header>{event.name}</Card.Header>
                    <Card.Description>{event.date}</Card.Description>
                    <Card.Description>{event.time}</Card.Description>
                    <Card.Description>{event.location}</Card.Description>
                    <Card.Description>{event.description}</Card.Description>
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar src='/images/avatar/small/elliot.jpg' />
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
                    <Button onClick={handleDeleteClick}>Delete Event</Button>
                </Card.Content>
                <div className="new-Event-form">
                    <p>Add Comment</p>
                    <form onSubmit={handleCommentSubmit}>
                        <Input
                            type="text"
                            name="Comment"
                            placeholder="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button type="submit">Add Comment</Button>
                    </form>
                </div>

            </Card>
        </Grid.Column>
    );
}
export default EventCard