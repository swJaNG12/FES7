import React from 'react'
import ImageItem from './ImageItem'

export default function ImageList({ imageList }) {
  return (
    <ul>
      {imageList.map(imgData => {
        return <ImageItem key={imgData.id}  {...imgData} />
      })}
    </ul>
  )
}
