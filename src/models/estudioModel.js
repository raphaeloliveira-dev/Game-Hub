
import conexao from "../../../db.js";

export function listar(callback) {
    const sql = "SELECT * FROM estudios ORDER BY id";
    conexao.query(sql, callback);
}

export function get(id, callback) {
    const sql = "SELECT * FROM estudios WHERE id = ?";
    conexao.query(sql, [id], callback);
}

export function post(dados, callback) {
    const sql = "INSERT INTO estudios (nome, pais) VALUES (?, ?)";
    conexao.query(sql, [dados.nome, dados.pais], callback);
}

export function put(id, dados, callback) {
    const sql = "UPDATE estudios SET nome = ?, pais = ? WHERE id = ?";
    conexao.query(sql, [dados.nome, dados.pais, id], callback);
}

export function deletar(id, callback) {
    const sql = "DELETE FROM estudios WHERE id = ?";
    conexao.query(sql, [id], callback);
}
