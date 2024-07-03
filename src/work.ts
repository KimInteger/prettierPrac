interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(`${this.name}은 멍!`);
  }
}

const dog: Animal = new Dog('개');

dog.sound();
