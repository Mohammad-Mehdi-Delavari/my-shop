import { Carousel, Image } from "react-bootstrap";
import { carouselInfos } from "../../utils";
import { Link } from "react-router-dom";

export default function HomeCarousel() {
  return (
    <Carousel   fade>
      {carouselInfos.map((val) => {
        return (
          <Carousel.Item key={val.id} className="position-relative">
            <div
              className="z-n1 "
              style={{
                backgroundColor: val.bg,
                width: "100%",
                height: "25rem",
              }}
            >
              <Image className="w-75  z-n1 h-100" src={val.img} />
            </div>

            <div className="position-absolute " style={{left:"20%",top:"35%"}}>
              <p className="text-white m-0">{val.countType}</p>
              <h3 className="text-white mb-4">{val.title}</h3>
              <Link className="btn btn-light">همین حالا بخرید</Link>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
