import * as estudioModel from "../models-estudios/estudioModel-estudios.js";
import { textoValido } from "../utils-estudios/validacoes-estudios.js";

export function listar(req, res, next) {
    estudioModel.listar((erro, resultado) => {
        if (erro) return next(erro);
        return res.status(200).json(resultado);
    });
}

export function get(req, res, next) {
    estudioModel.get(req.id, (erro, resultado) => {
        if (erro) return next(erro);
        if (resultado.length === 0) {
            return res.status(404).json({ erro: "Estúdio não encontrado" });
        }
        return res.status(200).json(resultado[0]);
    });
}

export function post(req, res, next) {
    const { nome, pais } = req.body ?? {};
    if (!textoValido(nome, 100) || !textoValido(pais, 60)) {
        return res.status(400).json({ erro: "Informe nome (até 100 caracteres) e pais (até 60)" });
    }

    const dados = { nome: nome.trim(), pais: pais.trim() };

    estudioModel.post(dados, (erro, resultado) => {
        if (erro) return next(erro);
        return res.status(201).json({
            mensagem: "Estúdio cadastrado com sucesso",
            id: resultado.insertId
        });
    });
}

export function put(req, res, next) {
    const { nome, pais } = req.body ?? {};
    if (!textoValido(nome, 100) || !textoValido(pais, 60)) {
        return res.status(400).json({ erro: "Informe nome (até 100 caracteres) e pais (até 60)" });
    }

    const dados = { nome: nome.trim(), pais: pais.trim() };

    estudioModel.get(req.id, (erro, registros) => {
        if (erro) return next(erro);
        if (registros.length === 0) {
            return res.status(404).json({ erro: "Estúdio não encontrado" });
        }

        estudioModel.put(req.id, dados, (erro) => {
            if (erro) return next(erro);
            return res.status(200).json({ mensagem: "Estúdio atualizado com sucesso" });
        });
    });
}

export function deletar(req, res, next) {
    estudioModel.deletar(req.id, (erro, resultado) => {
        if (erro) return next(erro);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: "Estúdio não encontrado" });
        }
        return res.status(200).json({ mensagem: "Estúdio excluído com sucesso" });
    });
}