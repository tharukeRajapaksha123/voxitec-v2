import React, { useMemo, useState } from 'react'
import Title from '../../Widgets/Title/Title'
import "./Contact.css"
import usa from '../../assets/usa 1.svg'
import client_image from '../../assets/Client Photo.svg'
import sri_lanka from '../../assets/Ellipse 64.svg'
import { AiOutlinePaperClip, AiTwotoneMail } from 'react-icons/ai';
import { AiFillSkype } from 'react-icons/ai';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Clock from '../../Widgets/Clock/Clock'





function Contact({ theme }) {
  const [value, setValue] = useState()


  return (
    <div className='contact-body' style={{ backgroundColor: !theme ? "white" : "#121212", color: theme ? "white" : "#121212" }}>
      <Title title="Contact" />
      <div className="contact-body-container" >
        <div className='contact-body-left'>
          <h3>LET'S TALK</h3>
          <h2>Speak With Expert<br />Engineers</h2>
          <div className='contact-row'>
            <div className='contact-card'>
              <img src={usa} alt="usa" />
              <p className='contact-details-text'>
                Call : <br />
                +1 (561) 859-9999
              </p>
            </div>
            <div className='contact-card'>
              <img src={sri_lanka} alt="usa" />
              <p className='contact-details-text'>
                Call : <br />
                +94 71 427 3930
              </p>
            </div>
          </div>
          <div className='contact-row'>
            <div className='contact-card'>
              <div className="contact-icon-wrapper">
                <AiTwotoneMail color='black' fontSize={25} />
              </div>
              <p className='contact-details-text'>
                Email : <br />
                info@voxitec.com
              </p>
            </div>
            <div className='contact-card'>
              <div className="contact-icon-wrapper">
                <AiFillSkype color='black' fontSize={25} />
              </div>
              <p className='contact-details-text'>
                Skype : <br />
                +94 760 8888
              </p>
            </div>
          </div>
          <div className='bottom-contact-box'>
            <div className='contact-description-container'>
              <p>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. </p>
              <h4>Scarlett Johnsonn</h4>
              <h5>CEO Xion</h5>
            </div>
            <img src={client_image} alt="client" />
          </div>
        </div>
        <div className='contact-body-right'>
          <form action="" >
            <div className="input-container" style={{ color: theme ? "white" : "#121212",borderBottom:theme ? "1px solid rgba(255, 255, 255, 0.651)": "1px solid black"}}>
              <label for="fname">Full Name</label>
              <input type="text" name="fname" id="fname" required />
            </div>
            <div className="input-container" style={{ color: theme ? "white" : "#121212",borderBottom:theme ? "1px solid rgba(255, 255, 255, 0.651)": "1px solid black"}}>
              <label for="email">Email</label>
              <input type="text" name="fname" id="email" required />
            </div>
            <div className="input-container" style={{ color: theme ? "white" : "#121212",borderBottom:theme ? "1px solid rgba(255, 255, 255, 0.651)": "1px solid black"}}>
              <label for="email">Phone</label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                required
              />
            </div>
            <div className="input-container" style={{ color: theme ? "white" : "#121212",borderBottom:theme ? "1px solid rgba(255, 255, 255, 0.651)": "1px solid black"}}>
              <label>Select a Service</label>
              <select required>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
            <div className='input-container' style={{ color: theme ? "white" : "#121212",borderBottom:theme ? "1px solid rgba(255, 255, 255, 0.651)": "1px solid black"}}>
              <label for="dis">Describe your project in short</label>
              <textarea name="textarea" id="dis" cols="10" rows="5" required />
            </div>

            <div>
              <AiOutlinePaperClip />
              <span>Attach File</span>
              {/* <input type="file" /> */}
            </div>
            <div className="button-div">
              <input type="submit" value="Let’s Discuss Your Project" name="submit" className="submit-button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact