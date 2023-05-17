import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function ContactMe({}: Props) {

    const { 
        register, 
        handleSubmit
     } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:aldo.fwi@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. My email is ${formData.email}  ${formData.message}`
    };

  return (

    <div className="h-screen w-4/5 flex relative flex-col text-center md:text-left md:flex-row max-w-2xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact
        </h3>
        
        <div className="absolute flex flex-col h-3/5 w-4/5 space-y-10 items-center">
            <h4 className="text-2xl font-semibold text-center">
                I have got just what you need.{"   "}
                <span className='decoration-[#F7AB0A]/50 underline'>
                    Let us talk.
                </span>
            </h4>

            <div>
                <div className="flex items-center space-x-3 justify-center">
                    <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p>+1234567890</p>
                </div>

                <div className="flex items-center space-x-3 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p>aldo.fwi@gmail.com</p>
                </div>

                <div className="flex items-center space-x-3 justify-center">
                    <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p>345 Coding Lane</p>
                </div>
            </div>

            <form onSubmit={ handleSubmit(onSubmit) } className="flex flex-col space-y-2 w-min mx-auto">
                <div className="flex space-x-2">
                    <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
                    <input {...register('email')} className='contactInput' placeholder='Email' type="email" />
                </div>

                <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />

                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>

            </form>
        </div>
    </div>

  )
}

export default ContactMe