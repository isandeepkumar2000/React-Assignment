
function Paragraph (props){
    const {name, className,img} = props
     return (
        <div className = {className}>
 <img src={img} alt="Done"/>
 <p  >{name}</p>
 </div>
     );
 }
 export default Paragraph;
