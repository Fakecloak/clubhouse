const pool = require('./pool');

async function getUserByEmail(email) {
    const {rows} = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    return rows[0];
}

async function getUserByID(userID) {
    const {rows} = await pool.query(`SELECT * FROM users WHERE id = $1`, [userID]);
    return rows[0];
}

async function createUser(user) {
    const { firstName, lastName, email, password } = user;

    await pool.query(`INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)`,[firstName, lastName, email, password]);

    
}

module.exports = { getUserByEmail, getUserByID, createUser };