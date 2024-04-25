import express from "express";
import { verifyToken } from "../utils/verifuUser.js";
import { updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);

export default router;
