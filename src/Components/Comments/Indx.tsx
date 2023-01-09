import React from 'react'
import { CommentObject } from './Index'


export interface CommentItems {
    
  commentLst:CommentObject


}

const CommentStorage: React.FC<CommentItems> = (props) => {
  const {commentLst} = props
  const {id,title, comment} = commentLst
  return (
    <div className='container'>
      <p>{title}</p>
      <p>{comment}</p>
    </div>
  )
}

export default CommentStorage