import React from 'react';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpeg';
import img10 from '../assets/img10.jpeg';
import img11 from '../assets/img11.jpeg';


const images = [
  { src: img1, alt: 'Image 1' }, { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3' }, { src: img4, alt: 'Image 4' },
  { src: img5, alt: 'Image 5' }, { src: img6, alt: 'Image 6' },
  { src: img7, alt: 'Image 7' }, { src: img8, alt: 'Image 8' },
  { src: img9, alt: 'Image 9' }, { src: img10, alt: 'Image 10' },
  { src: img11, alt: 'Image 11' },
];

const ImageCatalog = () => {
  // Re-mapped spans to fill the 8x7 grid with exactly 11 images
  const getGridStyles = (index) => {
    switch (index + 1) {
      case 1: return "col-start-1 col-span-2 row-start-1 row-span-3"; 
      case 2: return "col-start-3 col-span-3 row-start-1 row-span-3"; 
      case 3: return "col-start-6 col-span-1 row-start-1 row-span-2"; 
      case 4: return "col-start-7 col-span-2 row-start-1 row-span-2"; 
      case 5: return "col-start-6 col-span-3 row-start-3 row-span-3"; // Expanded
      case 6: return "col-start-1 col-span-2 row-start-4 row-span-2"; 
      case 7: return "col-start-3 col-span-2 row-start-4 row-span-1"; 
      case 8: return "col-start-5 col-span-1 row-start-4 row-span-2"; 
      case 9: return "col-start-1 col-span-3 row-start-6 row-span-2"; // Expanded
      case 10: return "col-start-4 col-span-2 row-start-5 row-span-3"; // Expanded
      case 11: return "col-start-6 col-span-3 row-start-6 row-span-2"; // Expanded
      default: return "";
    }
  };

  return (
    <section className="px-2 py-8 bg-[#eee] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div 
          className="grid grid-cols-8 gap-2"
          style={{ 
            // 10vw on mobile, 6vw on desktop to keep things tight
            gridTemplateRows: 'repeat(7, 12vw)' 
          }}
        >
          {images.map((image, index) => (
            <figure 
              key={index} 
              className={`${getGridStyles(index)} overflow-hidden rounded-sm`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover block transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCatalog;