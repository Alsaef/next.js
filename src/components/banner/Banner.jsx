import React from 'react';
import ratul from '../../assets/Images/Banner/ratul bg.png';
import Image from 'next/image';
import './Banner.css'
import { FaBeer, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
const Banner = () => {
    return (
           <div>
            <div className="banner hero h-screen gap-6 bg-orange-100" style={{padding:"50px"}}>
  <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-9">
  <Image src={ratul} width={300} height={200} alt=''/>
    <div >
        <p className=' text-2xl font-semibold'>This is,</p>
      <h1 className="text-5xl font-bold text-orange-500">AL SAEF RATUL</h1>
      <p className="py-6 text-4xl">Web Developer (Frontend-React.js)</p>
      <a href="https://www.facebook.com/profile.php?id=100064069724626"><button className='btn btn-success mx-1 text-white text-2xl'><FaFacebook /></button></a>
      <a href="https://github.com/Alsaef"><button className='btn btn-success mx-1 text-white text-2xl'><FaGithub /></button></a>
     <a href="https://www.linkedin.com/in/al-saef-ratul-b0a380276/"> <button className='btn btn-success mx-1 text-white text-2xl'><FaLinkedin /></button></a>
    </div>
  </div>
</div>
        </div>
        
    );
};

export default Banner;