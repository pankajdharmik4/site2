import React from "react";

export default function Bar() {
  const handleClick = () => {
    alert("Desktop image clicked!");
  };

  return (
    <>
      {/* Main row section */}
      <div className="rounded-lg lg:p-16 lg:mx-16 md:m-8 md:p-8 mx-8 p-4">
        
        {/* Desktop rectangle poster (shown on medium screens and up) */}
        <div
          className="hidden md:block cursor-pointer"
          onClick={handleClick}
        >
          <img 
            src="images/banner1.png" 
            alt="Desktop Poster" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Mobile square poster (shown on small screens only) */}
        <div className="block md:hidden"
        onClick={handleClick}
        >
          <img 
            src="images/banner2.png" 
            alt="Mobile Poster" 
            className="w-full h-auto rounded-lg object-cover mx-auto my-4"
          />
        </div>

      </div>
    </>
  );
}
