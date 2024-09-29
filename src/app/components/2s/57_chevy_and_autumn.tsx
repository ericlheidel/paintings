import Image from "next/image"

export const FiftySevenChevyAndAutumnDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">57 Chevy</h2>
          <Image
            src="/assets/paintings/500x500/57_chevy_500x500.png"
            alt="An image of a painting entitled 57 Chevy"
            width={200}
            height={200}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Autumn</h2>
          <Image
            src="/assets/paintings/500x500/autumn_500x500.png"
            alt="An image of a painting entitled Autumn"
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

export const FiftySevenChevyAndAutumnMobile = () => {
  return (
    <div>
      <div className="px-2 flex flex-col w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">57 Chevy</h2>
          <Image
            src="/assets/paintings/500x500/57_chevy_500x500.png"
            alt="An image of a painting entitled 57 Chevy"
            width={275}
            height={275}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Autumn</h2>
          <Image
            src="/assets/paintings/500x500/autumn_500x500.png"
            alt="An image of a painting entitled Autumn"
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
