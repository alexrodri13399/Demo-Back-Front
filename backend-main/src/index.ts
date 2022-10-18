import express from "express";
import userRoutes from './routes/api_user';
import "reflect-metadata";
import {AppDataSource} from "./data-source";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./swagger.json"
import cors from "cors"; 

const app = express();
const port = 8080; // default port to listen

AppDataSource.initialize()
    .then(() => console.log("Database connected"))
    .catch(console.error)

app.use(express.json());
app.use(cors());
app.use('/api',userRoutes);
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

export default AppDataSource;