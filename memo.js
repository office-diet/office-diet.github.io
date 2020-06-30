'usestrict';

class Memo{
  constructor(timer, input, memo, theme){
    this.timer = new Timer(timer,input);
    this.input = input;
    this.memo = memo;
    this.memo.classList.remove('hide');
    this.ul = memo.querySelector('ul');
    this.theme = theme;
    this.items = [];
  }

  addList(){
    if (this.timer.isStarted() === false){
      this.timer.start();
    }
    const li = document.createElement('li');
    li.textContent = this.input.value;
    this.items.push(this.input.value);
    this.ul.appendChild(li);
    this.input.value = '';
  }
  isFinished(){
    return this.timer.isFinished();
  }

  isStarted(){
    return this.timer.isStarted();
  }

  randomTheme(){
    return this.items[Math.floor(Math.random() * this.items.length)];  
  }
  close(){
    this.memo.querySelector('p').textContent = this.theme;
  }
  changeTheme(theme) {
    this.theme = theme;
  }
}

class Timer{
  constructor(timer,input){
    this.timer = timer;
    this.input = input;
    this.timeoutId = undefined;
    this.seconds = seconds;
    this.finshed = false;
    this.started = false;
  }
  start(){
    this.started = true
    this.timer.textContent = this.seconds.toFixed(1);
    this.seconds -= 0.1;
    this.timeoutId = setTimeout(() => {
      if (this.seconds < 0){
        clearTimeout(this.timeoutId);
        this.timer.textContent = '0.0';
        this.input.disabled = 'disabled';
        this.input.value = 'Time Over';
        this.finshed = true;
      } else {
        this.start();
      }
    }, 100)
  }
  isFinished() {
    return this.finshed;
  }
  isStarted() {
    return this.started;
  }
}

const memoArea = document.getElementById('memoArea');
const theme = document.getElementById('theme');
const timer = document.getElementById('timer');
const select = document.querySelector('select');
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const modal = document.getElementById('modal');
const modalBack = document.getElementById('modal-back');
const close = document.getElementById('close');
const themeInput = document.getElementById('theme-input');
const themeBtn = document.getElementById('theme-change');

const memos = [];
let count = 0;
const seconds = 60.0;
let memoCount = 0;

let memo = new Memo(timer, input, document.getElementById('memo-00'),theme.textContent);
theme.addEventListener('click', showModal);
modalBack.addEventListener('click', closeModal);
close.addEventListener('click', closeModal);
themeBtn.addEventListener('click',changeTheme)

function fncEnter(){
  if( window.event.keyCode == 13 ){
    if (input.value) {
      if (memoCount === 0) {
        memoCount = parseInt(select.value);
        select.disabled = 'disabled';
        makeMemos(memoCount);
      }
      memo.addList();
    }
   }
}

function fncNext(){
  if (memo.isFinished()){
    count++
    if (count === memoCount + 1) {
      memoArea.querySelectorAll('.memo').forEach(item => {
        item.classList.remove('hide');
      })
      memo.close();
      return;
    } else if (count > memoCount + 1) {
      alert('1分メモトレーニングを再開したい場合は、ページを更新してください。');
      return;
    }
    input.value ='';
    input.disabled = '';
    timer.textContent = (seconds).toFixed(1);
    theme.textContent = memo.randomTheme();
    memo.close();
    memos.push(memo);
    memo = new Memo(timer, input, document.getElementById(`memo-0${count}`),theme.textContent);
    document.getElementById(`memo-0${count - 1}`).classList.add('hide');
  }
  input.focus();
}

function makeMemos(count){
  let div;
  let p;
  let ul
  for (let i=1;i<=count;i++){
    div = document.createElement('div');
    div.classList.add('memo');
    div.id = `memo-0${i}`;
    p = document.createElement('p');
    p.textContent = `メモ-0${i}`;
    ul = document.createElement('ul');
    div.classList.add('hide');
    div.appendChild(p);
    div.appendChild(ul);
    memoArea.appendChild(div)
  }
}

function showModal(){
  if ( !memo.isStarted() && !memo.isFinished() ) {
    modal.classList.remove('close');
    modalBack.classList.remove('close');
  }
}

function closeModal(){
  modal.classList.add('close');
  modalBack.classList.add('close');
  input.focus();
}

function changeTheme(){
  if (themeInput.value) {
    theme.textContent = themeInput.value;
    memo.changeTheme(themeInput.value);
    closeModal();
  }
}
