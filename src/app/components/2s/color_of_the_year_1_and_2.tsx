import Image from "next/image"

export const ColorOfTheYearOneAndTwoDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Color of the Year 1
          </h2>
          <Image
            src="/assets/paintings/500x500/color_of_the_year_1_500x500.png"
            alt="An image of a painting entitled Color of the Year 1"
            width={205}
            height={205}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Color of the Year 2
          </h2>
          <Image
            src="/assets/paintings/500x500/color_of_the_year_2_500x500.png"
            alt="An image of a painting entitled Color of the Year 2"
            width={205}
            height={205}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

export const ColorOfTheYearOneAndTwoMobile = () => {
  return (
    <div>
      <div className="px-2 flex flex-col w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Color of the Year 1
          </h2>
          <Image
            src="/assets/paintings/500x500/color_of_the_year_1_500x500.png"
            alt="An image of a painting entitled Color of the Year 1"
            width={275}
            height={275}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Color of the Year 2
          </h2>
          <Image
            src="/assets/paintings/500x500/color_of_the_year_2_500x500.png"
            alt="An image of a painting entitled Color of the Year 2"
            width={275}
            height={275}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}
