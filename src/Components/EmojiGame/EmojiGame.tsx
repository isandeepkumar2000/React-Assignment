import React, { Component } from 'react'
import { EmojiCard } from '../EmojiCard/EmojiCard';
import NavBar from '../NavBar/NavBar';
import WinOrLoose from '../WinOrLoose/WinorLoss';

import {
  AppConatiner,
  EmojiGameBody,
  EmojiListConatiner
}
  from './styledComponent';


type MyState = {
  isChecked: boolean
  topScore: number
  clickEmojiList: Array<number>
}

export type EmojiObject = {
  uniqueId: number;
  emojiName: string;
  emojiUrl: string
}

const emojisList = [
  {
    uniqueId: 0,
    emojiName: "Face with stuck out tongue",
    emojiUrl: "https://cdn-icons-png.flaticon.com/128/6637/6637199.png",
  },
  {
    uniqueId: 1,
    emojiName: "Face with head bandage",
    emojiUrl: "https://cdn-icons-png.flaticon.com/128/4160/4160745.png",
  },
  {
    uniqueId: 2,
    emojiName: "Face with hugs",
    emojiUrl: "https://cdn-icons-png.flaticon.com/128/742/742860.png",
  },
  {
    uniqueId: 3,
    emojiName: "Face with laughing",
    emojiUrl: "https://cdn-icons-png.flaticon.com/128/1791/1791359.png",
  },
  {
    uniqueId: 4,
    emojiName: "Laughing face with hand in front of mouth",
    emojiUrl: "https://cdn-icons-png.flaticon.com/128/7809/7809452.png",
  },
  {
    uniqueId: 5,
    emojiName: "Face with mask",
    emojiUrl: "https://cdn-icons-png.flaticon.com/128/4160/4160724.png",
  },
  {
    uniqueId: 6,
    emojiName: "Face with silence",
    emojiUrl: "https://cdn-icons-png.flaticon.com/128/4160/4160766.png",
  },
  {
    uniqueId: 7,
    emojiName: "Face with stuck out tongue and winked eye",
    emojiUrl: "https://cdn-icons-png.flaticon.com/128/8944/8944475.png",
  },
  {
    uniqueId: 8,
    emojiName: "Grinning face with sweat",
    emojiUrl: "https://cdn-icons-png.flaticon.com/128/742/742784.png",
  },
  {
    uniqueId: 9,
    emojiName: "Smiling face with heart eyes",
    emojiUrl: "https://cdn-icons-png.flaticon.com/128/3769/3769212.png",
  },
  {
    uniqueId: 10,
    emojiName: "Grinning face",
    emojiUrl: "https://cdn-icons-png.flaticon.com/128/743/743418.png",
  },
  {
    uniqueId: 11,
    emojiName: "Smiling face with star eyes",
    emojiUrl: "https://cdn-icons-png.flaticon.com/128/1791/1791330.png",
  },
];

class EmojiGame extends Component {

  state: MyState = { isChecked: true, topScore: 0, clickEmojiList: [] }


  resetGame = () => {
    this.setState({ clickEmojiList: [], isChecked: true, })
  }

  renderScoreCard = () => {

    const { clickEmojiList } = this.state
    const isWon = clickEmojiList.length === emojisList.length

    return (
      <WinOrLoose
        isWon={isWon}
        PlayAgainButton={this.resetGame}
        score={clickEmojiList.length}
      />
    )
  }

  finishGameAndSetTopScore = (currentScore: number) => {
    const { topScore } = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({ topScore: newTopScore, isChecked: false })
  }

  clickEmoji = (uniqueId: number): void => {

    const { clickEmojiList } = this.state

    const isEmojiPresent = clickEmojiList.includes(uniqueId)
    const clickedEmojisLength = clickEmojiList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
   
      this.setState((previousState: MyState) => ({
        clickEmojiList: [...previousState.clickEmojiList, uniqueId],
      }))
    }
  }

  getShuffledEmojisList = () => {
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <EmojiListConatiner className="emojis-list-container">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiCard
            key={emojiObject.uniqueId}
            emojiDetails={emojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </EmojiListConatiner>
    )
  }



  render() {
    const { isChecked, topScore, clickEmojiList } = this.state

    return (

      <AppConatiner >
        <NavBar
          currentScore={clickEmojiList.length}
          isChecked={isChecked}
          topScore={topScore}
        />
        <EmojiGameBody >
          {isChecked ? this.renderEmojisList() : this.renderScoreCard()}
        </EmojiGameBody>
      </AppConatiner>
    )
  }
}
export default EmojiGame