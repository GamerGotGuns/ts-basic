import { execSync } from "child_process";
import express, { Express } from "express";
import router from "./routes";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", async (req, res) => {
	res.json({ Message: " Hello world" });
});

app.use(router);

app.listen(port, () => {
	if (process.platform == "win32") execSync("cls");
	else execSync("clear");

	console.log(
		`\n\n\n\t🚀 Server ready at: http://localhost:${port} \
		  \n\t✨ For refs  Not hosted \n\n\n\b`
	);
});
