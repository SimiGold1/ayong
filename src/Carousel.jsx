import Carousel from 'react-bootstrap/Carousel';
import './App.css'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="/us.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="quam.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="/babe.jpg"  
          alt="Third slide"
        />
      </Carousel.Item>
       <Carousel.Item>
       <img
         className="d-block w-50"
         src="/bae.jpg"  
         alt="Third slide"
       />
     </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-50"
        src="/bonnet.jpg"  
        alt="Third slide"
      />
    </Carousel.Item>
     <Carousel.Item>
     <img
       className="d-block w-50"
       src="/king.jpg"  
       alt="Third slide"
     />
   </Carousel.Item>
   <Carousel.Item>
        <img
          className="d-block w-50"
          src="/simz.jpg"  
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;