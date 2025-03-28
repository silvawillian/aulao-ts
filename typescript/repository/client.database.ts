import { Client } from "../domain/client.domain";
import { RepositoryInterface } from "../interfaces/repository.interface";

export class ClientDatabase implements RepositoryInterface<Client> {
  private clients: Map<number, Client> = new Map();

  save(client: Client): void {
    const id = client.getId();
    this.clients.set(id, client);
  }

  findById(id: number): Client | null {
    return this.clients.get(id) || null;
  }

  all(): Client[] {
    return Array.from(this.clients.values());
  }
}