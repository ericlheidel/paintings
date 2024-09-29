import Image from "next/image"

export const ConcaveSunsetDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Concave Sunset
          </h2>
          <Image
            src="/assets/paintings/500x500/concave_sunset_500x500.png"
            alt="An image of a painting entitled Concave Sunset"
            width={250}
            height={250}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

export const ConcaveSunsetMobile = () => {
  return (
    <div>
      <div className="px-2 flex flex-col w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Concave Sunset
          </h2>
          <Image
            src="/assets/paintings/500x500/concave_sunset_500x500.png"
            alt="An image of a painting entitled Concave Sunset"
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
