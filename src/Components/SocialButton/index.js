import './index.css';
import Button from './button';

function SocialButton () {
    return (
<div className="Container-Social-Button">
<h1 className = "Heading">Social Buttons</h1>
        <div className = "Button-items">
          
<Button className="like" name ="Like"/>
<Button className="comment" name ="Comment"/>
<Button className="share" name ="Share"/>
        </div>
        </div>
    );
}

export default SocialButton;