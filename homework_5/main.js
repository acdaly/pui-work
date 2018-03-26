function Pillow(name, shape, color, quantity, price) {
    this.name = name;
    this.shape = shape;
    this.color = color;
    this.quantity = quantity;
    this.price = price;
}

var pillows = [];
var selectedShape = "square";
var selectedColor = "black";

function savePillow() {

}

function handleShapeClick(clickedID) {
    console.log(clickedID);
    $('#'+selectedShape).css('background-color', 'white');
    $('#'+clickedID).css('background-color', 'lightgray');
    selectedShape = clickedID;


}

function handleColorClick(clickedID) {
    
    $('#'+selectedColor).removeClass('outlineClass');
    $('#'+clickedID).addClass('outlineClass');
    
    console.log("clicked!");
/*
    $('#'+selectedColor).css('outline', 1);
    $('#'+selectedColor).css('outline-color', 'lightgray');
    $('#'+selectedColor).css('outline-offset', 1);
    $('#'+clickedID).css('outline-color', 'black');
    $('#'+clickedID).css('outline', '3px');
    $('#'+clickedID).css('outline-offset', '3px');*/
    selectedColor = clickedID;
}