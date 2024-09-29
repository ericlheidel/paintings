import Image from "next/image"

export const CosmicBowlingDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Cosmic Bowling
          </h2>
          <Image
            src="/assets/paintings/500x500/cosmic_bowling_500x500.png"
            alt="An image of a painting entitled Cosmic Bowling"
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

export const CosmicBowlingMobile = () => {
  return (
    <div>
      <div className="px-2 flex flex-col w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Cosmic Bowling
          </h2>
          <Image
            src="/assets/paintings/500x500/cosmic_bowling_500x500.png"
            alt="An image of a painting entitled Cosmic Bowling"
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
