import React from 'react'

// The 'Title' component takes two pieces of text (text1 and text2) as input (called props),
// and it displays them with a horizontal line beneath the title.
const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      {/* 
        - The first part of the title (like 'LATEST') is displayed here.
        - 'text-gray-500' sets the text color to gray.
      */}
      <p className='font-semibold'>{text1}</p> 

      {/* 
        - The second part of the title (like 'SUPPLIES') is displayed here, inside a span with bold text style.
        - 'text-gray-700' makes the text slightly darker and 'font-medium' makes it bold.
      */}
      <p className='font-semibold'>{text2}</p>

      {/* 
        - This 'p' element is a horizontal line that appears under the title.
        - 'w-8 sm:w-12' sets the width of the line.
        - 'h-[1px] sm:h-[2px]' sets the height of the line (1px for smaller screens, 2px for larger ones).
        - 'bg-gray-700' sets the line's color to dark gray.
      */}
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  );
}

export default Title;





