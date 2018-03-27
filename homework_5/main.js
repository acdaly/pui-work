function Pillow(name, shape, color, quantity, price) {
    this.name = name;
    this.shape = shape;
    this.color = color;
    this.quantity = quantity;
    this.price = price;
}


var selectedPillow;
var selectedShape = "square";
var selectedColor = "black";
var selectedQuantity = 1;
var pillows = [];

function handleShapeClick(clickedID) {
    $('#'+selectedShape).css('background-color', 'white');
    $('#'+clickedID).css('background-color', 'lightgray');
    selectedShape = clickedID;


}

function handleColorClick(clickedID) {
    $('#'+selectedColor).removeClass('outlineClass');
    $('#'+clickedID).addClass('outlineClass');
    selectedColor = clickedID;
    selectedColor = clickedID;
}

function handleQuantityClick(clickedID) {
    selectedQuantity = parseInt($('#input-quantity').val());
}

function savePillow(newPillow) {
    if (localStorage.getItem('savedPillows') == null) {
        pillows = [];
    }
    else {
        pillows = localStorage.getItem('savedPillows');
    }
    pillows.push(newPillow);
    localStorage.setItem('savedPillows', JSON.stringify(pillows));
}

function handleAddToCart(){

    var selectedPillow = "Bed Pillow";

    if (selectedShape == "square") {
        price = 85;
    }
    else if (selectedShape == "round") {
        price = 85;
    }
    else if (selectedShape == "dog") {
        price = 135;
    }
    else if (selectedShape == "cat") {
        price = 135;
    }
    else if (selectedShape == "bunny") {
        price = 165;
    }
    var newPillow = new Pillow(selectedPillow, selectedShape, selectedColor, 
                               selectedQuantity, price);
    savePillow(newPillow);
    
}