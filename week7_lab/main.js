function Elephant(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Elephant"
    this.image = "elephant.jpg"
}

function Snake(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Snake"
    this.image = "snake.jpg"
}

function Starfish(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Starfish"
    this.image = "starfish.jpg"
}

var animals = [new Elephant(), new Snake(), new Starfish()];

var animalNames = ["Harold", "Rob", "Squak", "Sandy", "Foo"];

function generateRandomIndex(maxIndex) {
    return(Math.floor(Math.random() * maxIndex));
}

function generateRandomName() {
    var randomName = animalNames[generateRandomIndex(animalNames.length)];
    return(randomName);
}

function generateRandomAge() {
    var randomAge = generateRandomIndex(30);
    return(randomAge);
}

function generateRandomAnimal() {
    var randomIndex = generateRandomIndex(animals.length)
    var randomAnimal = animals[randomIndex];
    var randomName = generateRandomName();
    var randomAge = generateRandomAge();
    if (randomAnimal instanceof Elephant){
        return new Elephant(randomName, randomAge);
    }
    else if (randomAnimal instanceof Snake){
        return new Snake(randomName, randomAge);
    }
    else if (randomAnimal instanceof Starfish){
        return new Starfish(randomName, randomAge);
    }
}

$(document).ready(function() {
      var animal = generateRandomAnimal();
      
    }
