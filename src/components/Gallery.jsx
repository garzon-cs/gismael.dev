import React, { useContext, useEffect, useRef, useState } from 'react';
import { languageContext } from '../contexts/LanguageContext';

export const Gallery = ({ images = [] }) => {

if(images?.length > 0)
{
  const { Strings } = useContext(languageContext);
  const { gallery } = Strings;

  const [galleryStatusText, setGalleryStatusText] = useState(gallery.show);
  const [height, setHeight] = useState(0);
  const [toggled, setToggled] = useState(false);
  const imagesDiv = useRef();

  const doToggle = () => {
    setToggled(!toggled);
  }

  useEffect( () => {
    if(toggled) {
        setHeight(imagesDiv.current.scrollHeight);
        setGalleryStatusText(gallery.hide);
    }
    else {
        setHeight(0);
        setGalleryStatusText(gallery.show);
    }
  });

  return (
    <div className="flex flex-col cursor-pointer bg-stone-200 dark:bg-gray-800 rounded-3xl mt-3 p-3"
    onClick={() => doToggle()}
    >
        
        <h4 className='text-center font-bold'> {galleryStatusText} </h4>

        <ul className='flex flex-wrap justify-center items-center gap-4 mt-8 transition-all' 
        ref={imagesDiv} 
        style={{
            height: `${height}px`,
            overflow: 'hidden',            
        }}>
        {images.map((src, index) => (
            <li
            key={index}
            className="flex flex-row flex-shrink-0 w-full sm:w-1/2 lg:w-full"
            >
            <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-3xl"
            />
            </li>
        ))}
        </ul>
    </div>
  );
}
};
