import { Client, Person } from "../domain/client.domain";
import { ClientDatabase } from "./client.database";

describe("ClientDatabase", () => {
  let repo: ClientDatabase;

  beforeEach(() => {
    repo = new ClientDatabase();
  });

  it("should save and retrieve a client by ID", () => {
    const person1: Person = {
      id: 1,
      internalNumber: "ABC",
      email: "abc@xyz.com",
    };

    const person2: Person = {
      id: 2,
      internalNumber: "DEF",
      email: "def@xyz.com",
    };

    const client = new Client(1, "Nath Corp", [person1, person2]);
    repo.save(client);

    const result = repo.findById(1);

    expect(result).not.toBeNull();
    expect(result).toBeInstanceOf(Client);
    expect(result?.getId()).toBe(1);
    expect(result?.getName()).toBe("Nath Corp");
    expect(result?.listPersons()).toHaveLength(2);
    expect(result?.listPersons()[0].internalNumber).toBe("ABC");
    expect(result?.listPersons()[1].internalNumber).toBe("DEF");
  });

  it("should return null when client is not found", () => {
    const result = repo.findById(999);
    expect(result).toBeNull();
  });

  it("should list all saved clients", () => {
    const c1 = new Client(1, "Nath Corp");
    const c2 = new Client(2, "Will Inc");

    repo.save(c1);
    repo.save(c2);

    const all = repo.all();

    expect(all).toHaveLength(2);
    expect(all.map((c) => c.getId())).toContain(1);
    expect(all.map((c) => c.getId())).toContain(2);
  });

  it("should override client if saved twice with same ID", () => {
    const c1 = new Client(1, "Old Name");
    const c2 = new Client(1, "Updated Name");

    repo.save(c1);
    repo.save(c2); // sobrescreve

    const result = repo.findById(1);

    expect(result?.getName()).toBe("Updated Name");
  });
});
