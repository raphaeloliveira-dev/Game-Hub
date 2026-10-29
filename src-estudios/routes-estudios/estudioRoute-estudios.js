import { Router } from "express";
import * as estudioController from "../controllers-estudios/estudioController-estudios.js";
import { validarId } from "../middlewears-estudios/validarId-estudios.js";

const router = Router();

router.get("/", estudioController.listar);
router.get("/:id", validarId, estudioController.buscarPorId);
router.post("/", estudioController.criar);
router.put("/:id", validarId, estudioController.atualizar);
router.delete("/:id", validarId, estudioController.excluir);

export default router;
