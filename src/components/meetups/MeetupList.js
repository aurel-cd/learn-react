import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import Logo from "../1_l4xICbIIYlz1OTymWCoUTw.jpg";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image= {Logo}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
