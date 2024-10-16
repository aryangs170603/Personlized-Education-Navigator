import React, { useState } from 'react'
import Options from './Components/Options';
import ImgBanner from './Components/ImgBanner';
import Comfort from './Components/Comfort';
import Loader from './Components/Loader';
import LearningPaths from './Components/LearningPaths';
import { data } from './data.json';
import { MdKeyboardArrowLeft } from "react-icons/md";

function App() {
  /* Next Slide functionality with increasing loader line when button clicked */
  const nextSlide = () => {
    setCount(prevCount => {
      prevCount = prevCount + 1;
      if (prevCount === 5) {
        setTimeout(() => {
          setCount(6);
        }, 11000);
      }
      setLineWidth(prevWidth => {
        if (prevCount == 1 || prevCount == 2) {
          prevWidth = prevWidth + 10;
        }
        else if (prevCount == 3) {
          prevWidth = prevWidth + 30;
        }
        else {
          prevWidth = prevWidth + 40;
        }
        return prevWidth;
      })
      return prevCount;
    });
  };

  /* Previous Slide functionality with decreasing loader line when previous arrow clicked */
  const prevSlide = () => {
    setCount(prevCount => {
      prevCount = prevCount - 1;
      setLineWidth(prevWidth => {
        if (prevCount == 3) {
          prevWidth = prevWidth - 40;
        }
        else if (prevCount == 2) {
          prevWidth = prevWidth - 30;
        }
        else {
          prevWidth = prevWidth - 10;
        }
        return prevWidth;
      })
      return prevCount;
    });
  };

  let [count, setCount] = useState(0); // To handle the different components
  let [lineWidth, setLineWidth] = useState(10); // To handle width of loader line

  /* Passing different components in array with different data of JSON & nextSlide function */
  const [slide, setSlide] = useState([
    <Options data={data.describe} nextSlide={nextSlide} />,
    <Options data={data.interest} nextSlide={nextSlide} />,
    <ImgBanner data={data.place} nextSlide={nextSlide} />,
    <Comfort data={data.comfort} nextSlide={nextSlide} />,
    <ImgBanner data={data.way} nextSlide={nextSlide} />,
    <Loader />,
    <LearningPaths data={data.paths} />
  ]);

  return (
    <>
      {/* Displaying the loader line & previousSlide arrow according to the specific conditions */}
      {count < 5 &&
        <div className='loader-line flex items-center' style={{ '--before-width': `${lineWidth}%` }}>
          {count > 0 && count < 5 &&
            <span className='left-[-30px] cursor-pointer absolute'>
              <MdKeyboardArrowLeft onClick={prevSlide} fontSize={30} />
            </span>}
        </div>
      }
      <div className='mt-12'>
        {/* Rendering the component as per count value */}
        {slide[count]}
      </div>
    </>
  )
}

export default App