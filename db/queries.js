const pool = require('.pool');

async function getUserByEmail(email) {
    const {rows} = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    return rows[0];
}

async function getUserByEmail(userID) {
    const {rows} = await pool.query(`SELECT * FROM users WHERE id = $1`, [userID]);
    return rows[0];
}

module.exports = { getUserByEmail, };