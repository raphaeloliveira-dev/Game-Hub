import { Router } from "express";
import * as estudioController from "../controllers/estudioController.js";
import { validarId } from "../middlewares/validarId.js";

const router = Router();

router.get("/", estudioController.listar);
router.get("/:id", validarId, estudioController.get);
router.post("/", estudioController.post);
router.put("/:id", validarId, estudioController.put);
router.delete("/:id", validarId, estudioController.deletar);

export default router;
