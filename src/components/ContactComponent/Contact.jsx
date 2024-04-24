'use client'
import React from 'react';
import { useForm } from '@formspree/react';
const Contact = () => {
    const [state, handleSubmit] = useForm("xleynpgl");
    if (state.succeeded) {
        return <p className='text-xl text-orange-600 text-center py-2'>Thank You!</p>;
    }
    return (
        <div>
                        <div className=' mt-9'>
       <div className='mb-3'>
       <h2 className='text-4xl font-bold text-center py-3'>Have Any Question?</h2>
        <p className='text-center'>It is a long established fact that a reader will be distracted content of a page when looking.</p>
       </div>
        <div className=' shadow-lg rounded-lg shadow-slate-400 mx-auto lg:w-1/2 p-4 w-11/12 '>
        <form onSubmit={handleSubmit} className='mt-6'>
 <div className="grid grid-cols-1 gap-4">
     <div className=' grid lg:grid-cols-2 gap-6'>
      {/* Name Field */}
     <div>
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500 bg-[#ebeaea]"
          placeholder="Enter your name" required
          
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500 bg-[#ebeaea]"
          placeholder="Enter your email" required
        />
      </div>
     </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500 bg-[#ebeaea]"
          placeholder="Enter your message" required
        ></textarea>
      </div>
      <button type='submit' className="btn btn-block btn-success text-white font-bold">Submit</button>
    </div>
        </form>
        </div>
      </div>
      <div className=' flex justify-center' style={{marginTop:"49px"}}>
             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4091.729505140884!2d90.87926660715544!3d23.984576228960382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1693931244472!5m2!1sen!2sbd" style={{height:"500px" , width:"2050px"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>  
        </div>
    );
};

export default Contact;