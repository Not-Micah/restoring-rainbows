"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import { useData } from '@/providers/useData';

import OutlineButton from './OutlineButton';

// Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Blog = () => {
  const {
    stories
  } = useData();
  const router = useRouter();

  return (
    <section className='w-full bg-white flex justify-center items-center'>
      <div className="max-w-max w-full mx-auto px-x pb-14 pt-24 flex flex-col justify-start items-start gap-y-12">
        <h3 className='dynamic-subheading text-header'>
          Blogs
        </h3>
        <Swiper
          // navigation={true} 
          // modules={[Navigation]}
          slidesPerView="auto"
          grabCursor={true}
          spaceBetween={15}  
          className="w-full"
        >
          {
            stories?.map((story, index) => (
              <SwiperSlide key={index}
              onClick={() => router.push(`/stories/item?title=${story.title}`)}>  
                <div className="w-[300px] max-lg:w-[250px] flex flex-col justify-center items-start cursor-pointer">
                  <OutlineButton>
                    <img src={story.image} className='w-full h-[300px] drop-shadow object-cover
                    max-lg:h-[250px]' />
                  </OutlineButton>
                  <div className="w-full overflow-hidden
                  flex flex-col justify-start items-start py-2">
                    <h3 className='text-lg font-title uppercase font-bold text-black text-nowrap'>{story.title}</h3>
                    <p className='text-sm text-body'>{story.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
