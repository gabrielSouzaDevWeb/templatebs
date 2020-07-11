function index() {

    var menu_bar = document.querySelector(".btn-menu-svg");
    var menu_mobile= document.querySelector(".menu-mobile");
    var nav_bar= document.querySelector(".nav-bar");
    var header_bg= document.querySelector(".header");

    menu_bar.addEventListener("click",function(){
       toggleDisplay(menu_mobile, "flex"); 
    });

    window.addEventListener("resize",function(){
        toCompareWidth(menu_bar);
    });

    window.addEventListener("onload",function(){ nav_bar.style.backgroundColor = document.defaultView.getComputedStyle(header_bg, null).backgroundColor});

    window.addEventListener("scroll", function() {
        var getStyle = document.defaultView.getComputedStyle(header_bg, null).backgroundColor;
        if(window.scrollY >= 340 && widthDisplay() >= 600){
            nav_bar.style.backgroundColor = "#151515";
            
            
        }else{
            nav_bar.style.backgroundColor = getStyle;
        }
    });

    function toggleDisplay(tagToggle,displayValue){//documentar function e trocar nome
        
        var toggleDisplay = window.getComputedStyle(tagToggle, null).getPropertyValue("display");
        if(toggleDisplay == displayValue){
            tagToggle.style.display = "none";
        } else if(toggleDisplay == "none"){
            tagToggle.style.display = displayValue;
        }
    }

    function toCompareWidth(item){
        if (widthDisplay() <= 600) {
            item.style.display = "block";
        } else{
            item.style.display = "none";
            menu_mobile.style.display="none";
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

    /*function getStyle(tagName,style) {
        var getStyle= document.defaultView.getComputedStyle(tagName, null).style;
        var unitTest = console.log("getStyle");
        return getStyle, unitTest;
        
    }*/

}





window.onload = index;