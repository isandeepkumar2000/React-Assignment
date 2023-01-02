import React, { Component } from 'react'
import { Centerstyle, GlobalStyle, Heading, HeadingStyle } from './styleComponent';
import { TodoListItem } from './todoListItem';

export type todoObject = {
  text: string;
  complete: boolean;
  id: number;
}

const todos: todoObject[] = [
{text: "walk the dog in thw hill of the Son", complete: false , id: 1 }, 
{text:"no i dont hill of the Son", complete: false , id: 2},
{text:"no dont hill of the Son", complete: false , id: 3},
{text:"no i hill of the Son", complete: false , id: 4},
{text:"i dont hill of the Son", complete: false , id: 5},
{text:"no i dont ys hill of the Son", complete: false , id: 6},
{text:"no i dont know hill of the Son", complete: false , id: 7},
]



class App extends Component {
  state = {usersDeleteList: todos}

  deleteUser = (id:number)  => {
const {usersDeleteList} = this.state

const filterArrayList = usersDeleteList.filter(eachitem =>  eachitem.id !== id)

this.setState({
  usersDeleteList:filterArrayList
})

  }

  render() {
    const {usersDeleteList} = this.state
    return (
      <>
      <GlobalStyle/>
      <HeadingStyle>
      <Centerstyle>
      <Heading>ToDoList</Heading>
    {usersDeleteList.map((eachitem) => {
    return < TodoListItem  todo = {eachitem}  key = {eachitem.id} deleteUser = {this.deleteUser}/>
   })}

      </Centerstyle>
      </HeadingStyle>
      </>
    )
}
}
export default App

