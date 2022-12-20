import './index.css'
const  UserSimpleTodoProfile = (props) => {
const {userDetailsTodo, deleteUser} = props;
const {Works,unquidNo} = userDetailsTodo
const isDelete = () => {
    deleteUser (unquidNo)
}

return(
    

    <div className = "SimpleTodo-items">
        <p className = "SimpleTodo-paragrph">{Works}</p>
        <button className = "SimpleTodo-Button" onClick={isDelete}>Delete</button>
 
</div>
)
}

export default UserSimpleTodoProfile