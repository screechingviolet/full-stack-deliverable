import express from "express";
import cors from "cors";
import { db } from "./FirebaseInit.js";
import { collection, getDocs } from "firebase/firestore";
import dotenv from "dotenv";

const app = express();
app.use(cors());
dotenv.config();

app.listen(8080, () => {
      console.log('Listening on port 8080');
});

app.get('/', (req, res) => {
      res.send('Hello world :)')
})

app.get("/frogs", async (req, res) => {
	const frogRef = collection(db, "frogs");
	const frogSnap = await getDocs(frogRef);
	const docs = [];
	let count = 0;
	frogSnap.forEach((doc) => {
		docs.push(doc.data());
		count++;
	});
	let rand = Object.keys(docs)[Math.floor(Math.random() * count)];
		console.log(docs[rand]["img"]);
  res.send(docs[rand]);
});