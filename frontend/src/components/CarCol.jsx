import { useState } from "react";
//car
import CarGrey from "../assets/images/64103b71fcba0016b70755db_car1.png";
import CarRed from "../assets/images/64103b727fd7071a37c69b7c_car2.png";
import CarYellow from "../assets/images/64103b721dac1e4cdbb64060_car3.png";
import CarBlue from "../assets/images/64103b7279db6040bc291300_car4.png";
//color
import ColorGrey from "../assets/images/641134124ccea270dd4ac7e3_circle-grey.png";
import ColorRed from "../assets/images/64113413be2e2e74df213241_circle-red.png";
import ColorYellow from "../assets/images/64113413d47e74f9fa5b93f0_circle-yellow.png";
import ColorBlue from "../assets/images/6411341247f810cdab61e09c_circle-nlue.png";
//inages car color
import TextureGrey from "../assets/images/64103b729aa3990155d0a6dc_banner-car1.png";
import TextureRed from "../assets/images/64103b712823f6004730eb96_banner-car2.png";
import TextureYellow from "../assets/images/64103b727fd70763c8c69b7d_banner-car3.png";
import TextureBlue from "../assets/images/64103b72d8a6c61f491ae296_banner-car4.png";

function CarCol() {

  const [selectedCar, setSelectedCar] = useState(CarGrey);//for car
  const [colorName, setColorName] = useState("Charcoal Pearl");//for names
  const [selectedBg, setSelectedBg] = useState(TextureGrey);//texture



  const colors = [
    { img: ColorGrey, car: CarGrey, name: "Charcoal Pearl", bg: TextureGrey },
    { img: ColorRed, car: CarRed, name: "Racing Red", bg: TextureRed },
    { img: ColorYellow, car: CarYellow, name: "Sun Yellow", bg: TextureYellow },
    { img: ColorBlue, car: CarBlue, name: "Ocean Blue", bg: TextureBlue },
  ];

  return (


    <div className="car-section">

      {/* LEFT SIDE */}
      <div className="car-left">

        <img src={selectedCar} alt="Car" className="car-img" />

        <div className="car-text">
          <p>SPECIAL COLOR</p>
          <h1>{colorName}</h1>
          
        </div>

        <div className="color-options">
          {colors.map((c, i) => (
            <img
              key={i}//unique index
              src={c.img}
              alt={c.name}
              onClick={() => {
                setSelectedCar(c.car);
                setColorName(c.name);
                setSelectedBg(c.bg);
              }}

              
              className={`color-circle ${
                selectedCar === c.car ? "active" : ""
              }`}

              
            />
          ))}
        </div>



      </div>



      {/* RIGHT SIDE */}
      <div className="car-right">
        <img src={selectedBg} alt="Texture" className="bg-img" />
      </div>
    </div>
  );
}

export default CarCol;
