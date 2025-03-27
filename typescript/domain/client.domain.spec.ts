import { Client, Person } from './client.domain';

describe('Client', () => {
  it('creates a client successfully', () => {
    const person: Person = { id: 1, email: 'jose@silva.com', internalNumber: '123 '};
    const client = new Client(1000, 'Gupy', [{ id: 1, email: 'jose@silva.com', internalNumber: '123 '}]);

    expect(client.getId()).toBe(1000);
    expect(client.getName()).toBe('Gupy');
    expect(client.listPersons()).toStrictEqual([person]);
  });

  it('throws an error when adding a person with duplicate ID', () => {
    const client = new Client(1000, 'Gupy');

    const person: Person = {
      id: 1,
      internalNumber: 'A123',
      email: 'alice@example.com'
    };

    client.addPerson(person);

    expect(() => {
      client.addPerson(person);
    }).toThrowError(`Person with ID ${person.id} already exists.`);
  });

  it('allows adding different persons with different IDs', () => {
    const client = new Client(1000, 'Gupy');

    client.addPerson({ id: 1, internalNumber: 'A123', email: 'alice@example.com' });
    client.addPerson({ id: 2, internalNumber: 'B456', email: 'bob@example.com' });

    expect(client.listPersons()).toHaveLength(2);
  });
});