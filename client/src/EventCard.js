import { Card, Button, Input, Grid, Comment } from 'semantic-ui-react'

function EventCard({ event }) {
    return (
        <Grid.Column>
            <Card>
                <Card.Content>
                    <Card.Header>{event.name}</Card.Header>
                    <Card.Description>{event.description}</Card.Description>
                    <Card.Description>{event.date}</Card.Description>
                    <Card.Description>{event.time}</Card.Description>
                    <Card.Description>{event.location}</Card.Description>
                    <Comment.Group>
                        <Comment.Content>
                            <Comment.Text>{event.comment.comment}!</Comment.Text>
                        </Comment.Content>
                    </Comment.Group>
                </Card.Content>
                <Card.Content extra>
                    <Button type="submit">Delete</Button>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
}
export default EventCard