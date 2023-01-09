
import React from 'react'
import { useState } from 'react'
import { uuid } from 'uuidv4';
import CommentStorage from './Indx';


export type CommentObject = {
  id:string
  title:string,
  comment:string,
}


const CommentResult = () => {
  const [title, setTitle] = useState("")
  const [comment, setComment] = useState("")
  const [commentList, setCommentList] = useState<CommentObject[]> ([])


  const selectTitle = (e: React.ChangeEvent<HTMLInputElement> ) => setTitle(e.target.value)
  
  const selectComment = (e: React.ChangeEvent<HTMLInputElement> ) => setComment(e.target.value)
  
    const SubmitCommentForm = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newComment:CommentObject = {
        id: uuid(),
        title,
        comment,
      };
      setCommentList((prevCommentsList: CommentObject[]) => [...prevCommentsList, newComment]);
      setTitle(""),
      setComment("")
    };
  
  return (
    <div className='CommentResult_Container'>
         <div className='CommentResult_Items'>
          <h1>Notes</h1>

          <form className='Comment_section' onSubmit={SubmitCommentForm}>
            <div>
            <input placeholder='Write title' value = {title} onChange = {selectTitle} />
            </div>
            <div>
            <input type="textarea"  value = {comment} 
          name="textValue"
          onChange={selectComment}
        />
            </div>
          <button>Add</button>
             </form>

             
        {commentList.map((eachComment: CommentObject) => (
          <CommentStorage
          commentLst={eachComment}
          key = {eachComment.id}
          /> ))}
           <p className='AlertMessage'> {commentList.length === 0 ? <h2>There is no History to show</h2> : ''} 
      </p>
</div>

    </div>
  )
}

export default CommentResult