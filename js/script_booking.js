let row = 6;
let col = 8;
let seatList = [];
let count = document.getElementById("count");
let costs = document.getElementById("costs");
let screen = document.getElementsByClassName("screen")[0];
let movie = document.getElementById("movie");

let booking = function(event, i, j) {
    let seatNumber = (i * 8 + j + 1);
    let seatClass = event.target.classList;

    if (seatClass.contains("seat")) {
        seatClass.replace("seat", "occupiedSeat");
        seatList.push(seatNumber);
    } else {
        seatClass.replace("occupiedSeat", "seat");
        let index = seatList.indexOf(seatNumber);
        if (index !== -1) seatList.splice(index, 1);
    }

    count.innerHTML = seatList.length;
        let moviePriceString = movie.value.replace(/[^0-9]/g, "");
        let totalPrice = parseInt(moviePriceString) * seatList.length;
         costs.innerHTML = totalPrice;    
};

for (let i = 0; i < row; i++) {
    let div = document.createElement('div');
    div.classList.add("row");
    for (let j = 0; j < col; j++) {
        let span = document.createElement('span');
        span.classList.add("seat");
        div.appendChild(span);
        span.addEventListener('click', (event) => booking(event, i, j));
    }
    screen.parentNode.insertBefore(div, screen.nextSibling);
}

movie.addEventListener("change", function(){
    count.innerHTML = seatList.length;
    let seatCount = seatList.length;
    let moviePriceString = movie.value.replace(/[^0-9]/g, ""); // ""빈 문자열!! 찾아낸 숫자 이외의 모든 문자를 제거해줌
    let totalPrice = parseInt(moviePriceString) * seatCount;
    costs.innerHTML = totalPrice;
});


//정규 표현식!! replace(/[^0-9]/g,"") 문자열에서, 숫자말고 문자만 찾아서 다 제거해줌
// /[^0-9]/g는 0부터 9까지의 숫자가 아닌! 문자를 찾아낸다. 
// parseInt 정수로 변환.. 까먹지않기