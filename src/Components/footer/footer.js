import images from '../../constants/images';
import './footer.css';
const Footer = ({ theme }) => {
    return ( 
        <div className="foot" style={{ backgroundColor: !theme ? "white" : "#121212", color: theme ? "white" : "#121212" }}>
            <div className="page-footer" style={{ color: theme ? "white" : "#121212",borderTop:theme ? "1px solid rgba(255, 255, 255, 0.651)": "1px solid black"}}>
                <div className="footer-items" >
                    <span><a href="#">Privacy Policy</a></span>
                    <span>|</span>
                    <span><a href="#">Terms</a></span>
                    <span>|</span>
                    <span><a href="#">Site Map</a></span>
                    
                </div>
                <div className="footer-items">
                    <span>Copyright © 2021 Voxitec. All Rights Reserved.</span>
                </div>

                <div className="footer-items logos">
                    <a href="#"><img src={images.Facebook} alt="fb"/></a>
                    <a href="#"><img src={images.Twitter} alt="tw"/></a>
                    <a href="#"><img src={images.LinkedIn} alt="linked"/></a>
                    <a href="#"><img src={images.Instergram} alt="insta"/></a>
                    <a href="#"><img src={images.Youtube} alt="yt"/></a>
                    <a href="#"><img src={images.Dribble} alt="dribble"/></a>
                    <a href="#"><img src={images.Medium} alt="medium"/></a>
                </div>

            </div>
        </div>
     );
}
 
export default Footer;