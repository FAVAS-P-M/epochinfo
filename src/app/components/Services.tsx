"use client"
import CompanyServices from '@/data/company_services.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image'


interface services{
  id:number,
  title:string,
  slug:string,
  description:string,
  isFeatured:boolean,
  image:string
}


function Services() {
 const featuredServices= CompanyServices.services.filter((service:services)=>(
    service.isFeatured
  ))
  return (
    <div className='py-12 bg-gray-900'>
<div>
  <div className='text-center'>
    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Our Services</h2>
    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Connect with Us</p>
  </div>
</div>
<div className='mt-10'>
<div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center'>
{featuredServices.map((service:services)=>(
  
<div key={service.id} className='flex justify-center'>
<BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900
overflow:hidden h-full max-w-sm'>
  <div className='flex flex-col items-center text-center flex-grow'>
    {/* <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{service.title}</p> */}
    {/* <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{service.description}</p> */}
   <div className='flex w-auto'>
<Image className=' rounded-2xl' src={service.image} alt={service.slug} width={600} height={600} />

   </div>
   
    {/* <Link href={`/services/${service.slug}`}>Learn More</Link> */}
  </div>
</BackgroundGradient>
</div>

))}
</div>
</div>
<div className='mt-20 text-center'>
{/* <Link className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200' href={'/courses'}>
  View All Courses
</Link> */}

</div>


    </div>
  )
}

export default Services