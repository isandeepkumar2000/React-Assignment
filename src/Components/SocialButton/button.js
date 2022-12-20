
function Button (props){
   const {name, className} = props
    return (

<button className={className} >{name}</button>
    );
}
export default Button;