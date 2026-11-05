import * as jogoModel from "../models-jogos/estudioModel-jogos.js";
import { textoValido, inteiroPositivo } from "../utils/utils-jogos.js";

export function listar(req, res, next) {
    jogoModel.listar((erro, resultado) => {
        if (erro) return next(erro);
        return res.status(200).json(resultado);
    });
}

export function get(req, res, next) {
    jogoModel.get(req.id, (erro, resultado) => {
        if (erro) return next(erro);
        if (resultado.length === 0) {
            return res.status(404).json({ erro: "Jogo não encontrado" });
        }
        return res.status(200).json(resultado[0]);
    });
}

export function post(req, res, next) {
    const { titulo, ano_lancamento, estudio_id } = req.body ?? {};

    if (!textoValido(titulo, 150)
        || !inteiroPositivo(ano_lancamento)
        || ano_lancamento > 9999
        || !inteiroPositivo(estudio_id)) {
        return res.status(400).json({
            erro: "Informe titulo (até 150 caracteres), ano_lancamento de 1 a 9999 e estudio_id inteiro positivo"
        });
    }

    const dados = { titulo: titulo.trim(), ano_lancamento, estudio_id };

    jogoModel.post(dados, (erro, resultado) => {
        if (erro) return next(erro);
        return res.status(201).json({
            mensagem: "Jogo cadastrado com sucesso",
            id: resultado.insertId
        });
    });
}

export function put(req, res, next) {
    const { titulo, ano_lancamento, estudio_id } = req.body ?? {};

    if (!textoValido(titulo, 150)
        || !inteiroPositivo(ano_lancamento)
        || ano_lancamento > 9999
        || !inteiroPositivo(estudio_id)) {
        return res.status(400).json({
            erro: "Informe titulo (até 150 caracteres), ano_lancamento de 1 a 9999 e estudio_id inteiro positivo"
        });
    }

    const dados = { titulo: titulo.trim(), ano_lancamento, estudio_id };

    jogoModel.buscarPorId(req.id, (erro, registros) => {
        if (erro) return next(erro);
        if (registros.length === 0) {
            return res.status(404).json({ erro: "Jogo não encontrado" });
        }

        jogoModel.put(req.id, dados, (erro) => {
            if (erro) return next(erro);
            return res.status(200).json({ mensagem: "Jogo atualizado com sucesso" });
        });
    });
}

export function deletar(req, res, next) {
    jogoModel.deletar(req.id, (erro, resultado) => {
        if (erro) return next(erro);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: "Jogo não encontrado" });
        }
        return res.status(200).json({ mensagem: "Jogo excluído com sucesso" });
    });
}