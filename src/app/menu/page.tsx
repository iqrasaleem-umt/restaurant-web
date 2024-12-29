import Menucard from '@/components/menucard'
import React from 'react'
import { menuItems } from '../utils/mock'

export default function AllMenu() {
  return (
    <div className='grid grid-cols-2 gap-10 mt-20'>
       
        {menuItems.map((item) => (
        <Menucard  
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          category={item.category}
          imageUrl={item.imageUrl}  // Pass imageUrl prop as well
        />
      ))}
    </div>
  )
}