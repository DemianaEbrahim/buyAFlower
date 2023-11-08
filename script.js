// var Allproducts =document.querySelectorAll("#allproducts li");
// var name1=document.querySelector("#content")
// var x=0;
// Allproducts.forEach=(function(item){
//     item.onclick=function(){
//         name1.innerHTML=item.textContent;
//         name1.innerHTML=x++
//     }
// })


var allProducts = document.querySelectorAll(".products li")
var div1 = document.querySelector("#div1")
var btn1 = document.querySelector("#showPrice")
var totalPrice = 0

allProducts.forEach(function (item) {
    item.onclick = function (){
        totalPrice +=  +(item.getAttribute("price"))
        div1.innerHTML += item.textContent + " "

        if (div1.innerHTML != ""){
            btn1.style.display = "block"
            btn1.style.width = "200px"
            btn1.style.height = "45px"
            btn1.style.backgroundColor = "black"
            btn1.style.color = "white"
            btn1.style.fontSize = "25px"
        }

    }
})
var totalPricedv=document.querySelector(".totalPrice")
btn1.onclick = function (){
    totalPricedv.innerHTML="the total price is : "+totalPrice
}




