import './MapsGallery.css'
import bg from "../../images/Backgrounds/bg2-3.webp";
import ImageGallery from "react-image-gallery";
import {useState} from "react";

function MapsGallery() {

  const [map, setMap] = useState('');

  const maps = [{key: 'Scorch', name: 'Опалённое Ущелье (Scorch Gorge)'},
    {key: 'Eeltail', name: 'Угрёво-Скатово (Eeltail Alley)'},
    {key: 'Hagglefish', name: 'Рынок «Свисторыб» (Hagglefish Market)'},
    {key: 'Undertow', name: 'Приливослив (Undertow Spillway)'},
    {key: 'Mincemeat', name: 'Цех «Тартар» (Mincemeat Metalworks)'},
    {key: 'Hammerhead', name: 'Акулий Мост (Hammerhead Bridge)'},
    {key: 'Museum', name: 'Галерея «Де Берикс» (Museum d_Alfonsino)'},
    {key: 'Eeltail', name: 'Угрёво-Скатово (Eeltail Alley)'},
    {key: 'Mahi-Mahi', name: 'Спа-курорт «Золотая рыбка» (Mahi-Mahi Resort)'},
    {key: 'Inkblot', name: 'Академия «Лепота» (Inkblot Art Academy)'},
    {key: 'Shipyard', name: 'Осетровые Верфи (Sturgeon Shipyard)'},
    {key: 'MakoMart', name: 'Горбуша Маркет (MakoMart)'},
    {key: 'Wahoo', name: 'Луно-парк «Язь» (Wahoo World)'},
    {key: 'Brinewater', name: 'Тухловодск (Brinewater Springs)'},
    {key: 'Flounder', name: 'Микрорайон «Камбалово» (Flounder Heights)'},
  ];

  console.log('map', map);
  const filteredMaps = map === '' ? maps : maps.filter(item => item.name.toLowerCase().includes(map.toLowerCase()));

  return(
      <div className="anim-bg-block" style={{ width: '100%', backgroundImage: `url(${bg})` }}>
        <h2>Our callouts for maps. Work in progress!</h2>
        <h4>Created by yaga, based on our and other people knowledge</h4>
        <hr className="section-divider" />
        <input value={map} name="mapName"  onChange={e => setMap(e.target.value)} />
        {filteredMaps.map(item => (
          <div className="gallery-wrapper" key={item.key}>
            <h2>{item.name}</h2>
            <ImageGallery items={generateImageGallery(item.key)} />
          </div>))
        }
      </div>
  );
}

function generateImageGallery(map: string) {
  const base = process.env.PUBLIC_URL;
  const zones = '/Modes/zones.png';
  const tower = '/Modes/tower.png';
  const rainmaker = '/Modes/rainmaker.png';
  const clam = '/Modes/clam.png';
  const turf = '/Modes/turf.png';

  return [
    {
      original:base + `/Maps/${map}/Зоны.png`,
      thumbnail: base + zones,
    },
    {
      original: base + `/Maps/${map}/Башни.png`,
      thumbnail: base + tower,
    },
    {
      original: base + `/Maps/${map}/Рейн.png`,
      thumbnail: base + rainmaker,
    },
    {
      original: base + `/Maps/${map}/Клемы.png`,
      thumbnail: base + clam,
    },
    {
      original: base + `/Maps/${map}/Терфы.png`,
      thumbnail: base + turf,
    },
  ];
}

export default MapsGallery;