import Image from "next/image"

export const FourLittleDiamondsDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Four Little Diamonds
          </h2>
          <Image
            src="/assets/paintings/500x500/four_little_diamonds_500x500.png"
            alt="An image of a painting entitled Four Little Diamonds"
            width={200}
            height={200}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

export const FourLittleDiamondsMobile = () => {
  return (
    <div>
      <div className="px-2 flex flex-col w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Four Little Diamonds
          </h2>
          <Image
            src="/assets/paintings/500x500/four_little_diamonds_500x500.png"
            alt="An image of a painting entitled Four Little Diamonds"
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
