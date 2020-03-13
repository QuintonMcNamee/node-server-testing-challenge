const People = require('./peopleModel.js');

const db = require('../data/dbConfig.js');

it('Should set testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
});

describe('people model', () => {
    beforeEach(async () => {
        await db('people').truncate();
    });

    describe('insert', () => {
        it('should add person to database', async () => {
            const records = await db('people');
            expect(records).toHaveLength(0);

            await People.insert({ name: 'Quinton' });

            const people = await db('people');
            expect(people).toHaveLength(1);
        });
    });

    it('should add the inserted person to the database', async () => {
        let person = await People.insert({ name: 'Quinton' });
        expect(person.name).toBe('Quinton');

        person = await People.insert({ name: 'Brittany' });
        expect(person.name).toBe('Brittany');

        const people = await db('people');
        expect(people).toHaveLength(2);
    });
});