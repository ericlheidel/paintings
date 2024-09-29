import Image from "next/image"

export const CosmicBowlingDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-center">&quot;Cosmic Bowling&quot;</h2>
          <Image
            src="/assets/paintings/cosmic_bowling_500x500.png"
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
      <div>Cosmic Bowling Mobile</div>
    </div>
  )
}
