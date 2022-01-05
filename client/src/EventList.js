import EventCard from "./EventCard";
import { Grid } from 'semantic-ui-react'

function EventList({ events, handleDeletEevent, handleUpdatedEvent, handleNewComment, user }) {
    return (
        <Grid  centered style={{width: "100%", margin: 'auto'}} columns={2}>
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