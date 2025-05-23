import OutlineButton from '../OutlineButton';

// Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Prism = () => {
  return (
    <section className='w-full bg-white flex justify-center items-center'>
      <div className="max-w-max w-full mx-auto px-x py-28
      flex items-start gap-x-16
      max-md:flex-col max-md:gap-y-14">
        <div className="flex flex-col gap-y-8 
        max-w-[500px] w-full
        max-md:max-w-none max-md:gap-y-5">
          <h3 className='dynamic-subheading text-header'>
            Subscribe to Our Newsletter Service, Prism
          </h3>
          <p className='dynamic-text text-body'>
          Prism is a global youth news website that encompasses a wide array of perspectives and ideas on the environment, education, and art.
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-2
        max-w-[300px] w-full">

          <img src="/prism.png" className='-mt-4 aspect-square object-cover 
          w-[65.5%] max-xl:h-full' />


          <OutlineButton className="
          w-full py-[12px]
          flex justify-center items-center
          border-[2px] border-primary/60">
            <a
            className="font-accent2 font-semibold uppercase text-primary" 
            // href="https://prismofficial.substack.com/"
            href="/prism"
            >
              View More
            </a>
          </OutlineButton>

        </div>
      </div>
    </section>
  );
};

export default Prism;
