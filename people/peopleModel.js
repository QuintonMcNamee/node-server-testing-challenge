const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    getAll,
};

async function insert(person) {
    const [id] = await db('people').insert(person, 'id');

    return db('people')
        .where({ id })
        .first();
};

function getAll() {
    return db('people');
}

