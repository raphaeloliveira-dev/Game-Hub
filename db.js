import "dotenv/config";
import mysql from "mysql2";

const conexao = mysql.createConnection({
    host: (process.env.DB_HOST || "localhost").trim(),
    port: Number(process.env.DB_PORT || 3306),
    user: (process.env.DB_USER || "root").trim(),
    password: (process.env.DB_PASSWORD || "root").trim(),
    database: (process.env.DB_NAME || "gamehub_db").trim(),
});

export default conexao;

