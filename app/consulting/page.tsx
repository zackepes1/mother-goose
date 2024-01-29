import { consultant1 } from '@/assets'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Consulting = () => {
  return (
    <div>
         <section id='consulting' className="flex flex-col text-secondary bg-accent m-auto p-10">
            <div className="flex flex-col  items-center justify-center">
            <h1 className="text-5xl py-10 px-5 justify-center items-center  text-primary text-center lg:tracking-tighter lg:leading-12 font-raleway font-bold">
            Embrace a Smooth Breastfeeding Journey with Mother Goose Lactation
            </h1>
            <p className="text-lg p-5 font-montserrat lg:leading-8">
            At Mother Goose Lactation, we understand that every breastfeeding journey is unique. That&apos;s why we offer personalized consulting services to support you every step of the way, from those first latch attempts to confident nursing routines.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <p className="font-semibold pt-8 pb-5">Our experienced lactation consultants, known for their warmth, expertise, and unwavering support, are here to help you:</p>
                    <ul>
                <li className="px-8 py-3 font-semibold text-primary">Overcome latching challenges: <span className="font-normal text-secondary">Whether it&apos;s a shallow latch, tongue tie concerns, or simply finding the right position, we&apos;ll guide you and your baby towards comfortable and effective feedings.</span></li>
                <li className="px-8 py-3 font-semibold text-primary">Boost your milk supply: <span className="font-normal text-secondary"> Worried about low milk supply? We&apos;ll assess your situation and offer personalized strategies, including pumping tips, diet and herbal recommendations, and stress management techniques.</span></li>
                <li className="px-8 py-3 font-semibold text-primary">Navigate feeding difficulties:<span className="font-normal text-secondary"> From fussy babies to managing reflux, we have the experience and knowledge to address common challenges and help you find solutions that work for you and your little one. </span></li>
                <li className="px-8 py-3 font-semibold text-primary">Build confidence and trust:<span className="font-normal text-secondary"> We believe in empowering mothers to feel confident and capable in their breastfeeding journey. We&apos;ll provide reassurance, celebrate your milestones, and answer all your questions along the way. </span></li>
                <li className="px-8 py-3 font-semibold text-primary">Create a customized plan:<span className="font-normal text-secondary"> Forget one-size-fits-all approaches. We&apos;ll tailor a plan that considers your individual needs, lifestyle, and breastfeeding goals.</span></li>
                <li className="px-8 py-3 font-semibold text-primary">Connect with a supportive community:<span className="font-normal text-secondary"> Join our online forum and connect with other mothers on similar journeys. Share experiences, tips, and encouragement in a safe and supportive space.</span></li>
                </ul>
            </div>
            <div className="object-contain items-center flex flex-row justify-center">
                <Image src={consultant1} alt="consultant1" className="rounded-xl object-contain hidden lg:flex"/>
            </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start justify-items-center place-content-center text-center pt-24 max-w-[80%] m-auto">
                <div className="flex justify-center items-center flex-col">
            <p className="font-semibold pt-8 pb-5 text-3xl tracking-tighter">Our Services:</p>
                <ul>
                <li className="px-8 py-3 font-semibold text-primary">In-home consultations: <span className="font-normal text-secondary"> Get personalized guidance in the comfort of your own home.</span></li>
                <li className="px-8 py-3 font-semibold text-primary">Telehealth consultations: <span className="font-normal text-secondary"> Connect with a lactation consultant from anywhere through video conferencing.</span></li>
                <li className="px-8 py-3 font-semibold text-primary">Group workshops:<span className="font-normal text-secondary"> Learn valuable skills and connect with other mothers in a supportive group setting. </span></li>
                <li className="px-8 py-3 font-semibold text-primary">Online resources:<span className="font-normal text-secondary"> Access our library of informative articles, videos, and tips on our website and social media platforms.</span></li>
                </ul>
                </div>
                <div className="flex justify-center items-center flex-col">
            <p className="font-semibold pt-8 pb-5 text-3xl tracking-tighter">Why Choose Mother Goose Lactation?</p>
                <ul>
                <li className="px-8 py-3 font-semibold text-primary">Experienced and certified lactation consultants: <span className="font-normal text-secondary"> Our team is comprised of dedicated professionals with extensive training and experience in lactation.</span></li>
                <li className="px-8 py-3 font-semibold text-primary">Personalized approach: <span className="font-normal text-secondary"> We believe in tailoring our services to your unique needs and goals.</span></li>
                <li className="px-8 py-3 font-semibold text-primary">Compassionate and empathetic support:<span className="font-normal text-secondary"> We understand the challenges mothers face and offer a safe space for you to ask questions and express concerns. </span></li>
                <li className="px-8 py-3 font-semibold text-primary">Evidence-based practice:<span className="font-normal text-secondary"> We base our recommendations on the latest research and best practices in lactation. </span></li>
                <li className="px-8 py-3 font-semibold text-primary">Flexible scheduling:<span className="font-normal text-secondary"> We offer convenient appointment times to fit your busy life.</span></li>
                </ul>
                </div>
                <div>
            <p className="font-semibold pt-8 pb-5 text-3xl tracking-tighter">Ready to begin your journey?</p>
                <ul>
                <li className="px-8 py-3 font-semibold text-primary">Schedule a consultation:<span className="font-normal text-secondary"> Discuss your needs and learn how we can help you achieve your breastfeeding goals.</span></li>
                <div className="text-center items-center justify-center flex flex-row p-6">
                <Button className="bg-primary">Schedule a Consultation</Button>
                </div>
                <li className="px-8 py-3 font-semibold text-primary">Connect with us on social media:<span className="font-normal text-secondary"> Join our community, ask questions, and get inspired by other mothers.</span></li>
                <div className="flex flex-row lg:justify-center items-center px-10 py-5 gap-3 text-2xl">
                  <FaFacebook/>
                  <FaInstagram/>
                  <FaXTwitter/>
                  <FaLinkedin/>
                  <FaYoutubeSquare/>
                  </div>  
                </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Consulting