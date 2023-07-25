import MeetupList from "@/components/meetups/MeetupList";

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
    address: "Plac2 ,city 1",
  },
];

const HomePage = () => {
  return <MeetupList meetups={Dummy_items} />;
};

export default HomePage;
