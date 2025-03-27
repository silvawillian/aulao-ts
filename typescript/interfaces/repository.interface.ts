export interface RepositoryInterface<T> {
  save(entity: T): void;
  findById(id: number): T | null;
  all(): T[];
}
