import { Router,Request,Response } from 'express';
import { User } from '../entity/user';
import AppDataSource from "../index";
import crypto from 'crypto';

const router = Router();

router.post('/create', async (req : Request, res : Response) => {

    try {
        let {username,password} = req.body;

        const user = new User;
        user.username = username
        user.password = crypto.createHash('sha256').update(password).digest('hex');

        const newUser = await AppDataSource.getRepository(User).create(user);
        const result = await AppDataSource.getRepository(User).save(newUser);
        res.json({
            status: 200,
            message: `El usuario ${username} se creó correctamente`
        });
    } catch (error) {
        res.json({
            status: 400,
            message: "Bad Request"
        });
    }

})

export default router;