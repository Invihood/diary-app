const { connect, connection, connections } = require('mongoose');
const config = require("config");

const db_url = config.get("dbUrl");

const db = connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

connection.on('open', () => {
    const db_data = connections[0];
    console.log(
        '\x1b[36m%s\x1b[0m',
        `connected to monodb:
    host_name: ${db_data.host},
    port_name: ${db_data.port},
    project_name: ${db_data.name}
    `
    );
});

module.exports = db;