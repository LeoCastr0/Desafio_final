import pg from "pg";

async function connect() {
    if(global.connection) {
        return global.connection.connect();
    }
    const pool = new pg.Pool({
        connectionString: "postgres://popgvalt:TmPUHseepVvAPYVxKHdsCN9GWrjBqVDQ@batyr.db.elephantsql.com/popgvalt"
    });

    global.connection = pool;

    return pool.connect();
};

export {
    connect
};