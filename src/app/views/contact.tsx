import React from 'react';

export default function Contact() {
  return (
    <div id="contact">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="font-serif text-orange-500 text-xl">Contact</h1>
        <p className="font-serif text-xl text-black mt-5">Get In Touch</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <p className="bg-black text-white border border-orange-300 p-4 w-full sm:w-1/2 lg:w-1/3 text-center">
          Location: A108 Adam Street, New York, NY 535022
        </p>
        <p className="bg-black text-white border border-orange-300 p-4 w-full sm:w-1/2 lg:w-1/3 text-center">
          Email: info@example.com
        </p>
        <p className="bg-black text-white border border-orange-300 p-4 w-full sm:w-1/2 lg:w-1/3 text-center">
          Phone no: 02356778899
        </p>
      </div>
    </div>
  );
}
