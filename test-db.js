const pool = require('./db/pool');

async function test() {
    const result  = await pool.query("SELECT NOW()");
    console.log(result.rows);
    process.exit();
}

test();

// If you see a timestamp, your connection works.