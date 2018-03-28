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
    if (JSON.parse(localStorage.getItem('savedPillows')) == null) {
        pillows = [];
    }
    else {
        pillows = JSON.parse(localStorage.getItem('savedPillows'));
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

function addItemToCart(){
    pillows = JSON.parse(localStorage.getItem('savedPillows'));
    for (i = 0; i < pillows.length; i++){
        $('#new-item').append('\
            <div class="cart-underline"></div>\
                <img src="../images/black-1.jpg">\
                <div class="text-grid">\
                    <div class="product">\
                        <div class="product-title">Product</div>\
                        <div class="product-name">Pillow</div>\
                        <div class="product-shape">Shape:</div>\
                        <div class="product-color">Color:</div>\
                    </div>\
                    <div class="quantity">\
                        <div class="quantity-title">Quantity</div>\
                        <div class="item-quantity">0</div>\
                    </div>\
                    <div class="price">\
                        <div class="price-title">Price</div>\
                        <div class="item-price">$0.00</div>\
                    </div>\
                    <div class="delete">Delete</div>\
                </div>');
        var newID = 'new-item' + i;
        $('#new-item').attr('id', newID);
        $('#' + newID).append('<div id="new-item"></div>');
        console.log(newID);
    }

}