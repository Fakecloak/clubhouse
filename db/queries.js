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

async function createMessage( {title, message, user_id}) {
    await pool.query(
        `
        INSERT INTO messages 
        (title, message, user_id) VALUES ($1, $2, $3)
        `, [title, message, user_id] 
    );
}

async function getAllMessages() {
    const {rows} = await pool.query( 
        `
        SELECT messages.id, messages.title, messages.message, messages.created_at,
        users.first_name, users.last_name 
        FROM messages JOIN users ON messages.user_id = users.id
        ORDER BY messages.created_at DESC`
    );
    return rows;
}

async function makeUserMember(userId) {
    await pool.query(
        `
        UPDATE users 
        SET is_member = TRUE
        WHERE id = $1
    `,
    [userId]
    );
}

module.exports = { getUserByEmail, getUserByID, createUser, createMessage, getAllMessages, makeUserMember }; 