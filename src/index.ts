import { application } from "express";
import { app } from "./app";
import { ClassController } from "./enpoints/ClassController";
import createTurma from './endpoints/createTurma';
import getTurma from './endpoints/getTurma';

// const app: Express = express();

// app.use(express.json());
// app.use(cors());

// const server = app.listen(process.env.PORT || 3003, () => {
//   if (server) {
//      const address = server.address() as AddressInfo;
//      console.log(`Server is running in http://localhost: ${address.port}`);
//   } else {
//      console.error(`Failure upon starting server.`);
//   }
// });

// app.post("/class", createTurma)

// app.get("/active", getTurma)

const classController = new ClassController();

app.post("/class", classController.createClass);
