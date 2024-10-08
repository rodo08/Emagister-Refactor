class Pet {
  #name;
  #type;

  constructor(name, type) {
    this.#name = name;
    this.#type = type;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  getInfo() {
    return `${this.#name} es un ${this.#type}`;
  }

  comparePets(otherPet) {
    return this.#name === otherPet.name;
  }
}

class Dog extends Pet {
  #breed;

  constructor(name, breed) {
    super(name, "perro");
    this.#breed = breed;
  }

  get breed() {
    return this.#breed;
  }

  getBreed() {
    return `${this.name} es un perro de raza ${this.#breed}`;
  }
}

// Ejemplos de uso
const pet = new Pet("Luna", "gato");
console.log(pet.getInfo()); // "Luna es un gato"

const dog = new Dog("Max", "Labrador");
console.log(dog.getInfo()); // "Max es un perro"
console.log(dog.getBreed()); // "Max es un perro de raza Labrador"

// Comparación de mascotas
const anotherDog = new Dog("Max", "Beagle");
console.log(dog.comparePets(anotherDog)); // true
console.log(dog.comparePets(pet)); // false
