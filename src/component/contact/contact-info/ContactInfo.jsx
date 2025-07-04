import React from "react";
import './ContactInfo.scss'
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import Button from "../../button/Button";
                          
export default function ContactInfo() {
    const {
        register,       // to register form fields
        handleSubmit,   // to handle form submission
        formState: { errors }  // to get validation errors
      } = useForm();
    
      const onSubmit = (data) => {
        console.log('Form Data:', data);
      };
    
    return(
        <div className="contact_info_container">
            <div className="textual_container">
                <div className="textual_info">
                    <span>Get In Touch With Us</span>
                    <span>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</span>
                </div>
            </div>
            
            <div className="contact_information">
                <div className="all_related_info">
                    <div className="address_info">
                        <div className="address_logo">
                            <FaLocationDot />
                        </div>

                        <div className="address_descriptive_info">
                            <span className="address_heading">Address</span>
                            <span className="address">236 5th SE Avenue, New York NY10000, United States</span>
                        </div>
                    </div>

                    <div className="phone_info">
                        <div className="phone_logo">
                            <FaPhoneAlt />
                        </div>

                        <div className="phone_descriptive_info">
                            <span className="phone_heading">Phone</span>
                            <span className="phone">
                                <span>Mobile: +(84) 546-6789</span>
                                <span>Hotline: +(84) 456-6789</span>
                            </span>
                        </div>
                    </div>

                    <div className="working_time_info">
                        <div className="working_time_logo">
                            <AiFillClockCircle />
                        </div>

                        <div className="working_time_descriptive_info">
                            <span className="working_time_heading">Working Time</span>
                            <span className="working_time">
                                <span>Monday-Friday: 9:00 - 22:00</span>                            
                                <span>Saturday-Sunday: 9:00 - 21:00</span>
                            </span>
                        </div>
                    </div>
                </div>

                <form 
                    className="contact_info_form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label htmlFor="name">Your Name</label>
                    <div>
                        <input
                            id="name" 
                            type="text"
                            placeholder="Abc"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className="error">{errors.name.message}</p>}
                    </div>
                    
                    <label htmlFor="email">Email address</label>

                    <div>
                        <input
                            id="email"
                            type="email"
                            placeholder="Abc@def.com"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    

                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject" 
                        type="text"
                        placeholder="This is an optional"
                        {...register('subject')}
                    />
                    
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message" 
                        type="text"
                        placeholder="Hi! i’d like to ask about"
                        className="message"
                        {...register('message', { required: 'Message is required' })}
                    />
                    {errors.message && <p className="error">{errors.message.message}</p>}

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>    
    )
}