'use client'

//next Image
import Image from "next/image";

// icons
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

export default function Why() {
  return (
    <section className="section flex items-center" id="why"> 
      <div className="container mx-auto">
        <h2 className="h2 text-center">Unmatched excellence and custumer satisfaction</h2>
        <p className="max-w-[680px] text-center mx-auto mb-2">Our dedication to providing exceptional services sets us apart from the
          competition. From the moment you engage with us, we stive to exceed your
          expectations in every interaction.
        </p>
        <div className="hidden md:flex justify-center mb-6 xl:mb-2">
          <Image src={'/images/why/car.svg'} width={1060} height={420} alt=''/>
        </div>
        {/*grid item*/}
        <div className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4
        xl:gap-y-0 xl:gap-x-[30px]">
          
          <div className="flex flex-col items-center text-center max-w-[160px]
          xl:max-w-none p-2 xl:p-0"> 
            <MdKey className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">Rent simply and quickly</h3>
            <p className="hidden xl:flex">
              We prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[160px]
          xl:max-w-none p-2 xl:p-0"> 
            <MdTrendingUp className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">Modern & well maintained vehicles</h3>
            <p className="hidden xl:flex">
              We prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[160px]
          xl:max-w-none p-2 xl:p-0"> 
            <MdHandshake className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">Prompt and flexible services</h3>
            <p className="hidden xl:flex">
              We prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
