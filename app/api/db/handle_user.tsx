import * as sql from 'mysql2/promise'

interface ConnectionConfig {
    host: string;
    user: string;
    database: string;
    port: number;
    password: string;
    ssl: string;
}

export async function GenerateConnection(): Promise<sql.Connection> {
    const connectionConfig: ConnectionConfig = {
        host: 'mysql://avnadmin:AVNS_44hHtqYxtXZBEAC9Qyr@mysql-378133cb-superbasededatos.l.aivencloud.com:27323/defaultdb?ssl-mode=REQUIRED',
        user: 'avnadmin',
        database: 'defaultdb',
        port: 27323,
        password: 'AVNS_44hHtqYxtXZBEAC9Qy',
        ssl: 'REQUIRED'
    };

    const conexion_db = await sql.createConnection(connectionConfig);
    return conexion_db;
}
