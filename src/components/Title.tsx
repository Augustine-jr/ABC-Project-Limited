interface TitleProps {
  text1: string;
  text2: string;
}

const Title: React.FC<TitleProps> = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='font-semibold text-gray-700'>{text1}</p> 
      <p className='font-semibold text-gray-700'>{text2}</p>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  );
}

export default Title;





