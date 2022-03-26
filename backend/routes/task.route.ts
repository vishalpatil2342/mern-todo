import { Router } from "express";
import { createTask, deleteTask, getAllTask } from "../controllers/task.controller";

const router = Router();

router.route("/").get(getAllTask).post(createTask);
router.delete('/:id',deleteTask);

export default router;