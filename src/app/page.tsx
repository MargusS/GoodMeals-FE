
"use client"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react'

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const sliderData = [
    {
      id: 1,
      title: "Serene Nature Scene with Sunlight Streaming Through Trees",
      url: "/hamacas.jpg",
    },
    {
      id: 2,
      title: "Tranquil Beach with Gentle Waves and Clear Blue Sky",
      url: "/piscina.jpg",
    },
    {
      id: 3,
      title: "Lush Forest Scene with Rays of Sunlight Peeking Through",
      url: "/habitacion.jpg",
    },
    {
      id: 4,
      title: "Elegant Woman in City Setting with a Chic Attitude",
      url: "/bar.jpg",
    },
    {
      id: 5,
      title: "Majestic Tree in Vibrant Autumn Colors",
      url: "/front.jpg",
    },
  ];

  return (
    <main className="flex flex-col gap-5 py-10 h-screen">
      <img className="absolute" src="/gc-png.png" alt="GC" />
      <img className="absolute bottom-0" src="/ftv-png.png" alt="FTV" />
      <h2 className="absolute font-bold top-[42.5%] z-50 text-6xl w-full text-center text2 font-mono">Thursday 22</h2>
      <h2 className="absolute font-bold top-[47.5%] z-50 text-6xl w-full text-center text1 font-mono">Saturday  24</h2>
      <div
        className="overflow-hidden bg-gray-200 w-10/12 mx-auto flex items-center justify-center h-1/2 "
        ref={emblaRef}>
        <div className="flex self-end">
          {sliderData?.map((item) => {
            return (
              <div className="embla__slide relative h-full w-full" key={item.id}>
                <img className="w-full h-full rounded-3xl mr-4" src={item.url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-1/2 z-10">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7531141162954!2d-14.000813724503418!3d28.51707477572797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc47b78768d9d84d%3A0x6c62eedc771c4627!2sHotel%20rural%20Rosario%20Martin!5e0!3m2!1ses!2ses!4v1722690539612!5m2!1ses!2ses" allowFullScreen loading="lazy" className="w-10/12 h-72 mx-auto  rounded-3xl"></iframe>
      </div>
    </main>
  );
}
