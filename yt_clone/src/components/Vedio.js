import React from 'react'

export default function Vedio() {
  return (
    <div className='py-2'>
      <img src="https://miro.medium.com/max/945/1*W21Yvoor2nIr3dnZ46tNYw.jpeg" alt="vedio" className='w-80 rounded' />

      <div className="desVedio flex justify-between items-center">
        <img src="/ab.svg" alt="logo" className='w-10' />
        <h1>Learn react js with Lazy benmansour</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
      </div>

      <div className="info mx-10">
        <h1>Lazy benmansour</h1>
        <span>122 M de vues</span>
        <span>il y a un mois</span>
      </div>
    </div>
  )
}
