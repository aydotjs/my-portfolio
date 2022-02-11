import "./about.css"
import Coding from '../../img/coding.svg'
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?cs=srgb&dl=pexels-pixabay-270404.jpg&fm=jpg" alt="" className="a-img" />
                </div> 
            </div>

            <div className="a-right">
                <h1 className="title">About me</h1>
                <p className="a-sub">
                    Hi! I am Ayo, a web designer/developer focused
                    on crafting great web experiences. 
                </p>
                <p className="a-description">
                I don’t like to define myself by the work
                 I’ve done. I define myself by the work I
                  want to do. Skills can be taught,
                   personality is inherent. I prefer to keep
                learning, continue challenging myself,
                and do interesting things that matter.
                </p>
                <div className="a-award">
                    <img src={Coding} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Watch Word</h4>
                        <p className="a-award desc">
                        The best time to plant a tree was 25 years ago.
                         The second best time is now.
                        </p>
                        <p> <i>- Chinese Proverb.</i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
