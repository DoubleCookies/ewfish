import './MapsGallery.css'
import bg from "../../images/Backgrounds/bg2-3.webp";
import ImageGallery from "react-image-gallery";

function MapsGallery() {

  const scorch = [
    {
      original: process.env.PUBLIC_URL + '/Maps/Scorch/Зоны.png',
      thumbnail: process.env.PUBLIC_URL + '/Modes/zones.png',
    },
    {
      original: process.env.PUBLIC_URL + '/Maps/Scorch/Башни.png',
      thumbnail: process.env.PUBLIC_URL + '/Modes/tower.png',
    },
    {
      original: process.env.PUBLIC_URL + '/Maps/Scorch/Рейн.png',
      thumbnail: process.env.PUBLIC_URL + '/Modes/rainmaker.png',
    },
    {
      original: process.env.PUBLIC_URL + '/Maps/Scorch/Клемы.png',
      thumbnail: process.env.PUBLIC_URL + '/Modes/clam.png',
    },
    {
      original: process.env.PUBLIC_URL + '/Maps/Scorch/Терфы.png',
      thumbnail: process.env.PUBLIC_URL + '/Modes/turf.png',
    },
  ];

  return(
      <div className="anim-bg-block" style={{ width: '100%', backgroundImage: `url(${bg})` }}>
        <h2>Our callouts for maps! Work in progress!</h2>
        <h4>Created by yaga, based on our and other people knowledge</h4>
        <hr/>
        <h3>Scorch Gorge</h3>
        <div className="gallery-wrapper">
          <ImageGallery items={scorch} />
        </div>

      </div>
  );
}

export default MapsGallery;