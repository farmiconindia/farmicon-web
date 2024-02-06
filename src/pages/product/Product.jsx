import React from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import DroneHero from "../../assets/DroneHero.png";
import DroneGif from "../../assets/drone_cb.gif";  //opening drone
// const VIDEO_PATH = "https://c.effort-tech.com/yft/web/video_en/E616.mp4"; //closing drone
import "./product.scss";

const Product = ({ changelang }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <div className="product">
        <section className="sec-1">
          <h1>Agricultural Drone</h1>
          <p>
            Introducing our game-changing Agricultural Spray Drone – a
            revolution in farming. This high-tech drone offers precision and
            efficiency like never before. Imagine a future where precision meets
            efficiency, where every drop of pesticide or fertilizer is applied
            with pinpoint accuracy. It swiftly covers large areas, reducing
            labor costs while ensuring precise pesticide and fertilizer
            application. The Agricultural Spray Drone is not just a product;
            it's a partner in your farm's success story. Join the agricultural
            revolution today and experience the future of farming firsthand.
          </p>
          <div className="video">
{/*             <ReactPlayer
              url={DroneVid}
              loop={true}
              playing={true}
              volume={0}
            /> */}
              <img src={DroneGif} 
            loop={true}
            playing={true}
            volume={0}
            alt="Drone GIF"
            style={{ width: '600px', height: '300px' }} />
          </div>
          <p>
            Welcome to the future of agriculture with our state-of-the-art
            10-liter Agricultural Spray Drone! Our mission is simple: to empower
            farmers with cutting-edge technology that maximizes efficiency,
            minimizes labor, and delivers superior crop care. Here's a
            comprehensive look at why our drone is the game-changer your farm
            needs:
          </p>
        </section>
        <section className="sec-2">
          <h1>Overview</h1>
          <p>
            Our 10-liter Agricultural Spray Drone is designed to revolutionize
            the way you manage your crops. It boasts a sleek, robust build,
            engineered to withstand the rigors of farm life while delivering
            unmatched performance. Its powerful 10-liter tank ensures extensive
            coverage, reducing the need for constant refills and optimizing your
            spraying operation.
          </p>
          <p>
            Discover the future of farming with our 10-liter Agricultural Spray
            Drone. It's not just a tool; it's a catalyst for success on your
            farm. Join the agricultural revolution today and watch your crops
            thrive like never before. Trust in innovation, trust in us, and
            elevate your farming game to new heights.
          </p>
          <div className="keyfeat">
            <h2>Key Features</h2>
            <p>
              <em>Precision Spraying:</em> Utilizing advanced GPS technology,
              our drone ensures precise and efficient spraying, reducing waste
              and maximizing the effectiveness of each application.
            </p>
            <p>
              <em>Speed and Coverage:</em> With impressive speed and the ability
              to cover large areas quickly, our drone streamlines your spraying
              process, not only saving time but also labor costs.
            </p>
            <p>
              <em>Built to Last:</em> Our drone is built tough, capable of
              withstanding the demanding conditions of farming, ensuring it
              remains a reliable partner season after season.
            </p>
          </div>
        </section>
        <section className="sec-3">
          <h1>Specifications</h1>
          <div className="container">
            <div className="left">
              <ul>
                <li>Structure: HexaCopter</li>
                <li>Spray Tank: 10 L</li>
                <li>Take-off Weight: 24.5 kg</li>
                <li>Spray Flow: 3-4 L/min</li>
                <li>Spray Nozzle: 4</li>
                <li>Flying Range: up to 500 m</li>
                <li>Flight Time: Up to 20 mins</li>
                <li>
                  Spraying Capacity: Up to 5 acres/hour, 25 acres/day with
                  multiple battery sets
                </li>
                <li>
                  Return to Launch (RTL): Empty Tank, Battery drained, mission
                  complete
                </li>
                <li>Video streaming: Yes</li>
              </ul>
            </div>
            <div className="right">
                <img src={DroneHero} className="image"/>
            </div>
          </div>
          <button>Buy Now</button>  
        </section>
      </div>
    </>
  );
};

export default Product;
