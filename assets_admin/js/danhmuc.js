
const itemslidebar = document.querySelectorAll(".danhmuc-left-li")
itemslidebar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})
// ---------------------img----------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smalImg = document.querySelectorAll(".product-content-left-small-img img")
smalImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})