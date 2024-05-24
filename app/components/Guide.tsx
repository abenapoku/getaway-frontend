import React from 'react'
import Image from 'next/image'
const Guide = () => {
  return (
   <section className="flexCenter flex-col">
    <div className=" padding-container max-container w-full
    pb-24">
      <Image src="/camp.svg"
      alt="camp"
      width={50}
      height={50}/>
      <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">Our Cabins Are Here For You</p> 
      <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
        <h2 className="bold-40 lg:bold:62 xl:max-w-[390px]">Take A much Needed Trip</h2>
        <p className="regular-16 text-gray-30 xl:max-w-[520px]">
        Embrace the allure of nature and the allure of our inviting getaway cabins.
        Get ready to indulge your senses, ignite your wanderlust,
         and discover the magic of travel with us.
        </p>
      </div>
    </div>
    <div className="flexCenter max-container relative w-full
    ">
      <Image src="/boat.png"
      alt="boat"
      width={1440}
      height={580}
      className="w-full object-cover object-center 2xl:rounded-5xl"/>
    <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3
    rounded-3xl border shadow-md md:left-[5%] lg:top-20">
      <Image
      src="/meter.svg"
      alt="meter"
      width={16}
      height={158}
      className="h-full w-auto"/>
      <div className="flexBetween flex-col">
        <div className='flex w-full flex-col'>
            <p className="regular-16 text-gray-20">Destination</p>
            <p className="bold-16 text-green-50">37 min</p>
          <div className="flexBetween w-full">
            <p className="bold-20 mt-2 whitespace-nowrap">Albuquerque, NM</p>
          </div>
          
          <div className="flex w-full flex-col">
            <p className="regular-16 text-gray-20">Start Point</p>
            <h4 className="bold-20 mt-2 whitespace-nowrap">Bernalillo, NM</h4>

          </div>

        </div>

      </div>
    </div>
    </div>

   </section>
  )
}

export default Guide