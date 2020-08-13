import React, {useState} from 'react';
import CarouselImg_1 from '../../assets/img_for_carousel_1.jpg'
import CarouselImg_2 from '../../assets/img_for_carousel_2.jpg'
import CarouselImg_3 from '../../assets/img_for_carousel_3.jpg'
import Carousel from "react-bootstrap/Carousel";
import './ControlledCarousel.scss'

const CN = 'controlled-carousel';
export const ControlledCarousel = (props) => {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

    return (
       <div className={`${CN}  container `}>
           <div className='carousel_header_text pt-5 pb-3'>
               <h2>
                   Some Great Titles
               </h2>
           </div>
           <Carousel className='mb-4' activeIndex={index} onSelect={handleSelect}>
               <Carousel.Item>
                   <img
                       className="d-block w-100 "
                       src={CarouselImg_1}
                       alt="First slide"
                   />
                   <Carousel.Caption>
                       <h3>Greyhound</h3>
                       <p>A first-time captain leads a convoy of allied ships carrying thousands of soldiers across the treacherous waters of the “Black Pit” to the front lines of WW2.
                           With no air cover protection for 5 days, the captain and his convoy must battle the surrounding enemy Nazi U-boats in order to give the allies a chance to win the war.</p>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img
                       className="d-block w-100"
                       src={CarouselImg_2}
                       alt="Second slide"
                   />

                   <Carousel.Caption>
                       <h3>Star Wars: The Rise of Skywalker</h3>
                       <p>The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues.
                           With the power and knowledge of generations behind them, the final battle begins.</p>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img
                       className="d-block w-100"
                       src={CarouselImg_3}
                       alt="Third slide"
                   />
                   <Carousel.Caption>
                       <h3>Inception</h3>
                       <p>
                           Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\",
                           the implantation of another person's idea into a target's subconscious.
                       </p>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
       </div>
    );
};
