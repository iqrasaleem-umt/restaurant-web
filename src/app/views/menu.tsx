import Menucard from '@/components/menucard';
import { menuItems } from '../utils/mock';
import React from 'react';
import Link from 'next/link';

export default function Menu() {
  const Menuchunks = menuItems.slice(0, 4); // Take the first 4 items from menuItems
  
  return (
    <div>
      <div
        id="menu"
        className="flex flex-col items-center mt-10 font-cinzel transition-transform duration-300 ease-linear"
      >
        <h1 className="text-orange-400 text-xl">Menu</h1>
        <h1 className="text-black text-2xl mt-7">Checkout our tasty menu</h1>
        <div className="flex gap-4 text-black mt-7 font-serif">
          <Link href="category/speciatty" className="text-orange-400">Specialty</Link>
          <Link href="category/starter" className="hover:text-orange-400">Starter</Link>
          <Link href="category/salads" className="hover:text-orange-400">Salads</Link>
          <Link href="/menu" className="hover:text-orange-400">All</Link>
        </div>
      </div>
      
      {/* Render Menucard for each item */}
      <div className="grid grid-cols-2 gap-8 mt-8 px-4 ">
        {Menuchunks.map((item) => (
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
    </div>
  );
}