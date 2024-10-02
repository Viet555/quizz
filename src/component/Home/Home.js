import videoHome from "../../asset/video/videoheader.webm";
import "../../App.scss"
import { NavLink } from "react-router-dom";
const Home = () => {
    return (

        <>
            <div className="Homepage-container">
                <div className="homepage-content">
                    <div className="title-one">“We need to know that we're building the right things for real problems.”</div>
                    <div className="title-two" >Chase Clark, Senior UX Researcher at Calm, explains why they switched to Typeform.</div>
                    <button className="title-three"> <NavLink to="/Admin" className="nav-link">Read on </NavLink> </button>
                </div>
                <div className="video-homepage">
                    <video autoPlay muted loop >
                        <source src={videoHome}
                            type="video/webm" />
                    </video>
                </div>
            </div>
        </>

    )
}
export default Home;