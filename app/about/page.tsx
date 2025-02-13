import MissionStatement from "./components/MissionStatement";
import WhatWeDo from "@/components/WhatWeDo";
import WhyWeMatter from "./components/WhyWeMatter";

const About = () => {
  return (
    <section className=''>
      <MissionStatement />
      <div className="fade-in-animation">
        <WhatWeDo />
      </div>
      <WhyWeMatter />
    </section>
  )
}

export default About