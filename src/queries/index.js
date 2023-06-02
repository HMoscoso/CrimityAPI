const queries = require('./query');
const awa = require('./database');



module.exports = awa.sql, awa.queries;
module.exports.getConnection = awa.getConnection;

module.exports = queries.queries;