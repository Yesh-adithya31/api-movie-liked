import express from "express";
import { addToLikedMovies, getLikedMovies, removeFromLikedMovies } from "../controllers/movieLikesController.js";

const router = express.Router();

// Movies Likes Routes
router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikedMovies);
router.put("/remove", removeFromLikedMovies);

export default router;
