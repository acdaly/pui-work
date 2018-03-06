function Elephant(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Elephant"
    this.image = "images/elephant.jpg"
}

function Snake(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Snake"
    this.image = "images/snake.jpg"
}

function Starfish(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Starfish"
    this.image = "images/starfish.jpg"
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

function saveZooAnimal(animal) {
    localStorage.setItem("savedAnimal", JSON.stringify(animal));
}

function checkForSavedAnimals() {
    if (localStorage.getItem("savedAnimal") != null) {
        return true
    }
}
var animal;
function handleClick() {
    if (checkForSavedAnimals() === true) {
        localStorage.clear();
        animal = generateRandomAnimal();
        $("#animal-image").attr('src', animal.image);
        $("#animal-name").text(animal.name);
        $("#animal-age").text(animal.age);
        $("#save-button").text("Save");
    }
    else {
        
        saveZooAnimal(animal);
        $("#save-button").text("Clear");
    }
}

$(document).ready(function() {
    if (checkForSavedAnimals() === true) {
        animal = localStorage.getItem("savedAnimal");
        animal = JSON.parse(animal);
        $("#animal-image").attr('src', animal.image);
        $("#animal-name").text(animal.name);
        $("#animal-age").text(animal.age);
        $("#save-button").text("Clear");
    }
   else {
        animal = generateRandomAnimal();
        $("#animal-image").attr('src', animal.image);
        $("#animal-name").text(animal.name);
        $("#animal-age").text(animal.age);
        $("#save-button").text("Save");
    }
});
