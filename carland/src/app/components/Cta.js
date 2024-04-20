import Image from "next/image"

export default function Cta() {
  return (
    <section 
    className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10"
    id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <h2 className="h2">Download our App now and hit the road with ease.</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</p>
              <div className="flex gap-x-3 justify-center md:justify-start">
                <button className="btn-cta">
                  <Image src={'/icons/buttons/google-play.svg'}
                  width={132}
                  height={36}
                  alt=""
                  />
                </button>
                <button className="btn-cta">
                  <Image src={'/icons/buttons/app-store.svg'}
                  width={132}
                  height={36}
                  alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="flex-1 flex justify-center order-1 md:order-none">
            <Image
              src={'/images/cta/phone.svg'}
              width={320}
              height={640}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
