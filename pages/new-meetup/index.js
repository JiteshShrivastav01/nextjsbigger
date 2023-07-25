import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

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
  return <NewMeetupForm onAddMeetup={addmeetupHandler} />;
};

export default NewMeetUp;
