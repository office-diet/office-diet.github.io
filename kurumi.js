window.addEventListener("load", () => {

  const timerBar = document.getElementById("timer-bar");
  const timerText = document.getElementById("timer-text");
  const timeSelect = document.getElementById("time");
  const countDown =  document.getElementById("count-down");
  const countDownBack =  document.getElementById("count-down-back");
  const countDownNumber = document.getElementById("count-down-number");
  const scoreBoard = document.getElementById("score-board");
  const scoreBoardBack = document.getElementById("score-board-back");
  const timer = new Timer(timerBar, timerText, timeSelect, countDown, countDownBack, countDownNumber, scoreBoard, scoreBoardBack);

  const alphabet = document.getElementById("alphabet");
  const correct = document.getElementById("correct");
  const failure = document.getElementById("failure");
  const complete = document.getElementById("complete");
  const percentage = document.getElementById("percentage");
  const correctScore = document.getElementById("correct-score");
  const failureScore = document.getElementById("failure-score");
  const completeScore = document.getElementById("complete-score");
  const percentageScore = document.getElementById("percentage-score");

  const typing = new Typing(alphabet, 
                            correct, failure, complete, percentage, 
                            correctScore, failureScore, completeScore, percentageScore);

  document.addEventListener('keydown',event => {
    if (event.keyCode === 32) {
      event.preventDefault();
      if (timer.isStarted() === false){
        timer.start();
      } 
    } else if (timer.isStarted() === true && timer.isWait() === false && timer.isFinished() == false) {
      typing.check(event.key)
    }
  });

})

class Timer {
  constructor(bar, text, select, countDown, countDownBack, countDownNumber, scoreBoard, scoreBoardBack){
    this.bar = bar;
    this.text = text;
    this.select = select;
    this.countDown = countDown;
    this.countDownBack = countDownBack;
    this.countDownNumber = countDownNumber;
    this.scoreBoard = scoreBoard;
    this.scoreBoardBack = scoreBoardBack;
    this.wait = false;
    this.started = false;
    this.finished = false;
    this.finishSound = new Audio("finish.mp3")
  }
  start() {
    this.select.disabled = true;
    if (this.wait === false) {
      document.addEventListener('mousewheel', noScroll, { passive: false });
      this.wait = true;
      this.countDown.classList.toggle("hidden");
      this.countDownBack.classList.toggle("hidden");
      let count = 3;
      let intervalId = window.setInterval(() => {
        count -= 1;
        if (count !== 0) {
          this.countDownNumber.textContent = count;
        } else {
          this.countDown.classList.toggle("hidden");
          this.countDownBack.classList.toggle("hidden");
          clearInterval(intervalId);
          this.wait = false;
          document.removeEventListener('mousewheel', noScroll, { passive: false });
        }
      }, 1000);

      window.setTimeout(() => {
        const seconds = this.select.value;
        let secondsText = seconds;
        this.started = true;
        this.bar.animate(
          {width: [0, "100%"]},
          seconds * 1000
        )
        window.setTimeout(() => {
          this.bar.style.width = "100%"
        }, seconds * 1000 - 1);
        this.text.textContent = secondsText + "秒";
        intervalId = window.setInterval(() => {
          secondsText -= 1;
          this.text.textContent = secondsText + "秒";
          if (secondsText === 0){
            this.text.textContent = "タイピング終了！お疲れさまでした！";
            clearInterval(intervalId);
            this.finished = true;
            this.finishSound.currentTime = 0;
            this.finishSound.play();
            this.scoreBoard.animate(
              {top: ["-500px", "150px"]},
              1000
            );
            this.scoreBoard.classList.toggle("hidden");
            this.scoreBoardBack.classList.toggle("hidden");
          }
        }, 1000)  
      }, 3000);
    }
  };

  isStarted(){
    return this.started;
  }
  isWait() {
    return this.wait;
  }
  isFinished(){
    return this.finished;
  }
}

class Typing {
  constructor(alphabet, 
              correct, failure, complete, percentage,
              correctScore, failureScore, completeScore, percentageScore){
    this.goodSound = new Audio("good.mp3")
    this.badSound = new Audio("bad.mp3")
    this.completeSound = new Audio("complete.mp3")
    this.keys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-^\\!\"#$%&'()=~|@[;:],./`{+*}<>?_";
    this.strOriginal = "nanndakawakaranaikedo,zennbuumakuitteiteuresii!";
    this.str = "nanndakawakaranaikedo,zennbuumakuitteiteuresii!";
    this.variation = ["nanndakawakaranaikedo,zennbuumakuitteiteuresii!",
                      "nanndakawakaranaikedo,zennbuumakuitteiteureshii!",
                      "nanndakawakaranaikedo,zenbuumakuitteiteuresii!",
                    ]
    this.htmlStr = "";
    this.text = "";
    this.len = this.str.length;

    this.count = 0;
    this.correctCount = 0;
    this.failureCount = 0;
    this.completeCount = 0;

    // オブジェクト
    this.alphabet = alphabet;
    this.correct = correct;
    this.failure = failure;
    this.complete = complete;
    this.percentage = percentage;
    this.correctScore = correctScore;
    this.failureScore = failureScore;
    this.completeScore = completeScore;
    this.percentageScore = percentageScore;
    
    this.refreshHtml(this.count);
  }
  
  check(key){
    let front = "";
    let back = "";
    if (this.keys.indexOf(key) != -1) {
      if (this.str[this.count] === key) {
        this.count += 1;
        this.refreshHtml(this.count);
        this.good();
      } else if (this.str[this.count] === "n" && this.str[this.count + 1] === "n" && key === "x" ) {
        front = this.str.slice(0, this.count)
        back = this.str.slice(this.count + 1, this.len)
        this.str = front + "x" + back;
        this.count += 1;
        this.refreshHtml(this.count);
        this.good();
      } else if (this.str[this.count] === "n" && this.str[this.count - 1] === "n" && this.str[this.count + 1] === key) {
        front = this.str.slice(0, this.count)
        back = this.str.slice(this.count + 1, this.len)
        this.str = front + back;
        this.count += 1;
        this.len -= 1;
        this.refreshHtml(this.count);
        this.good();
      } else if (this.str[this.count] === "t" && this.str[this.count + 1] === "t" && key === "l") {
        front = this.str.slice(0, this.count)
        back = this.str.slice(this.count + 1, this.len)
        this.str = front + "ltu" + back;
        this.count += 1;
        this.len += 2;
        this.refreshHtml(this.count);
        this.good();
      } else if (this.str[this.count - 1] === "t" && this.str[this.count] === "u" && key === "s") {
        front = this.str.slice(0, this.count)
        back = this.str.slice(this.count, this.len)
        this.str = front + "s" + back;
        this.count += 1;
        this.len += 1;
        this.refreshHtml(this.count);
        this.good();      
      } else if (this.str[this.count - 1] === "s" && this.str[this.count] === "i" && key === "h") {
        front = this.str.slice(0, this.count)
        back = this.str.slice(this.count, this.len)
        this.str = front + "h" + back;
        this.count += 1;
        this.len += 1;
        this.refreshHtml(this.count);
        this.good();
      } else {
        this.badSound.currentTime = 0;
        this.badSound.play();
        this.bad()
      }
      if (this.count === this.len) {
        this.comp();
        this.count = 0;
        this.refreshHtml(this.count);
        this.alphabet.innerHTML = this.htmlStr;
        this.completeSound.currentTime = 0;
        this.completeSound.play();
      }
    }
  }

  good() {
    this.goodSound.currentTime = 0;
    this.goodSound.play();
    this.correctCount += 1;
    this.correct.textContent = this.correctCount;
    this.correctScore.textContent = this.correctCount;
    this.percent();
  }
  bad() {
    this.failureCount += 1;
    this.failure.textContent = this.failureCount;
    this.failureScore.textContent = this.failureCount;
    this.percent();
  }
  comp() {
    this.completeCount += 1;
    this.complete.textContent = this.completeCount;
    this.completeScore.textContent = this.completeCount;
    this.percent();
  }
  percent() {
    let per = Math.round((this.correctCount / (this.correctCount + this.failureCount)) * 1000) / 10;
    this.percentage.textContent = per;
    this.percentageScore.textContent = per;
  }

  refreshHtml(num){
    this.alphabet.innerHTML = "";
    this.htmlStr = "";
    if (num === 0) {
      this.str = this.strOriginal;
      this.len = this.str.length;
    }
    for(let i = 0; i < this.len; i++){
      if ( i < num){
        this.htmlStr += `<span class="red">${this.str.charAt(i)}</span>`;
      } else {
        this.htmlStr += `<span class="black">${this.str.charAt(i)}</span>`;
      }
      this.alphabet.innerHTML = this.htmlStr;      
    }
  }
}

function noScroll(event) {
  event.preventDefault();
}