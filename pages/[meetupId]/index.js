const Meetup = (props) => {
  return (
    <section>
      <img
        src="https://th.bing.com/th/id/OIP.yQV9YN97q7-pD-MDLHFaJAHaEK?pid=ImgDet&rs=1"
        alt=""
        style={{ width: "400px" }}
      />
      <address>Place 1 ,City 3</address>
      <p>Title</p>
    </section>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetUpData: {
        image:
          "https://th.bing.com/th/id/OIP.yQV9YN97q7-pD-MDLHFaJAHaEK?pid=ImgDet&rs=1",
        id: meetupId,
        title: "The place 3",
        address: "Place 3 , city 3.",
        description: "abcdefghijklmnopqr",
      },
    },
  };
}

export default Meetup;
