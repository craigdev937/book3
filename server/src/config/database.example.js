import pgk from "pg";
const { Pool } = pgk;

export const pool = new Pool({
    user: "test123test456",
    password: "test123test456",
    host: "localhost",
    port: 5432,
    database: "test"
});




