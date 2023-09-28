import React from 'react'

export default function ImageItem({ id, download_url }) {
  console.log(id)
  return (
    <li>
      {id}
      <img src={download_url} alt="" style={{width: 150}}/>
    </li>
  )
}
