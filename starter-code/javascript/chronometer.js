class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick(func) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      console.log(this.currentTime)
      func();
    }, 1000)
  }
  getMinutes() {
    let timeClone = this.currentTime;
    let minutes = 0;
    for (; timeClone >= 60;) {
      minutes ++;
      timeClone = timeClone - 60;
    }
    return minutes;
  }
  getSeconds() {
    let timeClone = this.currentTime;
    for (; timeClone >= 60;) {
      timeClone = timeClone - 60;
    }
    return timeClone;
  }
  twoDigitsNumber(time) {
    let timeDigits = (""+time).split("");

    if (timeDigits.length === 1) {
      timeDigits.unshift('0')
    }

    return timeDigits;
  }  
  stopClick() {
    this.intervalId = clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.intervalId = clearInterval();
  }
  // splitClick() {}
}