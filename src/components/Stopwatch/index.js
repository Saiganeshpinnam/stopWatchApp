// Write your code here
import {Component} from 'react'

import './index.css'

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

    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = timeElapsedInSeconds % 60

    const stringifiedMinutes = timerInMinutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
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

  onStopTimer = () => {
    // this.setState(prevState => ({
    //   timerInMinutes: prevState.timerInMinutes + 0,
    //   timeElapsedInSeconds: prevState.timeElapsedInSeconds + 0,
    // }))

    clearInterval(this.IntervalId)
    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))
  }

  onResetTimer = () => {
    this.setState(prevState => ({
      timerInMinutes: 0,
      timeElapsedInSeconds: 0,
    }))
    clearInterval(this.IntervalId)
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="sample-container">
          <div className="timer-card-container">
            <div className="timer-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-icon"
              />
              <h1>Timer</h1>
            </div>
            <h1 className="formatted-time">{this.getFormattedTime()}</h1>
            <div className="buttons-container">
              <button
                type="button"
                onClick={this.onStartTimer}
                className="start-button"
              >
                Start
              </button>
              <button
                type="button"
                onClick={this.onStopTimer}
                className="stop-button"
              >
                Stop
              </button>
              <button
                type="button"
                onClick={this.onResetTimer}
                className="reset-button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
