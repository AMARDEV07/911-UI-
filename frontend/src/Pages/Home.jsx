import Angle from "../components/Angle"
import Cadillac from "../components/Cadillac"
import CarCol from "../components/CarCol"
import CarIntro from "../components/CarIntro"
import CarsImagesCollection from "../components/CarsImagesCollection"
import Feature from "../components/Feature"
import Footer from "../components/Footer"
import MainPage from "../components/MainPage"
import Porshe from "../components/Porshe"
import Specification from "../components/Specification"



function Home() {
  return (
    <div>
        <MainPage/>
        <CarIntro/>
        <Porshe/>
        <Cadillac/>
        <Feature/>
        <Specification/>
         <CarCol/>
        <Angle/>
        <CarsImagesCollection/>
        <Footer/>
       
        
       
        
      
    </div>
  )
}

export default Home
