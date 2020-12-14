window.addEventListener("load", () => {

  const timerBar = document.getElementById("timer-bar")
  const timerText = document.getElementById("timer-text")
  const timeSelect = document.getElementById("time") 
  const timer = new Timer(timerBar, timerText, timeSelect)
  const typing = new Typing()

  document.addEventListener('keydown',event => {
    if (event.keyCode === 32) {
      if (timer.isStarted() === false){
        timer.start(timerBar, timerText, timeSelect);
      } 
    } else if (timer.isStarted() === true && timer.isFinished() == false) {
      typing.check(event.key)
    }
  });

})

class Timer {
  constructor(bar, text, select){
    this.bar = bar;
    this.text = text;
    this.select = select;
    this.started = false;
    this.finished = false;
  }
  start() {
    if (this.started === false) {
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
      const intervalId = window.setInterval(() => {
        secondsText -= 1;
        this.text.textContent = secondsText + "秒";
        if (secondsText === 0){
          this.text.textContent = "タイピング終了！お疲れさまでした！";
          clearInterval(intervalId);
          this.finished = true;
        }
      }, 1000)
    }
  };

  isFinished(){
    return this.finished;
  }
  isStarted(){
    return this.started;
  }
}

class Typing {
  constructor(){
    this.keys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,"
    this.str = "nanndakawakaranaikedo,zennbuumakuitteiteuresii!"
    this.text = ""
    this.n = [3, 25]
    this.len = this.str.length;
    this.count = 0;
  }
  check(key){
    console.log(`STRING : ${this.str[this.count]}  RESULT : ${key}`);
    if (this.str[this.count] === key) {
      this.count += 1;
    }
  }
}

