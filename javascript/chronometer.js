class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0
  }
  startClick(callback) {
    setInterval(() => this.currentTime++, 1000);
  }
  getMinutes() {
    if(this.currentTime <= 0){
      return 0
    }
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    if(this.currentTime <= 0){
      return 0
    }
    return Math.floor(this.currentTime - this.getMinutes() * 60)
  
  }
  twoDigitsNumber(number) {
    if(number < 10){
      return `0${number}`
    }
    return number.toFixed(0)
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let min = this.getMinutes();
      let sec = this.getSeconds();
      if (min < 10) {
        return `${0}${min}:${0}${sec}`;
      } else {
        return `${min}:${sec}`
      }
  }
}

