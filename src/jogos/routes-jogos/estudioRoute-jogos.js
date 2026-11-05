import { Router } from "express";
import * as jogoController from "../controllers-jogos/estudioController-jogos.js";
import { validarId } from "../middlewears-jogos/validarId-jogos.js";

const router = Router();

router.get("/", jogoController.listar);
router.get("/:id", validarId, jogoController.get);
router.post("/", jogoController.post);
router.put("/:id", validarId, jogoController.put);
router.delete("/:id", validarId, jogoController.deletar);

export default router;