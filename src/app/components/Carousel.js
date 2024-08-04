import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { RxDotFilled, RxDot } from 'react-icons/rx';


const Carousel = ({events, currentIndex, setCurrentIndex}) => {

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? events.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === events.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='relative p-0 h-full w-1/2 flex flex-col justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${events[currentIndex].img})` }}
        className='flex flex-col justify-center items-center w-full h-full bg-center bg-cover duration-500'
      >
        <p className='text-7xl'>{events[currentIndex].name}</p>
        <p className='text-7xl'>{events[currentIndex].date}</p>
        <p className="text-3xl mt-4">@{events[currentIndex].place}</p>
        <p className="flex">
            <a href="" className="btn">FB Event</a>
            <a href="" className="btn">Buy Ticket</a>
        </p>
        {
            events.length > 0 &&
            <div className='flex justify-around items-center w-full py-2'>
                {/* Left Arrow */}
            <div className='text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <FaAngleLeft onClick={prevSlide} size={30} />
            </div>
            {/* Dots */}
            <div className='flex'>
                {events.map((_, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-5xl cursor-pointer text-white'
                >
                    {slideIndex === currentIndex ? <RxDotFilled /> : <RxDot />}
                </div>
                ))}
                </div>
                {/* Right Arrow */}
            <div className='text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <FaAngleRight onClick={nextSlide} size={30} />
            </div>
            </div>
        }
        <a href="" className="flex justify-between items-center p-4 bg-black text-white absolute bottom-0 w-full text-5xl">
          <span>All upcoming events</span>
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
}

export default Carousel;
