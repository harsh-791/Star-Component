var allStar = document.querySelectorAll(".star");
var h3Element = document.querySelector("h3");
let prevClicked;
 console.log(allStar);

for(let i=0;i<allStar.length;i++){
    allStar[i].addEventListener('click', function(e){
        var starClicked = e.target.classList[1];
        console.log(starClicked)
        for(var j=0;j<allStar.length;j++){
            allStar[j].classList.remove("yellow");
        }
        for(var j=0;j<starClicked;j++){
            allStar[j].classList.add("yellow");
        }
        prevClicked = starClicked;
        h3Element.innerText = `Rating : ${starClicked}`;
    })

    allStar[i].addEventListener('mouseover',function(e){
        var starClicked = e.target.classList[1];
        for(var j=0;j<prevClicked;j++){
            allStar[j].classList.remove("yellow");
        }
        for(var j=0;j<starClicked;j++){
            allStar[j].classList.add("yellow");
        }
    })

    allStar[i].addEventListener('mouseleave',function(e){
        
        for(var j=0;j<allStar.length;j++){
            allStar[j].classList.remove("yellow");
        }

        for(var j=0;j<prevClicked;j++){
            allStar[j].classList.add("yellow");
        }
    })
}


