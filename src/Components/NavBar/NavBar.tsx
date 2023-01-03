
import {
  EmojiLogo,
  LogoAndTitleContainer,
  NavBarContainer, Score,
  ScoreContainer,
  Title,
  TitleWithScoreConatiner
}
  from './styledComponents'

interface EmojiListProps {
  currentScore: number
  topScore: number
  isChecked: boolean
}


export const NavBar: React.FC<EmojiListProps> = (props) => {
  const { currentScore, topScore, isChecked } = props
  return (
    <NavBarContainer>
      <TitleWithScoreConatiner >
        <LogoAndTitleContainer >
          <EmojiLogo
           
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <Title >Emoji Game</Title>
        </LogoAndTitleContainer>
        {isChecked && (
          <ScoreContainer >
            <Score >Score: {currentScore}</Score>
            <Score >Top Score: {topScore}</Score>
          </ScoreContainer>
        )}
      </TitleWithScoreConatiner>
    </NavBarContainer>
  )
}

export default NavBar