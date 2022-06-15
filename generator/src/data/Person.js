class Person {
    constructor(name) {
        this.name = name;
        this.id = Date.now() + ( (Math.random()*100000).toFixed());
    }
}

export default Person;