import React from 'react';
import Image from 'next/legacy/image';

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
    <div className="flex items-center space-x-4">
      {/* Image Container */}
      <div
        className="rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-400"
        style={{
          width: '100px',
          height: '100px',
        }}
      >
        <Image
          src={imageUrl}
          alt={name}
          height={100}
          width={100}
          style={{ objectFit: 'cover' }} // Ensures the image covers the entire container
        />
      </div>

      {/* Text Details */}
      <div className="font-serif">
      <div className="font-serif mt-5 mx-3 ">
        <p>{name} -------------------------- {price}</p>
        <p className="text-orange-400 mt-2">{description}</p>
      </div>
      </div>
    </div>
  );
};

export default Menucard;

