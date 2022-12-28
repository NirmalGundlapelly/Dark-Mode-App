// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevSate => ({isDarkMode: !prevSate.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const classNameToChange = isDarkMode ? 'darkMode' : 'lightMode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const buttonColor = isDarkMode ? 'darMode' : 'lightMode'

    return (
      <div className="bgContainer">
        <div className={`cardContainer ${classNameToChange}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            onClick={this.onClickButton}
            className={`btn ${buttonColor}`}
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
