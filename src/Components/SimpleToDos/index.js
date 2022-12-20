import SimpleToDoArrayList from "./todoArrayList";
import UserSimpleTodoProfile from "./UserInput";
import './index.css'
import { Component } from 'react'

class SimpleTodo extends Component {
    state = {usersDeleteList: SimpleToDoArrayList}

    deleteUser = uniqueNo  => {
        const {usersDeleteList} = this.state
        const filterUserTodoList = usersDeleteList.filter(eachtodo => eachtodo.unquidNo !== uniqueNo)
this.setState({
    usersDeleteList:filterUserTodoList
})
    }

  render() {
  const {usersDeleteList} = this.state
    return (
   
        <div className="SimpleTodoList-Container">
           <h1 className="SimpleTodoList-Heading">Simple ToDos</h1>
           <div className="SimpleTodoList-Box">
            {usersDeleteList.map((eachitem) => (
                <UserSimpleTodoProfile userDetailsTodo = {eachitem}  key={eachitem.unquidNo}
                deleteUser = {this.deleteUser}/>
            ))}
            </div>
        </div>

    )
  }
}
export default SimpleTodo