import express from "express";
import { addUser } from "../Controller/adminController.js";
import {
    adminMiddleware,
    authMiddleware
} from "../Middleware/authMiddleware.js";

const adminRouter = express.Router();

// Get Method


// Post Method
adminRouter.post("/create-user", authMiddleware, adminMiddleware, addUser);

// Put Method


// Delete Method


export default adminRouter;
