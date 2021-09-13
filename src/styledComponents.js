import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 30px;
`
export const GameContainer = styled.div`
  width: 80%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;

  @media screen and (max-height: 768px) {
    width: 100%;
  }
`
export const ScoreNameContainer = styled.div`
  border: solid #fff 2px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

export const ChoiceNameContainer = styled.div`
  font-family: 'Bree Serif';
`
export const ChoiceName = styled.h1`
  font-size: 30px;
  color: #fff;
`
export const ScoreContainer = styled.div`
  background-color: #fff;
  border-radius: 15px;
  text-align: center;
  color: #223a5f;
  padding: 20px;
  font-family: 'Bree Serif';
`
export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
`
export const ResultEntireContainer = styled.div`
  width: 750px;
  align-self: center;
  margin-top: 70px;

  @media screen and (max-height: 768px) {
    width: 100%;
    align-self: center;
    margin-top: 70px;
  }
`
export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Player = styled.div`
  color: #fff;
  font-size: 26px;
  text-align: center;
`
export const Choice = styled.img`
  width: 170px;

  @media screen and (max-height: 768px) {
    width: 150px;
  }
`
export const Result = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`
export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`
export const ButtonPlayAgain = styled.button`
  padding: 20px 40px 20px 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #fff;
  color: #223a5f;
  font-size: 20px;
  cursor: POINTER;
  font-family: 'Bree Serif';
`
export const ChoiceList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 750px;
  list-style-type: none;
  align-self: center;
  padding: 0;

  @media screen and (max-height: 768px) {
    width: 100%;
  }
`
