class Key {
    private signature: number = Math.random()

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {
        this.key = key;
    }
    getKey(): Key {
        return this.key;
    }
}
abstract class House {
    private tenants: Person[] = [];
    public door: boolean = false;
    constructor(protected key: Key) {
        this.key = key;
    }

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }
    public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };