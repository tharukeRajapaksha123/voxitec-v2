import React from 'react'
import './Clock.css'
class Clock extends React.Component {
    constructor() {
        super()
        this.state = { h: 0, m: 0, s: 0, mute: false }
        this.updateClock = this.updateClock.bind(this)
    }

    componentWillMount() {
        this.updateClock()
    }

    componentDidMount() {
        var tick = document.querySelector('audio')
        setInterval(() => {
            this.updateClock()
            // if (!this.state.mute) {
            //     tick.volume = 0.1
            //     tick.play()
            // }
        }, 1000)
        // document.addEventListener('click', () => this.setState({ mute: !this.state.mute }))
    }

    updateClock() {
        var now = Math.round((new Date().getTime() - new Date().setHours(0, 0, 0, 0)) / 1000)
        this.setState({ h: now / 720, m: now / 60, s: now })
    }

    render() {
        return (
            <div>
                {/* <div className="copy">Click anywhere to {this.state.mute ? 'un' : null}mute</div> */}
                <div className="clock">
                    {/* <div className="nums">
                        {Array(12).fill().map(() => <div className="num" />)}
                    </div> */}
                    <div className="clock-container">
                        <ClockHand name="hour" rotate={this.state.h} />
                        <ClockHand name="min" rotate={this.state.m} />
                        <ClockHand name="second" rotate={this.state.s} />
                    </div>
                    {/* <audio src="http://ianespanto.com/archive/files/tick.mp3" /> */}
                </div>
            </div>
        )
    }
}

class ClockHand extends React.Component {
    render() {
        var tf = { transform: `translateY(-50%) rotate(${this.props.rotate * 6 - 90}deg)` }
        return <div className={`hand ${this.props.name}`} style={tf} />
    }
}

export default Clock