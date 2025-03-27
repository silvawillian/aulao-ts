<?php

class Client
{
  private string $id;
  private string $name;
  private array $persons;

  public function __construct(
    string $id,
    string $name,
    array $persons = [])
  {
    $this->id = $id;
    $this->name = $name;
    $this->persons = $persons;
  }

  public function getId(): string
  {
    return $this->id;
  }

  public function getName(): string
  {
    return $this->name;
  }

  public function addPerson(array $person): void
  {
    foreach ($this->persons as $existingPerson) {
      if (isset($existingPerson['id']) && $existingPerson['id'] === $person['id']) {
        throw new Exception("Person with ID {$person['id']} already exists.");
      }
    }

    $newPerson = [
      "id" => $person['id'],
      "internalNumber" => $person['internalNumber'],
      "email" => $person['email'],
    ];

    $this->persons[] = $newPerson;
  }

  public function listPersons(): array
  {
    return $this->persons;
  }
}
