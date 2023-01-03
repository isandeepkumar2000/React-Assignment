import React from "react";

import { EmojiObject } from "../EmojiGame/EmojiGame";
import {
  EmojiBtn,
  EmojiIcon,
  EmojiItem
}
  from "./styledComponent";


interface EmojiListProps {

  emojiDetails: EmojiObject;
  clickEmoji: Function;
}


export const EmojiCard: React.FC<EmojiListProps> = (props) => {

  const { emojiDetails, clickEmoji } = props
  const { uniqueId, emojiName, emojiUrl } = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(uniqueId)
  }
  return (

    <>
      <EmojiItem className="emoji-item">
        <EmojiBtn type="button" className="emoji-btn" onClick={onClickEmojiCard}>
          <EmojiIcon className="emoji-icon" src={emojiUrl} alt={emojiName} />
        </EmojiBtn>
      </EmojiItem>

    </>
  )
}