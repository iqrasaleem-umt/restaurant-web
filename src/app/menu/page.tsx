
import React from 'react';
import { menuItems } from '../utils/mock';
import Menucard from '@/components/menucard';

export default function AllMenu() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-20 px-8 ">
      {menuItems.map((item) => (
       <Menucard  
       key={item.id}
       name={item.name}
       description={item.description}
       price={item.price}
       category={item.category}
       imageUrl={item.imageUrl}
       id={item.id}
       />
       ))}
   </div>
     
  );
}

