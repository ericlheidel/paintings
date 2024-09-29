import Image from "next/image"

export const FourLittleDiamondsDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-center">&quot;Four Little Diamonds&quot;</h2>
          <Image
            src="/assets/paintings/four_little_diamonds.png"
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
      <div>Four Little Diamonds Mobile</div>
    </div>
  )
}
