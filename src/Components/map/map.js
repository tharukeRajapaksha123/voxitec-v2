import './map.css';
import Clock from "../../Widgets/Clock/Clock";
import Images from "../../constants/images";
import { AiOutlineArrowRight } from 'react-icons/ai';
const MapContainer = ({ theme }) => {
    return (
        <div style={{ backgroundColor: !theme ? "white" : "#121212", color: theme ? "white" : "#121212" }}>
            <div className="map-container">
                <div className="clock-container-map">
                    <div className="clock-div">
                        <Clock />
                        <div className='flag'>
                            <img src={Images.Usa} alt="Usa" />
                            <span className="contryname">USA</span>
                        </div>
                        <div className="clock-div">
                            <span>624 NW 13th St,Boca Roton</span>
                            <span>FL 33486</span>
                            <span>USA</span>

                        </div>
                    </div>
                    <div className="clock-div">
                        <Clock />
                        <div className='flag'>
                            <img src={Images.Srilanka} alt="srilanka" />
                            <span className="contryname">Sri Lanka</span>
                        </div>
                        <div className="clock-div">
                            <span>No 44/9 Anguruwatora,Rd</span>
                            <span>Horana,</span>
                            <span>Sri Lanka </span>
                        </div>

                    </div>
                    <div className="clock-div">
                        <Clock />
                        <div className='flag'>
                            <img src={Images.Aus} alt="australia" />
                            <span className="contryname">Australia</span>
                        </div>
                        <div className="clock-div">
                            <span>2417 Charoe St,Lewis Center</span>
                            <span>OH 43035</span>
                            <span>USA</span>
                        </div>
                    </div>

                </div>

                <div className="about-container">
                    <div className="col">
                        <img src={Images.logo} alt="logo" />
                        <p>Voxitec is the best choice for
                            innovative, effective technological
                            solutions with quality assured.
                            </p>
                        <img src={Images.protect} alt="logo" style={{height:'30px',maxWidth:'140px'}} />
                    </div>
                    <div className="col">
                        <h3>Company</h3>
                        <div className="links">
                            <ul>
                                <li>
                                    <AiOutlineArrowRight/>
                                    <span>About</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight/>
                                    <span>Services</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight/>
                                    <span>Technologies</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight/>
                                    <span>Contact with Us</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <h3>Services</h3>
                        <div className="links">
                            <ul>
                                <li>
                                    <AiOutlineArrowRight/>
                                    <span>Web Development</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight/>
                                    <span>App Development</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight/>
                                    <span>UI/UX Development</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight/>
                                    <span>DevOps</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="col">
                        <h3>Updates</h3>
                        <div className="links">
                            <ul>
                                <li>
                                    <AiOutlineArrowRight/>
                                    <span>Blog</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight/>
                                    <span>News</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight/>
                                    <span>Careers</span>
                                </li>
                                <li>
                                    <AiOutlineArrowRight/>
                                    <span>Events</span>
                                </li>
                            </ul>

                        </div>
                    </div>


                </div>


            </div>

        </div>
    );
}

export default MapContainer;