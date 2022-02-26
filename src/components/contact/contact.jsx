import "./contact.css"
import Phone from "../../img/Phoneme.svg"
import Email from "../../img/mail.svg"
import Address from "../../img/Locationme.svg"
import { useRef, useState, useContext } from "react"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context"

const Contact = () => {
const formRef = useRef()
const [done, setDone] = useState(false)
const theme = useContext(ThemeContext)
const darkMode = theme.state.darkMode
const handleSubmit = (e)=>{
    e.preventDefault()
    
    emailjs.sendForm('service_3pqoe18', 
    'template_gdzt0cd', 
    formRef.current,
    "user_gqdmjQIcuBa4p73Yil0LZ")

      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
}
    return (
        <div className="c">
          <div className="c-bg"></div>
          <div className="c-wrapper">
              <div className="c-left">
                  <h1 className="c-title">Let's discuss Your Project</h1>
                  <div className="c-info">
                      <div className="c-info-item">
                          <img src={Phone} alt="" className="c-icon" />
                          <a style={{backgroundColor:darkMode ? "#222" : "white",color:darkMode ? "white" : "black"}} href="tel:+2349036435534">+234 90 364 355 34</a>
                      </div>
                      <div className="c-info-item">
                          <img src={Email} alt="" className="c-icon" />
                          <a style={{backgroundColor:darkMode ? "#222" : "white",color:darkMode ? "white" : "black"}} href = "mailto: ayobamiseyiowoeye@gmail.com">ayobamiseyiowoeye@gmail.com</a>
                      </div>
                      <div className="c-info-item">
                          <img src={Address} alt="" className="c-icon" />
                          Komolafe House, Ikolaba Estate, Ibadan, Oyo State, Nigeria
                      </div>
                  </div>
              </div>
              <div className="c-right">
                  <p className="c-desc">
                      <b>What's your story?</b> Get in touch. ALways available for 
                      freelancing if the right project comes along.
                  </p>
                  <form ref={formRef} onSubmit={handleSubmit}>
                      <input style={{backgroundColor:darkMode ? "#222" : "white",color:darkMode ? "white" : "black"}} type="text" placeholder="Name" name="user_name"/>
                      <input style={{backgroundColor:darkMode ? "#222" : "white",color:darkMode ? "white" : "black"}} type="text" placeholder="Subject" name="user_subject"/>
                      <input style={{backgroundColor:darkMode ? "#222" : "white",color:darkMode ? "white" : "black"}} type="text" placeholder="Your Email Address" name="user_email"/>
                      <textarea style={{backgroundColor:darkMode ? "#222" : "white",color:darkMode ? "white" : "black"}} rows="4" placeholder= " Type your message here" name="message"/>
                      <button>Submit</button>
                      {done && <p className="successfulmsg">Thank you for contacting me, will reply as soon as I can</p>}
                  </form>
                  
              </div>
          </div>
        </div>
    )
}

export default Contact
