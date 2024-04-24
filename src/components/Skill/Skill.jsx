import Image from 'next/image';
import React from 'react';
import html from '../../assets/icon/html.png';
import css from '../../assets/icon/css.png';
import js from '../../assets/icon/Javascript.png';
import bootstrap from '../../assets/icon/bootstrap.png';
import tailwind from '../../assets/icon/tailwind.png';
import react from '../../assets/icon/react.js.png';
import redux from '../../assets/icon/Redux.png';
import git from '../../assets/icon/git.png';
import github from '../../assets/icon/github.png';
const Skill = () => {
    return (
        <div>
             <section className='mt-24'>
            <p className='text-xl text-orange-600 text-center py-2'>What I Know</p>
                    <h3 className=' text-4xl font-bold text-center py-5 '>Front-end Skill And Git Tools</h3>
         <div className='mt-3  grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 justify-items-center items-center'>
         <div>
             <Image width={100} height={100} src={html} alt="" />
            </div> 
           <div>
             <Image width={100} height={100} src={css} alt="" />
            </div> 
           <div>
             <Image width={100} height={100} src={bootstrap} alt="" />
            </div> 
           <div>
             <Image width={100} height={100} src={tailwind} alt="" />
            </div> 
           <div>
             <Image width={100} height={100} src={git} alt="" />
            </div> 
           <div>
             <Image width={100} height={100} src={github} alt="" />
            </div> 
           <div>
             <Image width={100} height={100} src={js} alt="" />
            </div> 
           <div>
             <Image width={100} height={100} src={react} alt="" />
            </div> 
           <div>
             <Image width={100} height={100} src={redux} alt="" />
            </div> 
         </div>
        </section>
        </div>
    );
};

export default Skill;