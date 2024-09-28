import Image from "next/image"

export const ColorOfTheYearOneAndTwoDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-center">&quot;Color of the Year 1&quot;</h2>
          <Image
            src="/assets/paintings/color_of_the_year_1.png"
            alt="An image of a painting entitled Color of the Year 1"
            width={230}
            height={230}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-center">&quot;Color of the Year 2&quot;</h2>
          <Image
            src="/assets/paintings/color_of_the_year_2.png"
            alt="An image of a painting entitled Color of the Year 2"
            width={230}
            height={230}
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
      <div>Color Of The Year One And Two Mobile</div>
    </div>
  )
}
