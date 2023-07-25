import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://jiteshcs01:jiteshcs01@cluster0.ctckjru.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupcollection = db.collection("meetups");
  const meetups = await meetupcollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
