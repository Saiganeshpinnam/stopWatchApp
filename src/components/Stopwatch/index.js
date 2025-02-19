// Write your code here
import {Component} from 'react'

class Stopwatch extends Component {
  state = {
    timerInMinutes: 0,
    timeElapsedInSeconds: 0,
    isTimerRunning: false,
  }

  onStartTimer = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.IntervalId)
    } else {
      this.IntervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    }
    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))
  }

  incrementTimeElapsedInSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 3,
    }))
  }

  getFormattedTime = () => {
    const {timerInMinutes, timeElapsedInSeconds} = this.state

    const minutes = Math.floor(timeElapsedInSeconds/60) 
    const seconds = timeElapsedInSeconds%60

    const stringifiedMinutes =
      timerInMinutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds =
      seconds > 9
        ? seconds
        : `0${seconds}`

    return `${stringifiedMinutes} : ${stringifiedSeconds}`
  }

  onIncreaseTime = () => {
    this.setState(prevState => ({
      timerInMinutes: prevState.timerInMinutes + 1,
    }))
  }

  onDecreaseTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.getFormattedTime()}</h1>
        <button type="button" onClick={this.onStartTimer}>
          start
        </button>
      </div>
    )
  }
}

export default Stopwatch
