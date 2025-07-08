import express from 'express';
import { addNotes, getNotes, updateNotes, deleteNotes, summaryNotes } from '../controller/notesController.js';

const router = express.Router();
router.get("/",getNotes);
router.post("/", addNotes);
router.post("/", updateNotes);
router.delete("/", deleteNotes);
router.get("/", summaryNotes);

export default router;