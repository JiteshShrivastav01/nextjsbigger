import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

const NewMeetUp = () => {
  const router = useRouter();
  async function addmeetupHandler(enteredFormData) {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredFormData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add New Meetup</title>
        <meta name="description" content="Here u can add new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addmeetupHandler} />
    </Fragment>
  );
};

export default NewMeetUp;
