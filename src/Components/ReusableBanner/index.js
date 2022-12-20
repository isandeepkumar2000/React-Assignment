import './index.css'

function BannerCard(props){
    const {BannerCardItem} = props;
    
    return(
        <div className = "BannerCard-Container">
           {BannerCardItem.map(eachItem=>{
            return <section className = "BannerCardIte-1">
               <div className = "Banner-1">
               <img className = "image-1" src = {eachItem.imageUrl} alt = "" />
                <div className = "Discription-Part">
                    <h1 className = "Heading">{eachItem.HeaderText}</h1>
                    <p className = "description">{eachItem.Description}</p>
                    <button className = "button">{eachItem.ButtonName}</button>
                   
                </div>
                <div className = "image">
               
                <img className = "image-2" src = {eachItem.imageUrls} alt = "" />
                </div>
               </div>
            </section>
           })}
        </div>

    );
}
export default BannerCard;