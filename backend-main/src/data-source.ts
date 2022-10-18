import { DataSource } from "typeorm";
import { User } from "./entity/user";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./data/users.db",
    synchronize: true,
    logging: false,
    entities: [User]
})