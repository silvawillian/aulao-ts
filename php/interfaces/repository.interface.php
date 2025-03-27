<?php

interface RepositoryInterface
{
  public function save($entity): void;
  public function findById(string $id);
  public function all(): array;
}