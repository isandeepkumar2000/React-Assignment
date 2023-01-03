
import {
  Button,
  CurrentScoreLevel,
  CurrentScrorevalue,
  DetailsSection,
  GameStatus,
  ImageSection,
  WinAndLooseImage,
  WinOrLooseCard
} 
from './styledComponent';

const Loss_Img = "https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
const Win_img = "https://assets.ccbp.in/frontend/react-js/won-game-img.png"

interface EmojiListProps {
  isWon: boolean;
  PlayAgainButton: React.MouseEventHandler<HTMLButtonElement>;
  score: number;
}


const WinOrLoose: React.FC<EmojiListProps> = (props) => {
  const { isWon, PlayAgainButton, score } = props
  const imageUrl = isWon ? Win_img : Loss_Img
  const gameStatus = isWon ? "You Win" : "You Loss"
  const ScoreLevel = isWon ? "Best Score" : "Score"

  return (
    <WinOrLooseCard>
      <DetailsSection>
        <GameStatus >{gameStatus}</GameStatus>
        <CurrentScoreLevel>{ScoreLevel}</CurrentScoreLevel>
        <CurrentScrorevalue>{score}/12</CurrentScrorevalue>
        <Button
          type="button"
          onClick={PlayAgainButton}
        >
          Play Again
        </Button>
      </DetailsSection>
      <ImageSection>
        <WinAndLooseImage className="win-or-lose-image" src={imageUrl} alt="win or lose" />
      </ImageSection>
    </WinOrLooseCard>
  )
}
export default WinOrLoose
