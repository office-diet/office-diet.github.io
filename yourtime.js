class MyClock{
  constructor(year,plus){
    this.year = year;
    this.plusDay = plus;
    const day1 = new Date( `${this.year}/1/1` );
    const day2 = new Date( `${this.year}/12/31`); 
    const dayMiliSecond = 24 * 60 * 60 * 1000;
    this.dayCount = (day2 - day1) / dayMiliSecond + 1;
    this.myDayCount = this.dayCount + this.plusDay;
    const myDayHour = 24 * this.dayCount / this.myDayCount;
    this.myDayHour = Math.floor(myDayHour);
    this.myDayMinute = Math.floor((myDayHour * 60) % 60);
    this.myDaySecond = Math.floor((myDayHour * 60 * 60) % 60) ;
    
    const myDifHour = 24 - myDayHour;
    this.myDifHour = Math.floor(myDifHour);
    this.myDifMinute = Math.floor((myDifHour * 60) % 60);
    this.myDifSecond = Math.floor((myDifHour * 60 * 60) % 60) ;

  }

  getMyDayCount(){
  return this.myDayCount;
  }
    
  getMyDayTime(){
  return this.myDayHour + ':' + this.myDayMinute + ':' + this.myDaySecond;
  }

  getMyDayTimeStr(){
    return this.myDayHour + '時間' + this.myDayMinute + '分' + this.myDaySecond + '秒';
  }
  
  getDifTimeStr(){
    return this.myDifHour + '時間' + this.myDifMinute + '分' + this.myDifSecond + '秒';
  }
    
}

const btn = document.getElementById('btn');
const answer = document.getElementById('answer');
const year = document.getElementById('year');
const day = document.getElementById('day');

btn.addEventListener('click', () => {
  const myClock = new MyClock(parseInt(year.value) ,parseInt(day.value));
  const time = myClock.getMyDayTimeStr();
  const dif = myClock.getDifTimeStr();
  let str = `1日の時間：${time}<br>（1日${dif}短縮）`;
  
  answer.innerHTML = str;
});

  
  