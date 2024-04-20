'use client';

// next image
import Image from 'next/image';

// icons
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from 'react-icons/md'

// react count up
import CountUp from 'react-countup';

// react intersection observer
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView ({
    threshold: 0.5,
  });
  return (
  <section className='section flex items-center' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row xl:justify-between'>
        {/* image*/}
        <div className='flex-1 mb-8 xl:mb-0'>
          <Image
            className='rounded-[20px]'
            src={'/images/about/car01.png'}
            width={600}
            height={448}
          />
        </div>
        {/* text & stats */}
        <div className='flex-1 flex items-center xl:justify-center'>
          <div className='xl:max-w-[517px]'>
            <h2 className='h2'>Car services simplified.</h2>
            <p className='mb-[42px] max-w-md'>Rent, choose, and repair with ease. Our conveniest locations,
              diverse car types, and reliable repair points ensure a seamless 
              car experience.
            </p>
            {/* stas */}
            <div className='flex items-center gap-x-8 mb-12'>
              {/* car types */}
              <div className='flex flex-col w-[100px]'>
                <MdOutlineDirectionsCar className='text-5xl text-accent mb-2'/>
                <div className='text-3xl font-bold mb-2'>
                  {inView ? (
                    <CountUp start={0} end={50} duration={3} delay={1} />
                  ) : null}
                  +
                </div>
                <div className='uppercase text-[13px] font-semibold text-secundary'> 
                  car <br/> types
                </div>
              </div>

              {/* rental outlets */}
              <div className='flex flex-col w-[100px]'>
                <MdOutlineMapsHomeWork className='text-5xl text-accent mb-2'/>
                <div className='text-3xl font-bold mb-2'>
                  {inView ? (
                    <CountUp start={0} end={135} duration={3} delay={1} />
                  ) : null}
                  +
                </div>
                <div className='uppercase text-[13px] font-semibold text-secundary'> 
                  rental <br/> outlets
                </div>
              </div>

              {/* repairs points */}
              <div className='flex flex-col w-[100px]'>
                <MdOutlineBuildCircle className='text-5xl text-accent mb-2'/>
                <div className='text-3xl font-bold mb-2'>
                  {inView ? (
                    <CountUp start={0} end={35} duration={3} delay={1} />
                  ) : null}
                  +
                </div>
                <div className='uppercase text-[13px] font-semibold text-secundary'> 
                  repair <br/> points
                </div>
              </div>
            </div>
            {/* btn */}
            <button className='hidden xl:block bg-accent hover:bg-accent-hover
            rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] 
            text-[13px] max-w-[184px]'>
              See all cars
            </button>
          </div>
        </div>
      </div>
    </div> 
  </section>
)
};

export default About