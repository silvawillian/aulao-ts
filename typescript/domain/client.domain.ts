export type Person = {
  id: number;
  internalNumber: string | number;
  email: `${string}@${string}.com`;
};

export class Client {
  constructor(
    private id: number,
    private name: string,
    private persons: Person[] = []
  ) {}

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public addPerson(person: Person): void {
    if (this.persons.includes(person)) {
      throw new Error(`Person with ID ${person.id} already exists.`);
    }
    this.persons.push(person);
  }

  public listPersons(): Person[] {
    return this.persons;
  }
}
