import React from 'react'
import "./Mentors.css"
import mentorHeader from '../s22_images/mentorHeader.svg'
import joyce from '../s22_images/joyce.png'
import joyceOverlay from '../s22_images/joyce-overlay.svg'
import eve from '../s22_images/eve.png'
import eveOverlay from '../s22_images/eve-overlay.svg'
import rock from '../s22_images/rock.png'
import rockOverlay from '../s22_images/rockOverlay.svg' 

const Mentors = () => {
    return (
        <div className="mentors">
            <img src={mentorHeader} className='mentor-header'></img>
            <div className="details">
                <p className="mentor-p-desc">Our mentors are here to support you and answer any questions you may have about your project, breaking into design, landing internships, career advice, and much more.</p>
            </div>
            <div className='mentors-card-container'>
                <div className='mentor-card'>
                    <div className='images-container'>
                        <img src={joyce} className='headshot-img'/>
                        <img src={joyceOverlay} className='company-img'/>
                    </div>
                    <p className='mentor-bold'>Joyce Tsui</p>
                    <p className='mentor-p'>UI/UX Designer @ Environmental Non-profit</p>
                </div>
                <div className='mentor-card'>
                    <div className='images-container'>
                        <img src={eve} className='headshot-img'/>
                        <img src={eveOverlay} className='company-img'/>
                    </div>
                    <p className='mentor-bold'>Eve Huang</p>
                    <p className='mentor-p'>Interaction Design Intern @ Internet Brands</p>
                </div>
                <div className='mentor-card'>
                    <div className='images-container'>
                        <img src={rock} className='headshot-img'/>
                        <img src={rockOverlay} className='company-img'/>
                    </div>
                    <p className='mentor-bold'>Dwayne “The Rock” Johnson</p>
                    <p className='mentor-p'>UX Designer @ XYZ Company</p>
                </div>
            </div>
        </div>
    )
}

export default Mentors;