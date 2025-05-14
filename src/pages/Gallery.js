import "./Gallery.css";
import Marquee from 'react-fast-marquee';
import Carousel from '../gallery-element/Carousel';

import live1 from '../images/gallery/live-studio/live1.png';
import live2 from '../images/gallery/live-studio/live2.png';
import live3 from '../images/gallery/live-studio/live3.png';
import live4 from '../images/gallery/live-studio/live4.png';
import live5 from '../images/gallery/live-studio/live5.png';
import live6 from '../images/gallery/live-studio/live6.png';
import live7 from '../images/gallery/live-studio/live7.png';
import live8 from '../images/gallery/live-studio/live8.png';
import live9 from '../images/gallery/live-studio/live9.png';

import content1 from '../images/gallery/content-studio/content1.png';
import content2 from '../images/gallery/content-studio/content2.png';
import content3 from '../images/gallery/content-studio/content3.png';
import content4 from '../images/gallery/content-studio/content4.png';
import content5 from '../images/gallery/content-studio/content5.png';
import content6 from '../images/gallery/content-studio/content6.png';
import content7 from '../images/gallery/content-studio/content7.png';

import warehouse1 from '../images/gallery/warehouse/warehouse1.png';
import warehouse2 from '../images/gallery/warehouse/warehouse2.png';
import warehouse3 from '../images/gallery/warehouse/warehouse3.png';
import warehouse4 from '../images/gallery/warehouse/warehouse4.png';
import warehouse5 from '../images/gallery/warehouse/warehouse5.png';
import warehouse6 from '../images/gallery/warehouse/warehouse6.png';
import warehouse7 from '../images/gallery/warehouse/warehouse7.png';
import warehouse8 from '../images/gallery/warehouse/warehouse8.png';
import warehouse9 from '../images/gallery/warehouse/warehouse9.png';
import warehouse10 from '../images/gallery/warehouse/warehouse10.png';
import warehouse11 from '../images/gallery/warehouse/warehouse11.png';
import warehouse12 from '../images/gallery/warehouse/warehouse12.png';



function Gallery() {
    const liveLists = [live1, live2, live3, live4, live5, live6, live7, live8, live9];
    const contentLists = [content1, content2, content3, content4, content5, content6, content7];
    const warehouseLists = [warehouse1, warehouse2, warehouse3, warehouse4, warehouse5, warehouse6, warehouse7, warehouse8, warehouse9, warehouse10, warehouse11, warehouse12];


    return (
      <div className ="Gallery-container">
        <div className="Content-center Live-studio">
          <div className="Gallery-title">
            <p>Live Studios</p>
          </div>
          {/* <Carousel images={liveList} /> */}
          <div className="Gallery-scroll">
            <Marquee speed={40} direction="left" loop={0}>
              {liveLists.map((liveList, index) => (
              <img key={index} className="Gallery-img" src={liveList} alt={`Live-${index + 1}`} />
            ))}
            </Marquee>           
          </div>
        </div>

        <div className="Content-center Content-studio">
          <div className="Gallery-title">
            <p>Content Studios</p>
          </div>
          <div className="Gallery-scroll">
            <Marquee speed={40} direction="right" loop={0}>
              {contentLists.map((contentList, index) => (
              <img key={index} className="Gallery-img" src={contentList} alt={`Content-${index + 1}`} />
            ))}
            </Marquee>           
          </div>
        </div>

        <div className="Content-center Warehouse">
          <div className="Gallery-title">
            <p>Warehouse Fulfillment</p>
          </div>
          <div className="Gallery-scroll">
            <Marquee speed={40} direction="left" loop={0}>
              {warehouseLists.map((warehouseList, index) => (
              <img key={index} className="Gallery-img" src={warehouseList} alt={`Warehouse-${index + 1}`} />
            ))}
            </Marquee>           
          </div>
        </div>
      </div>
    );
  }
  
export default Gallery;