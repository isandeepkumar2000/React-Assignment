import React, { Component } from 'react'
import './index.css'
 class Thumbnail extends Component {

    renderThumbnailsStore = () => {
        const {photosData,updatedOnclickId,selectedImageId} = this.props
      return photosData.map(eachitem => {
    const {id, thumbnailUrl,thumbnailAltText}= eachitem


        const onClickThumbnail = () => {
          updatedOnclickId (id)
        }
        
        const ButtonName =
          id === selectedImageId ? "unactive" : "activebox"
        

        return(
            <li key={id}  onClick = {onClickThumbnail}  className = {ButtonName}>
                <img src= {thumbnailUrl}
                className = "thumbnail_image"
                alt={thumbnailAltText} />
            </li>
        )
        })
    
    }


  render() {
    return (
      <div className='thumbnail_container'>
       <h1 className='thumbnail_Heading'>Nature Photography</h1>
       <p className='thumbnail_Paragraph'>Nature Photography by Sandeep</p>
       <ul className="thumbnails-list-container">{this.renderThumbnailsStore()}</ul>

      </div>
    )
  }
}
export default Thumbnail