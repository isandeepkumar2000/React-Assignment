import './index.css';
import Paragraph from './paragrpah';

function Notfication () {
    return (
<div className="Container-Notfication">
<h1 className = "Heading">Notification</h1>
        <div className = "Notification-items">

            <Paragraph className = "paragraph-1" name = "Save" img="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/> 
             
            <Paragraph className = "paragraph-2" name = "Done" img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/> 
           
            <Paragraph className = "paragraph-3" name = "Error"  img="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" /> 
       
            <Paragraph className = "paragraph-4" name = "Passed" img="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"/> 
        
        </div>
        </div>
    );
}

export default Notfication;