import './index.css'
import Box from './box';
function Boxes(){
    return(
        <div className = "Container">
            <div>
        <h1 className = "heading">Boxes</h1>
        </div>
        <div className = "Container-Boxes">
      
         <Box className = "small" name="Small"/>
         
         <Box className = "medium" name="Medium"/>

         <Box className = "large" name="Large"/>
        </div>
       </div>
        
    );
}
export default Boxes;