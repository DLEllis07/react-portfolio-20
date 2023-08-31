import React, { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: 'Damar Ellis',
        email: 'damar.ellis22@gmail.com',
     });
    const { name, email, message } = formState;

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-0 pt-6 pr-2 pl-2 pb-40 bg-gray-100">
            <div className="p-8 bg-customBlack shadow-lg rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto border-4 border-customBlue">
                <h2 className="text-2xl custom-font-bold text-customBlue underline mb-4 text-center">Contact Me</h2>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor='name' className="block mb-2 text-customBlue custom-font-reg">Name:</label>
                        <input type='text' id='name' name='name' defaultValue={name} onChange={handleChange} required 
                               className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='email' className="block mb-2 text-customBlue custom-font-reg">Email:</label>
                        <input type='email' id='email' name='email' defaultValue={email} onChange={handleChange} required 
                               className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='message' className="block mb-2 text-customBlue custom-font-reg">Message:</label>
                        <textarea id='message' name='message' rows='5' defaultValue={message} onChange={handleChange} required 
                                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type='submit' className="w-full px-3 py-4 text-white custom-font-bold bg-customBlue hover:bg-blue-600 hover:text-white rounded-md text-customBlack">Submit</button>
                </form>
            </div>
        </section>
    ) 
}

export default Contact