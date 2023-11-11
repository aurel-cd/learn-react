const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "",
    address: "MetupStreet 5, 12345 Meetup City",
    description: "Amazing first meetup",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: "",
    address: "MetupStreet 5, 12345 Meetup City",
    description: "Amazing first meetup",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}> {meetup.title} </li>;
        })}
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
