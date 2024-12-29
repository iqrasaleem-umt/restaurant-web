import React from 'react';
import Image from "next/legacy/image";

// Define the interface for props
interface MenucardProps {
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
}

const Menucard: React.FC<MenucardProps> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="flex items-center">
      <div
        style={{
          borderRadius: '50%',
          overflow: 'hidden',
          width: '100px',
          height: '100px',
        }}
      >
        <Image
          src={imageUrl}
          height={100}
          width={100}
          alt={name}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="font-serif mt-5 mx-3 ">
        <p>{name} -------------------------- {price}</p>
        <p className="text-orange-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Menucard;