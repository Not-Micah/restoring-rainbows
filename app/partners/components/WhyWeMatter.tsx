import { whyWeMatter } from "@/data"

const WhyWeMatter = () => {
  return (
    <div className='max-w-max w-full mx-auto
    px-4 py-20
    flex flex-col justify-start item-start gap-y-12'>
      <h3 className='dynamic-subheading'>Why We Matter</h3>
      <div className="flex justify-between items-start gap-x-12">
        {whyWeMatter.map((item, index) => (
          <div
          key={index}
          className="flex flex-col justify-start items-start gap-y-2">
            <h3 className="text-4xl text-primary font-semibold uppercase">{item.number}</h3>
            <p className="text-xl uppercase font-bold text-secondary">{item.caption}</p>
            <p className="mt-2 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyWeMatter