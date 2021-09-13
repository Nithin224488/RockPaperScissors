import {Component} from 'react'
import ReactPopup from './components/ReactPopup'
import ChoiceItem from './components/ChoiceItem'
import {
  AppContainer,
  GameContainer,
  ScoreNameContainer,
  ChoiceNameContainer,
  ChoiceName,
  ScoreContainer,
  Score,
  ResultEntireContainer,
  ResultContainer,
  Player,
  Choice,
  Result,
  ButtonContainer,
  ButtonPlayAgain,
  ChoiceList,
} from './styledComponents'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    dataTestId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',

    dataTestId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    dataTestId: 'paperButton',
  },
]

class App extends Component {
  state = {
    score: 0,
    show: false,
    activeId: 'PAPER',
    result: '',
    opponentChoice: {},
  }

  setActiveId = id => {
    const opponentChoice = choicesList[Math.floor(Math.random() * 3)]

    if (opponentChoice.id === 'PAPER' && id === 'PAPER') {
      this.setState({
        activeId: id,
        show: true,
        opponentChoice,
        result: 'IT IS DRAW',
      })
    } else if (opponentChoice.id === 'ROCK' && id === 'ROCK') {
      this.setState({
        activeId: id,
        show: true,
        opponentChoice,
        result: 'IT IS DRAW',
      })
    } else if (opponentChoice.id === 'SCISSORS' && id === 'SCISSORS') {
      this.setState({
        activeId: id,
        show: true,
        opponentChoice,
        result: 'IT IS DRAW',
      })
    } else if (opponentChoice.id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        activeId: id,
        show: true,
        opponentChoice,
        result: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (opponentChoice.id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        activeId: id,
        show: true,
        opponentChoice,
        result: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (opponentChoice.id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        activeId: id,
        show: true,
        opponentChoice,
        result: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (opponentChoice.id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        activeId: id,
        show: true,
        opponentChoice,
        result: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (opponentChoice.id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        activeId: id,
        show: true,
        opponentChoice,
        result: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (opponentChoice.id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        activeId: id,
        show: true,
        opponentChoice,
        result: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
  }

  getPlayerChoice = () => {
    const {activeId} = this.state
    return choicesList.filter(choice => activeId === choice.id)[0]
  }

  playAgain = () => {
    this.setState({show: false})
  }

  render() {
    const playerChoice = this.getPlayerChoice()

    const {score, show, opponentChoice, result} = this.state

    return (
      <AppContainer>
        <GameContainer>
          <ScoreNameContainer>
            <ChoiceNameContainer>
              <ChoiceName>
                Rock
                <br /> Paper
                <br /> Scissors
              </ChoiceName>
            </ChoiceNameContainer>
            <ScoreContainer>
              <p>Score</p>
              <Score>{score}</Score>
            </ScoreContainer>
          </ScoreNameContainer>
          {show ? (
            <ResultEntireContainer>
              <ResultContainer>
                <div>
                  <Player>You</Player>
                  <Choice src={playerChoice.image} alt="your choice" />
                </div>
                <div>
                  <Player>Opponent</Player>
                  <Choice src={opponentChoice.image} alt="opponent choice" />
                </div>
              </ResultContainer>
              <Result>{result}</Result>
              <ButtonContainer>
                <ButtonPlayAgain type="button" onClick={this.playAgain}>
                  PLAY AGAIN
                </ButtonPlayAgain>
              </ButtonContainer>
            </ResultEntireContainer>
          ) : (
            <ChoiceList>
              {choicesList.map(choice => (
                <ChoiceItem
                  key={choice.id}
                  choice={choice}
                  setActiveId={this.setActiveId}
                />
              ))}
            </ChoiceList>
          )}
        </GameContainer>
        <ReactPopup />
      </AppContainer>
    )
  }
}

export default App
