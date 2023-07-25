import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

const Meetup = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetUpData.title}</title>
        <meta name="description" content={props.meetUpData.description} />
      </Head>
      <section>
        <img src={props.meetUpData.image} alt="" style={{ width: "400px" }} />
        <h3>{props.meetUpData.title}</h3>
        <address>{props.meetUpData.address}</address>
        <p>{props.meetUpData.description}</p>
      </section>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://jiteshcs01:jiteshcs01@cluster0.ctckjru.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupcollection = db.collection("meetups");
  const meetups = await meetupcollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: true,
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
