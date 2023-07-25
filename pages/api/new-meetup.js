import { MongoClient } from "mongodb";

const Handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = req.body;
      console.log("hello1");

      const client = await MongoClient.connect(
        "mongodb+srv://jiteshcs01:jiteshcs01@cluster0.ctckjru.mongodb.net/meetups?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
      );

      const db = client.db();
      const meetupcollection = db.collection("meetups");
      const result = await meetupcollection.insertOne(data);

      console.log(result);
      client.close();

      res.status(201).json({ message: "Data inserted." });
    } catch (error) {
      console.error("Error inserting data:", error);
      res.status(500).json({ message: "Error inserting data." });
    }
  } else {
    res.status(404).json({ message: "Invalid request method." });
  }
};

export default Handler;
