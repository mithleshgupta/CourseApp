import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>

        <main>
            <h1>Firsty</h1>
            <p>Fitst page about this site on this page</p>
        </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ex iste nemo, et ipsa quam? Quae nobis dolor voluptate velit!</p>
        </div>
    </div>

    <div className='home3' id='about'>
        <div>
            <h1>
                Who We Are
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum amet est voluptas autem labore error minus possimus cupiditate itaque veritatis?</p>
        </div>
    </div>

    <div className='home4' id='brands'>
        <div>
            <h1>
                Brands
            </h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>

                </div>
                 <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>

                </div>
                 <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>

                </div>
                 <div style={{animationDelay:"0.1s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>

                </div>
            </article>
        </div>
    </div>
    
    </>
  )
}

export default Home