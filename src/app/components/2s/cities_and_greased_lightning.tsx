import Image from "next/image"

export const CitiesAndGreasedLightningDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Cities</h2>
          <Image
            src="/assets/paintings/500x500/cities_500x500.png"
            alt="An image of a painting entitled Cities"
            width={200}
            height={200}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Greased Lightning
          </h2>
          <Image
            src="/assets/paintings/500x500/greased_lightning_500x500.png"
            alt="An image of a painting entitled Greased Lightning"
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

export const CitiesAndGreasedLightningMobile = () => {
  return (
    <div>
      <div className="px-2 flex flex-col w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Cities</h2>
          <Image
            src="/assets/paintings/500x500/cities_500x500.png"
            alt="An image of a painting entitled Cities"
            width={275}
            height={275}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Greased Lightning
          </h2>
          <Image
            src="/assets/paintings/500x500/greased_lightning_500x500.png"
            alt="An image of a painting entitled Greased Lightning"
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
