import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    headCount: 0,
    tailCount: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickToss = () => {
    const {headCount, tailCount} = this.state
    const randomNumber = Math.floor(Math.random() * 2)
    let resultImage = ''
    let updatedHeadCount = headCount
    let updateTailCount = tailCount

    if (randomNumber === 0) {
      resultImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      updatedHeadCount += 1
    } else {
      resultImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      updateTailCount += 1
    }

    this.setState({
      headCount: updatedHeadCount,
      tailCount: updateTailCount,
      imageUrl: resultImage,
    })
  }

  render() {
    const {headCount, tailCount, imageUrl} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={imageUrl} className="image" alt="toss result" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onClickToss}
          >
            Toss Coin
          </button>
          <div className="list-container">
            <p className="list-item">Total: {headCount + tailCount}</p>
            <p className="list-item">Heads: {headCount}</p>
            <p className="list-item">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
