import React from "react"
import { todoObject } from "./App"
import { DeleteButton, JoinFlex, Paragraph } from "./styleComponent"


interface todoListItemProps {
    todo: todoObject
    deleteUser: (id: number) => void
}

export const TodoListItem: React.FC<todoListItemProps> = (props) => {
    const { todo, deleteUser } = props
    const { id } = todo
    const deleteButton = () => {
        deleteUser(id)
    }

    return (
        <React.Fragment>
            <JoinFlex>
            <div>
                <Paragraph>{props.todo.text}</Paragraph>
                </div>
<div>
<DeleteButton type="button" onClick={deleteButton}>Delete</DeleteButton>
</div>
            
</JoinFlex>  
        </React.Fragment>
    )
}