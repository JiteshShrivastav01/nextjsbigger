import { MongoClient, ObjectId } from "mongodb";

const Meetup = (props) => {
  return (
    <section>
      <img src={props.meetUpData.image} alt="" style={{ width: "400px" }} />
      <h3>{props.meetUpData.title}</h3>
      <address>{props.meetUpData.address}</address>
      <p>{props.meetUpData.description}</p>
    </section>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://jiteshcs01:jiteshcs01@cluster0.ctckjru.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupcollection = db.collection("meetups");
  const meetups = await meetupcollection.find({}, { _id: 1 }).toArray();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  const client = await MongoClient.connect(
    "mongodb+srv://jiteshcs01:jiteshcs01@cluster0.ctckjru.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupcollection = db.collection("meetups");
  const selectedmeetup = await meetupcollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetUpData: {
        id: selectedmeetup._id.toString(),
        title: selectedmeetup.title,
        image: selectedmeetup.image,
        address: selectedmeetup.address,
        description: selectedmeetup.description,
      },
    },
  };
}

export default Meetup;
