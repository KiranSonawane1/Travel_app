import React from 'react'
import "./Home.css"
import video from '../../Assets/video.mp4'
import { GrLocation } from "react-icons/gr"
const Home = () => {
  return (
    <section className='home' >
      <div className='overlay'></div>
        <video src={video} muted autoPlay loop type='video/mp'></video>
      <div className='homeContent container'>
        <div className='textDiv'>

          <span className='smallText'>
            Our Packages
          </span>

          <h1 className='homeTitle'>
            Search your Holidays
          </h1>

        </div>
        <div className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'>
              Search your destination:
            </label>
            <div className='inpit flex'>
              <input type='text' placeholder='Enter name here.....'/>
              <GrLocation className="icon"/>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='destinationInput'>
            <label htmlFor='city'>
              Search your destination:
            </label>
            <div className='inpit flex'>
              <input type='text' placeholder='Enter name here.....'/>
              <GrLocation className="icon"/>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Home