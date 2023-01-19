import React from 'react'

export default function Links(props) {
  return (
    <div>
         <div className="menus justify-start items-center flex py-3 px-2 hover:bg-gray-200 hover:cursor:pointer">
            <div className='img-yt'>
                {props.img}
            </div>
            <h1 className='mx-4'>{props.title}</h1>
         </div>
    </div>
  )
}
