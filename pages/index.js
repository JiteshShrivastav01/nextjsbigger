import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const Dummy_items = [
  {
    id: "m1",
    title: "Place 1",
    image:
      "https://th.bing.com/th/id/OIP.yQV9YN97q7-pD-MDLHFaJAHaEK?pid=ImgDet&rs=1",
    address: "Plac1 ,city 1",
  },
  {
    id: "m2",
    title: "Place 2",
    image:
      "https://th.bing.com/th/id/R.0af9cf9713f5c23dfc432fbdb416aafc?rik=dQPuvuDStQ02Nw&riu=http%3a%2f%2fstatic6.businessinsider.com%2fimage%2f51c9df8c69bedd794c00000d%2fthe-25-most-popular-tourist-attractions-in-the-world.jpg&ehk=OstwvbL%2fgryABVDTY1lw10fxo38rvUujCusgq32YRW4%3d&risl=&pid=ImgRaw&r=0",
    address: "Place2 ,city 1",
  },
];

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
