'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import IconCloudDemo  from "@/components/ui/icon-cloud-demo";


interface Slide {
  id: number;
  imageUrl: string;
  alt: string;
  title: string;
  subtitle: string;
}

export default function BackgroundSlideshow() {
  const slides: Slide[] = [
    {
      id: 1,
      imageUrl: '/images/bacground1.jpg',
      alt: 'Slide 1',
      title: '',
      subtitle: ''
    },
    {
      id: 2,
      imageUrl: '/images/background 2.jpg',
      alt: 'Slide 2',
      title: '',
      subtitle: ''
    }
  ];

  return (
    <>
      {/* Slideshow Section */}
      <div className="relative h-[90vh] w-full">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          direction="horizontal"
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.imageUrl}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  quality={90}
                />
                {/* Overlay text */}
                <div className="absolute inset-0 flex flex-col justify-center items-start text-white bg-black/30 px-[10%]">
                  <h1 className="text-2xl md:text-2xl lg:text-7xl font-bold mb-4 max-w-3xl">{slide.title}</h1>
                  {slide.subtitle && (
                    <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">{slide.subtitle}</h2>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full bg-gray-50 border border-gray-200 shadow-sm">
  <div className="container mx-auto px-6 sm:px-10">
    <div className="h-16 flex items-center justify-center">
      <div className="flex items-center space-x-12">
              {[
                { src: "/images/IBM.png", alt: "IBM" },
                { src: "/images/MCX.png", alt: "MCX" },
                { src: "/images/hughes.png", alt: "hughes" },
                { src: "/images/tata.png", alt: "TATA" },
                { src: "/images/ctrl.png", alt: "ctrl" },
                { src: "/images/IDFC.png", alt: "IDFC" }
              ].map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  style={{ 
                    objectFit: 'contain',
                    height: '30px',
                    width: 'auto'
                  }}
                  priority
                />
              ))}
              </div>
            </div>
          </div>
        </div>
       
{/* New Section */}
<section className="w-full bg-gray-50 py-24"> {/* Increased padding-y from 32 to 40 */}
  <div className="container mx-auto px-16 max-w-[1980px]"> {/* Increased max-width and padding-x */}
  <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
    <div className="flex flex-col items-end lg:w-1/2"> {/* Container for text content */}
        <h4 className="text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-900 mb-0 text-right">
            Securing Critical Assets
        </h4>
        <br></br>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl text-center mt-8 ml-10">
            From network to applications, our solutions help improve the security posture of your production environment
        </p>



        <div className="w-full"> {/* Content container */}
          {/* Add your section content here */}
        </div>
      </div>
      
      <div className="lg:w-1/2 relative h-[450px] w-full flex">
  <Image 
    src="/images/test.png"
    alt="Description of image"
    width={900}
    height={40}
    className="object-contain ml-auto" // Added ml-auto to push to the right
    priority
    quality={90}
  />
</div>

    </div>
  </div>
</section>
 <section className="py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
        <p className="text-3xl md:text-4xl font-bold text-gray-400 dark:text-gray-300">
    33%
</p>


          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Savings on Operational Cost</h3>
          <p className="text-gray-500 dark:text-gray-300">Reduce operation cost of managing security products with our 24x7 Professional Service</p>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
        <p className="text-3xl md:text-4xl font-bold text-gray-400 dark:text-gray-400">
    90%
</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Reduced MTTD</h3>
          <p className="text-gray-500 dark:text-gray-300">Reduced mean time to detect incidents through unified incident management</p>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
        <p className="text-3xl md:text-4xl font-bold text-gray-400 dark:text-gray-400">
    99.999%
</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Assured Uptime</h3>
          <p className="text-gray-500 dark:text-gray-300">Reliable solutions ensuring security & reliability backed by SLA</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-16 bg-white">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800">Deploy Anywhere</h2>
      <p className="mt-4 text-lg text-gray-600">Flexible deployment for any environment - on premise or on public / private cloud</p>
    </div>
    
    {/* Reduced gap-4 from gap-8 and removed extra padding/margins */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
      {/* Virtual Machine */}
      <div className="group relative overflow-hidden">
        <img 
          src="/images/vm.png" 
          alt="Virtual Machine" 
          className="w-full h-48 object-contain transition-transform duration-300 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold">Virtual Machine</h3>
        </div>
      </div>

      {/* Kubernetes */}
      <div className="group relative overflow-hidden">
        <img 
          src="/images/kubernetes.png" 
          alt="Kubernetes" 
          className="w-full h-48 object-contain transition-transform duration-300 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold">Kubernetes</h3>
        </div>
      </div>

      {/* Hardware */}
      <div className="group relative overflow-hidden">
        <img 
          src="/images/hardware.png" 
          alt="Hardware" 
          className="w-full h-48 object-contain transition-transform duration-300 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold">Hardware</h3>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-24 bg-gray-50">
  <div className="container mx-auto max-w-4xl px-6"> {/* Adjust max-width here */}
    
    <div className="flex items-center"> {/* Changed from items-center to items-start */}
      <div className="flex-1 mr-8 mt-2"> {/* Added left margin to move the heading right */}
        <h2 className="text-3xl font-bold text-gray-800 whitespace-nowrap">Multi-Cloud SaaS Offerings</h2> {/* Heading on the left side */}
        <p className="text-lg text-gray-700 mt-4"> {/* Added margin-top for spacing below heading */}
          Scalable service providing protection against threats on applications over a Multi-Cloud network giving 
          better reliability, network optimization, reduced latency, with no single point of failure.
        </p>
      </div>
      <div className="flex-shrink-0"> {/* Prevent shrinking of the icon */}
        <IconCloudDemo />
      </div>
    </div>

  </div>
</section>







         </>
    );
  }
       
