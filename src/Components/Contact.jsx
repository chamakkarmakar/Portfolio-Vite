import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
        <div className='container mx-auto mt-60 mb-20'>
            <h1 className="text-3xl text-center font-semibold my-12">Contact Me</h1>
            <div className="block p-6 rounded-lg shadow-2xl  max-w-md mx-auto bg-rose-50">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none" id="exampleInput7"
                            placeholder="Name" name='from_name' />
                    </div>
                    <div className="form-group mb-6">
                        <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none" id="exampleInput8"
                            placeholder="Email address" name='from_email' />
                    </div>
                    <div className="form-group mb-6">
                        <textarea
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none"
                            id="exampleFormControlTextarea13" rows="3"
                            placeholder="Message" name='message'
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full px-6 py-2.5 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-outfocus:outline-none focus:ring-0">
                        Send</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
