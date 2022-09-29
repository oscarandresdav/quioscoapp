import Image from 'next/image'
import React from 'react'
import { formatearDinero } from '../helpers';

const Producto = ({producto}) => {
  const { nombre, imagen, precio } = producto;

  return (
    <div className='border p-3 text-center'>
      <Image 
        width={400}
        height={500}
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen ${nombre}`}
      />
      <div className="p-5">
        <h3 className='text-2xl font-bold'>{nombre}</h3>
        <p className='mt-5 font-black text-4xl text-amber-500'>
          {formatearDinero(precio)}
        </p>
      </div>

    </div>
  )
}

export default Producto