import EventCard from "./EventCard";
import { Grid } from 'semantic-ui-react'

function EventList({ events, handleNewEvent }) {
    return (
        <Grid  centered style={{width: "100%", margin: 'auto'}} columns={2}>
            {events.map((event) => {
                return (
                    <EventCard
                        key={event.id}
                        event={event}
                    />
                );
            })}
        </Grid> 
    );
}
export default EventList