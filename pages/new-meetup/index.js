import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const NewMeetUp = (enteredFormData) => {
    console.log(enteredFormData);
  };
  return <NewMeetupForm onAddMeetup={NewMeetUp} />;
};

export default NewMeetUp;
