<?php

class ClientRepository implements RepositoryInterface
{
  private array $companies = [];

  public function save(array $entity): void
  {
    $this->companies[$entity['id']] = $entity;
  }

  public function findById(string $id)
  {
    return $this->companies[$id] ?? null;
  }

  public function all(): array
  {
    return array_values($this->companies);
  }
}
