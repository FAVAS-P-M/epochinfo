import Link from 'next/link'
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import styles from './text.module.css'



function HeroSection() {
    let wordsArray="we're your strategic partner in leveraging cutting-edge technology to propel your business forward. Whether you're seeking bespoke software solutions, robust cybersecurity measures, or seamless cloud integrations, our team of passionate tech enthusiasts is dedicated to delivering unparalleled results. Let's embark on a journey of digital transformation together, empowering your business to thrive in the digital age. Join us and discover the limitless possibilities of technology";
  
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
<div className='p-4 relative z-10 w-full text-center'>
<h1 className='mt-20 md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Transforming Businesses with Innovative Software Solutions</h1>

<p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>'It was popularised, in the 1960s, with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'</p>





<div className='   mt-10 mx-10 md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
<TextGenerateEffect  words={wordsArray} className={styles.whitetext}  />
</div>



<div className='mt-4'>
    <Link href={'/contact'}>Contact Us</Link>
</div>

</div>
    </div>
  )
}

export default HeroSection