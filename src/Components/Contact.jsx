import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_teha4ci", "template_k26c2o2", form.current, "rkq3oyYpMYFFgkIuT")
            .then((result) => {
                if (result.status === 200) {
                    console.log("sent email successfully")
                }
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className='container mx-auto md:w-[60%] w-full mt-60 mb-20'>
            <div className="flex md:flex-row flex-col-reverse justify-between items-center mx-auto">
                <div className="block px-6 py-10 rounded-lg shadow-2xl md:w-1/2 w-[80%] bg-sky-900">
                    <h1 className="text-3xl text-center font-semibold my-10">Contact Me</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-cyan-950 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-50 focus:bg-cyan-950 focus:border-indigo-400 focus:outline-none" id="exampleInput7"
                                placeholder="Name" name='from_name' />
                        </div>
                        <div className="form-group mb-6">
                            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-cyan-950 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-50 focus:bg-cyan-950 focus:border-indigo-400 focus:outline-none" id="exampleInput8"
                                placeholder="Email address" name='from_email' />
                        </div>
                        <div className="form-group mb-6">
                            <textarea
                                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-cyan-950 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-50 focus:bg-cyan-950 focus:border-indigo-400 focus:outline-none"
                                id="exampleFormControlTextarea13" rows="3"
                                placeholder="Message" name='message'
                            ></textarea>
                        </div>

                        <div className="flex justify-center items-center">
                            <button type="submit" className="h-12 w-40 origin-top transform rounded-lg border-2 border-sky-500 text-lg text-sky-50 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-600">Send Message</button>
                        </div>
                    </form>
                </div>
                <div className=''>
                    <p className='mb-5'><FaPhoneAlt className='w-7 h-7 inline-block mr-5' /><span className='text-lg'>+880 1756 949075</span></p>
                    <p className='mb-5'><MdEmail className='w-7 h-7 inline mr-5' /><span className='text-lg'>chamakkarmakar.ck@gmail.com</span></p>
                    <p className='mb-5'><IoLocation className='w-7 h-7 inline mr-5' /><span className='text-lg'>Chattogram, Bangladesh</span></p>
                </div>
            </div>
        </div>
    )
}

export default Contact
