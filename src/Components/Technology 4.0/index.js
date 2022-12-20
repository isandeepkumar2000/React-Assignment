import './index.css'

function TechnologyBanner(props){
    const {TechnologyBannerList} = props

    return (
<div className = "Technology-Container-Box">
    <div>
    <h1 className = "Subject">Learn 4.0 Technologies</h1>
    <p className = "Discription">Get Trained by alumni of IITs and Top companies like Amazon, Microsoft, Intel, Nvidia, Qualcomm etc. Learn Directly from professional involved in Product Development</p>
</div>
<div className = "Boxes-Container">
    {TechnologyBannerList.map(eachitem => {
return <section className = "Box-items-Container">
    <div className = {eachitem.name}>
        <h1  className = "Heading">{eachitem.specialization}</h1>
        <p className = "Paragraph">{eachitem.designation}</p>
   <img className = 'Images' src = {eachitem.imgDoctor} alt= "" />
    </div>

</section>
    }  
    )}

</div>
</div>
    );
}

export default TechnologyBanner;