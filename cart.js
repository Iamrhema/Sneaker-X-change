$(document).ready(function(){


$("#shippingForm").css({"display":"none"})
// show shipping details
$("#ShowForm").click(function(){
    $("#shippingForm").css({"display":"block"})
});

// Submit for shipping and total
$("#submit").click(function(){

// Get values
let name = $("#Username").val();
let coupon = $("#Coupon").val();
let shipping = $("#Shipping").val();

itemsTotal = parseInt(localStorage.getItem("itemsTotal"));


var percent;
var shippingCost = 0 ;

// shipping details
if( shipping == "Freight"){
    shippingCost = 100;
}

// coupon prices
if( coupon == 12345 ){
    itemsTotal = itemsTotal-(itemsTotal*0.25);
    percent = "25%";
}

else if( coupon == 98021){
    itemsTotal = itemsTotal-(itemsTotal*0.4);
    percent = "40%"; 
}
else if( coupon == 98761){
    itemsTotal = itemsTotal-(itemsTotal*0.5);
    percent = "50%";

}

else if( coupon == 32084 ){
    itemsTotal = itemsTotal-(itemsTotal*0.05);
    percent = "5%";
}

else{
    percent = "Invalid/ no Coupon";
}

// show shipping and total
alert(`${name}, your total  is $ ${itemsTotal + shippingCost} ( including Vat , ${percent} discount and shipping $ ${shippingCost.toFixed(2)}`); 

});


});