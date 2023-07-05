let btn = document.getElementById("btn")
btn.addEventListener("click",function(){
    alert("aweonaoo")
})


btn.addEventListener("click", function(){
    var randomColor= getRandomColor()
    document.body.style.backgroundColor = randomColor;
    console.log(randomColor)
})

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';

    for(var i= 0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}