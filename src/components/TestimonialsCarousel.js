import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//Avatars imports
import avatar1 from '../images/avatars/avatar-1.png';
import avatar2 from '../images/avatars/avatar-2.png';
import avatar3 from '../images/avatars/avatar-3.png';
import avatar4 from '../images/avatars/avatar-4.png';


const TestimonialsCarousel = ()=>{
    
    return(
        <>
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        >
            <>
            <img src={avatar1} alt="avatar 1 pic" />
            <div className="myCarousel">
            <h3>Client 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum eveniet blanditiis similique aspernatur ut? Vero fugit tenetur asperiores possimus.</p>
            </div>
            </>
            <>
            <img src={avatar2} alt="avatar 2 pic" />
            <div className="myCarousel">
            <h3>Client 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum eveniet blanditiis similique aspernatur ut? Vero fugit tenetur asperiores possimus.</p>
            </div>
            </>
            <>
            <img src={avatar3} alt="avatar 3 pic" />
            <div className="myCarousel">
            <h3>Client 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum eveniet blanditiis similique aspernatur ut? Vero fugit tenetur asperiores possimus.</p>
            </div>
            </>
            <>
            <img src={avatar4} alt="avatar 4 pic" />
            <div className="myCarousel">
            <h3>Client 4</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum eveniet blanditiis similique aspernatur ut? Vero fugit tenetur asperiores possimus.</p>
            </div>
            </>
        </Carousel>
        </>
    )
}

export default TestimonialsCarousel