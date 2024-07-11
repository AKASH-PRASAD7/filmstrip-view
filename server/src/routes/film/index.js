import { Router } from "express";
const router = Router();

import { getFilm } from "../../controllers/index.js";

/**
 * Route     /api/film
 * Des       Get All films
 * Params    none
 * Access    Public
 * Method    GET
 */

router.get("/", getFilm);

export default router;
