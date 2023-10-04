import React, { useState, useEffect } from 'react';
// GLIDE
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";
// IMG'S
import img_0 from "../assets/destination/image-kepler-186f.png";
import img_1 from "../assets/destination/image-TRAPPIST-1e.png";
import img_2 from "../assets/destination/image-gliese 581d.png";
import img_3 from "../assets/destination/image-TRAPPIST-1g.png";
// ICON
import Loading from "../assets/shared/loading.png";

export default function destination({ data }) {
    const [destination, setDestination] = useState(null)
    let glide;
    useEffect(() => {
      setData();
      glide = new Glide(".glide", {
          perView: 1,
          type: "carousel"
      });
    }, []);
    const setData = async () => {
      data
      .then((res) => setDestination(res.destinations))
      .then(() => glide.mount());
    };
    const imgIndex = (index) => {
      switch (index) {
        case 0:
          return img_0;
        case 1:
          return img_1;
        case 2:
          return img_2;
        case 3:
          return img_3;
        default:
          console.log("error loading images");
          break;
      }
    };
  return (
    <div className="destination wrapper">
      {
        destination ? 
        
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {
                  destination.map((item, index) => (
                    <li className="glide__slide" key={index}>
                      <div className="content destin">
                        <div className="title-img">
                          <h1>
                            <span> 0 1</span> P I C K &nbsp;&nbsp;&nbsp; Y O U R 
                            &nbsp;&nbsp;&nbsp; D E S T I N A T I O N
                          </h1>
                          <img src={imgIndex(index)} alt={item.name} />
                        </div>
                        <div className="wrapper-slider">
                          <div
                            className="header-slider"
                            data-glide-el="controls[nav]"
                          >
                            <button data-glide-dir="=0">K E P L E R - 1 8 6 F</button>
                            <button data-glide-dir="=1">T R A P P I S T - 1 E</button>
                            <button data-glide-dir="=2">G L I E S E  5 8 1 D</button>
                            <button data-glide-dir="=3">T R A P P I S T - 1 G</button>
                          </div>
                          <div className="slider">
                              <div className="content-slider">
                                <h1>{item.name.toUpperCase()}</h1>
                                <p>{item.description}</p>
                                <hr />
                                <div className="info-slider">
                                  <div className="info-box">
                                    <h2>AVG. DISTANCE</h2>
                                    <span> {item.distance.toUpperCase()} </span>
                                  </div>
                                  <div className="info-box">
                                    <h2>EST. TRAVEL TIME</h2>
                                    <span>{item.travel.toUpperCase()}</span>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
          </div>
        </div>
        
        : 
        <span className="loading">
        <img src={Loading} alt="" />
        </span>
      }
    </div>
  );
}

