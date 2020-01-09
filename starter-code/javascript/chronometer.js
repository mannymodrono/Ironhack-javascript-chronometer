class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime ++;

    }, 1000)
  }
  getMinutes() {
    let minutes = 0;
    for (; this.currentTime >= 60;) {
      minutes ++;
      this.currentTime = this.currentTime - 60;
    }
    return minutes;
  }
  getSeconds() {
    let seconds = this.currentTime;
    return seconds;
  }
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}