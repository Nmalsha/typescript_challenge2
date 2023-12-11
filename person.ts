class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //method

  tellMyName(): void {
    console.log(`I am ${this.name}`);
  }

  tellMyAge(): void {
    console.log(`I am ${this.age} years old`);
  }
}

export default Person;
