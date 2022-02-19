import Home from "./Components/Home/Home";
import {useState} from 'react'
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import Process from "./Components/Process/Process";
import Services from "./Components/Services/Services";
import Technologies from "./Components/Technologies/Technologies";
import IndustriesWeServe from "./Components/IndustriesWeServe/IndustriesWeServe";
import OurWorks from "./Components/OurWorks/OurWorks";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Clock from "./Widgets/Clock/Clock";
import MapContainer from "./Components/map/map";
import Footer from "./Components/footer/footer";
function App() {
  const [dark,activeDark] = useState(true)
  const changeTheme = (theme)=>{
    activeDark(theme)
  }
  return (
      <>
        <Home theme={dark} changeTheme={changeTheme}/>
        <WhoWeAre theme={dark}/>
        <Process theme={dark}/>
        <Services theme={dark}/>
        <Technologies theme={dark}/>
        <IndustriesWeServe theme={dark} />
        <OurWorks theme={dark} />
        <Blog theme={dark} />
        <Contact theme={dark} />
        <MapContainer theme={dark} />
        <Footer theme={dark} />
        {/* <Clock/> */}
      </>
  );
}

export default App;
