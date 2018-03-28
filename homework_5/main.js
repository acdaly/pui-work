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

function navLoad(){
    pillows = JSON.parse(localStorage.getItem('savedPillows'));
    $('.itemCount').text('('+pillows.length+')');
}

function handleShapeClick(clickedID) {
    $('#'+selectedShape).css('background-color', 'white');
    $('#'+clickedID).css('background-color', 'lightgray');
    selectedShape = clickedID;
    var shapePrice = 0;
    if (selectedShape == "square") {
        shapePrice = 85;
    }
    else if (selectedShape == "round") {
        shapePrice = 85;
    }
    else if (selectedShape == "dog") {
        shapePrice = 135;
    }
    else if (selectedShape == "cat") {
        shapePrice = 135;
    }
    else if (selectedShape == "bunny") {
        shapePrice = 165;
    }
    $('#price').text('$' + shapePrice + '.00');
    


}

function handleColorClick(clickedID) {
    $('#'+selectedColor).removeClass('outlineClass');
    $('#'+clickedID).addClass('outlineClass');
    selectedColor = clickedID;
    selectedColor = clickedID;
    if (selectedColor == "black") {
        $('#bed-detail-img').attr('src', "../images/red3.jpg");
    }
    else if (selectedColor == "white") {
        $('#bed-detail-img').attr('src', "../images/red3.jpg");
    }
    else if (selectedColor == "red") {
        $('#bed-detail-img').attr('src', "../images/red3.jpg");
    }
    else if (selectedColor == "purple") {
        $('#bed-detail-img').attr('src', "../images/red3.jpg");
    }
    else if (selectedColor == "blue") {
        $('#bed-detail-img').attr('src', "../images/red3.jpg");
    }
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

function appendItemHTML() {
    $('#new-item').append('\
            <div class="cart-underline"></div>\
                <img src="../images/black-1.jpg">\
                <div class="text-grid">\
                    <div class="product">\
                        <div class="product-title">Product</div>\
                        <div class="product-name"></div>\
                        <div class="product-shape">Shape:</div>\
                        <div class="product-color">Color:</div>\
                    </div>\
                    <div class="quantity">\
                        <div class="quantity-title">Quantity</div>\
                        <div class="item-quantity"></div>\
                    </div>\
                    <div class="price">\
                        <div class="price-title">Price</div>\
                        <div class="item-price">$</div>\
                    </div>\
                    <div id="delete-item" class="delete">Delete</div>\
                </div>');
}

function correctItemIDs(i){
    var newID = 'new-item' + i;
    var newDeleteID = '#delete-item' + i;
    $('#new-item').attr('id', newID);
    $('#delete-item').attr('id', 'delete-item' + i);
}

function addClickFunction(i) {
    var newDeleteID = '#delete-item' + i;
    $(newDeleteID).on('click', function() {
        var id = this.id;
        id = id.slice(-1);
        console.log(id);
        pillows.splice(id, 1);
        localStorage.setItem('savedPillows', JSON.stringify(pillows));
        $('#new-item' + id).remove();
    });
}

function addItemData(i){
    var newID = 'new-item' + i;
        $('#items-container').append('<div id="new-item" class="cart-item"></div>');
        $("#" + newID + " .product-name").append(' ' + pillows[i].name);
        $("#" + newID + " .product-shape").append(' ' + pillows[i].shape);
        $("#" + newID + " .product-color").append(' ' + pillows[i].color);
        $("#" + newID + " .item-quantity").append(' ' + pillows[i].quantity);
        $("#" + newID + " .item-price").append(' ' + (pillows[i].price*pillows[i].quantity) + '.00');
        if (pillows[i].color == "red") {
            $('#' + newID + ' img').attr('src', "../images/red3.jpg");
        }
}

function addItemToCart(){
    pillows = JSON.parse(localStorage.getItem('savedPillows'));
    var subtotal = 0;
    for (i = 0; i < pillows.length; i++){
        appendItemHTML();
        correctItemIDs(i);
        addClickFunction(i);
        addItemData(i);
        subtotal += (pillows[i].price*pillows[i].quantity);
    }
    $('#subtotal-price').append(subtotal + '.00');

}