import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5qrng2QTx2RrTh77a4qQta91cQp-vynELQ&s"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/jpeg;base64,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"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?semt=ais_hybrid"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;