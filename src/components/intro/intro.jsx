
import "./intro.css"
import Me from "../../img/me.svg"
import Button from "../../img/button.svg"
const Intro = () => {
    return (
        <div className="i">
               <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Owoeye Ayobami</h1>
                    <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Software Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Machine Learner</div>
                        <div className="i-title-item">Tech Enthusiast</div>
                        <div className="i-title-item">Virologist</div>
                    </div>
                    </div>
                    <p className="i-description">
                        I design and develop services for customers of all sizes,
                        specializing in creating stylish, modern websites, web services,
                        and UI/UX services
                    </p>
                </div>
                                
                            
                  <img src={Button} alt="" className="i-scroll" />


               </div> 
                    <div className="i-right">
                        <div className="i-bg"></div>
                        <img src={Me} alt="" className="i-img" />
                    </div> 
        </div>
    )
}

export default Intro
