import EventCard from "./EventCard";
import { Grid } from 'semantic-ui-react'

function EventList({ events, handleDeletEevent, handleUpdatedEvent, handleNewComment, user }) {
    return (
        <Grid columns={3}>
            {events.map((event) => {
                return (
                    <EventCard
                        key={event.id}
                        event={event}
                        handleDeletEevent={handleDeletEevent}
                        handleUpdatedEvent={handleUpdatedEvent}
                        handleNewComment={handleNewComment}
                        user={user}
                    />
                );
            })}
        </Grid> 
    );
}
export default EventList