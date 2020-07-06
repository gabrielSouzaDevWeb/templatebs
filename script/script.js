function index() {
    var menu_bar = document.querySelector(".btn-menu-svg");
    var menu = document.querySelector(".menu");
    
    if (widthDisplay() <= 600) {
        menu_bar.style.display = "block";
        console.log("<");
    } else{
        menu_bar.style.display = "none";
        console.log(">");
    }

    menu_bar.addEventListener("click",function(){
       toggleDisplay(menu); 
    });

    window.addEventListener("resize",function(){
        toCompareWidth(menu_bar);
    });

    function toggleDisplay(tagToggle){//documentar function e trocar nome
        
        var toggleDisplay = window.getComputedStyle(tagToggle, null).getPropertyValue("display");
        if(toggleDisplay == "block"){
            tagToggle.style.display = "none";
        } else if(toggleDisplay == "none"){
            tagToggle.style.display = "block";
        }
    }

    function toCompareWidth(item){
        if (widthDisplay() <= 600) {
            item.style.display = "block";
            console.log("<");
        } else{
            item.style.display = "none";
            console.log(">");
        }
    }

    function widthDisplay() {
        
        if (window.innerWidth){
            return  window.innerWidth;
        } else if(document.documentElement && document.documentElement.clientWidth){
            return document.documentElement.clientWidth;
        } else if(document.body){
            return document.body;
        }
    }

}





window.onload = index;