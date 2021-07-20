let nowRow = 1;
let nowCol = 1;
let job = 0;

function move(row, col, me){
  let step = 0;
  if (row < 0 || col < 0) {
    step = -1;
  } else {
    step = 1;
  }
  if ( me.classList.contains("used")) {
    alert("You can't use !");
    return;
  } else {
    me.classList.add("used");
  }

  if (row != 0 ) {
    for (let i = 0; i < Math.abs(row); i++) {
      const nextCell = document.querySelector(".cell-" + (nowRow + step)  + "-" + nowCol);
      if (nextCell.classList.contains("wall")) {
        gameOver();
        return;
      }
      if (nextCell.classList.contains("block")){
        nextCell.classList.remove("block");
      } else {
        nextCell.classList.add("route");
        nowRow += step;
        const here = document.querySelector(".here");
        here.style.top = 35 * nowRow + "px";
      }
    }
  } else if (col != 0) {
    for (let i = 0; i < Math.abs(col); i++) {
      const nextCell = document.querySelector(".cell-" + nowRow + "-" + (nowCol + step));
      if (nextCell.classList.contains("wall")) {
        gameOver();
        return;
      }
      if (nextCell.classList.contains("block")){
        nextCell.classList.remove("block");
      } else {
        nextCell.classList.add("route");
        nowCol += step;
        const here = document.querySelector(".here");
        here.style.left = 60 * nowCol + "px";
      }
    }
  }

  job += 1 + Math.abs(row + col);
  document.getElementById("score").innerHTML = job + "<div class='jobs'>jobs</div>";
}

function makeCourse() {
  const course = document.getElementById("course");
  for (let i = 0; i <= count + 1; i++ ) {
    if (i == 0 || i == count + 1){
      rowHtml += "<div class='header'>";
    } else {
      rowHtml += "<div class='row'>";
    }
    for (let j = 0; j <= count + 1; j++) {
      if ((i == 0 && (j == 0 || j == count + 1)) || (i == count + 1 && (j == 0 || j == count + 1))) {
        rowHtml += "<div class='cell cell-" + i + "-" + j + " wall'>-</div>";
      } else if ( i == 0 || i == count + 1) {
        rowHtml += "<div class='cell cell-" + i + "-" + j + " wall'>" + j + "</div>";
      } else {
        if (j == 0 || j == count + 1){
          rowHtml += "<div class='cell cell-" + i + "-" + j + " wall'>" + i + "</div>";
        } else {
          rowHtml += "<div class='cell cell-" + i + "-" + j + "'></div>";
        }
      }
    }
    rowHtml += "</div>";
  }
  rowHtml += "<div class='cell here'></div>";
  course.innerHTML = rowHtml;
  course.style.width = (60 * (count + 2)) + "px";
  course.style.height = (35 * (count + 2)) + "px";
}

function setCourse() {
  for ( let i = 1; i <= count; i++) {
    for (let j = 1; j <= count; j++){
      if (cells[i][j]) {
        document.querySelector(".cell-" + i + "-" + j).classList.add("block");
      }
      document.querySelector(".cell-" + i + "-" + j).classList.remove("route");
    }
  }

  document.querySelector(".cell-1-1").classList.add("start");
  document.querySelector(".cell-1-1").classList.remove("block");
  document.querySelector(".cell-1-1").innerHTML = "start";
  document.querySelector(".cell-" + count + "-" + count).classList.add("goal");
  document.querySelector(".cell-" + count + "-" + count).classList.remove("block");
  document.querySelector(".cell-" + count + "-" + count).innerHTML = "goal";

  const here = document.querySelector(".here");
  here.style.left = "60px";
  here.style.top = "35px"
  nowCol = 1;
  nowRow = 1;
  job = 0;
  document.getElementById("score").innerHTML = job + "<div class='jobs'>jobs</div>";
}

function makeCards() {
  const cards = document.querySelector(".cards");
  let cardsHTML = ""

  cardsHTML += "<div class='cards-left'>"
  for (let i = 1; i <=count; i++) {
    let num = i;
    cardsHTML += "<div class='card left' id='left-" + num + "'>←" + num + "</div>";
  }
 
  cardsHTML += "</div><div class='cards-up'>"
  for (let i = 1; i <=count; i++) {
    let num = i;
    cardsHTML += "<div class='card up' id='up-" + num + "'>↑" + num + "</div>";
  }

  cardsHTML += "</div><div class='cards-down'>"
  for (let i = 1; i <=count; i++) {
    let num = i;
    cardsHTML += "<div class='card down' id='down-" + num + "'>↓" + num + "</div>";
  }

  cardsHTML += "</div><div class='cards-right'>"
  for (let i = 1; i <=count; i++) {
    let num = i;
    cardsHTML += "<div class='card right' id='right-" + num + "'>→" + num + "</div>";
  }
  cardsHTML += "</div>";
  cards.innerHTML = cardsHTML;
  
  for (let i = 1; i <=count; i++) {
    let num = i;
    document.getElementById("left-" + i).addEventListener("click", function() {
        move(0, -num, this);
    });
    document.getElementById("up-" + i).addEventListener("click", function() {
        move(-num, 0, this);
    });
    document.getElementById("down-" + i).addEventListener("click", function() {
        move(num, 0, this);
    });
    document.getElementById("right-" + i).addEventListener("click", function() {
        move(0, num, this);
    });
  }
}

function gameOver() {
  document.getElementById("score").innerHTML = "<div class='jobs'>Game Over</div>";
  for (let i = 1; i <=count; i++) {
    let num = i;
    document.getElementById("left-" + i).classList.add("used");
    document.getElementById("up-" + i).classList.add("used");
    document.getElementById("down-" + i).classList.add("used");
    document.getElementById("right-" + i).classList.add("used");
  }
}

const count = 12;
let cells = [];
let cellsSave = []
let rowHtml = ""

for ( let i = 0; i <= count + 1; i++) {
  let rows = [];
  for (let j = 0; j <= count + 1; j++){
    if (i == 0 || i == count + 1 || j == 0 || j == count + 1) {
      rows.push("wall")
    } else if( i == 1 && j == 1 ){
      rows.push("start")
    } else if( i == count && j == count ){
      rows.push("goal")
    } else {
      rows.push(Math.random()>=0.5);
    }
  }
  cells.push(rows);
}
cellsSave = cells

window.addEventListener("load", function(){  
  makeCourse();
  setCourse();
  makeCards();
  document.getElementById("retry").addEventListener("click", function() {
    setCourse();
    makeCards();
  });
});