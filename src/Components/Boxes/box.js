function Box (props) {
    const{name, className} = props
    
    return (
       
         <p className = {className}>{name}</p>
     
    )
}
export default Box;