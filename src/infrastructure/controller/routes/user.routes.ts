import { Router } from "express";
import { UserApplicationService } from "../../../application/service/user.service.application";
import { UserController } from "../user.controller";
import { UserRepository } from "../../../infrastructure/repository/user.repository";

const userRoutes = Router();

const userRepository = new UserRepository();
const userServiceApplication = new UserApplicationService(userRepository);
const userController = new UserController(userServiceApplication);

userRoutes.post("/new-user", async(req, res) =>{
        try{
        const user = await userController.createUser(req.body);
        res.status(201).json(user)
    } catch (error){
        res.status(400).json({ error: error});
    }
});

userRoutes.get("/users", async(req, res) =>{
    try{
        const users = await userController.getUsers();
        res.status(200).json(users);
    } catch (error){
        res.status(400).json({ error: error});
    }
});

userRoutes.get("/user/:id", async(req, res) =>{
    try{
        const user = await userController.findUserById(req.params.id);
        res.status(200).json(user)
    } catch (error){
        res.status(400).json({ error: error});
    }
});

userRoutes.put("/user/:id", async(req, res) =>{
    try{
        const user = await userController.updateUser(req.params.id, req.body);
        res.status(200).json(user)
    } catch (error){
        res.status(400).json({ error: error});
    }
}); 

userRoutes.delete("/user/:id", async(req, res) =>{
    try{
        await userController.deleteUser(req.params.id);
        res.status(200).json({ message: "Usuario eliminado" })
    } catch (error){
        res.status(400).json({ error: error});
    }
}); 

export default userRoutes;