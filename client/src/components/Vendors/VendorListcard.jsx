import React from 'react'
import img12 from '/src/images/8_1.png';

function VendorListCard() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

    <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

        <a href="#">
            <img className="w-full" src={img12} alt="Sunset in the mountains" />
        </a>
        <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
            <a href="#"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                    Photographers
                </a>
            <p className="text-gray-500 text-sm">
            Capture the magic of every moment with our talented wedding photographers, skilled in creating timeless memories. From candid emotions to beautifully staged shots, our photographers bring an artistic eye and passion for storytelling to your special day. 
            </p>
            
        </div>

    </div>

</div>
  )
}

export default VendorListCard;