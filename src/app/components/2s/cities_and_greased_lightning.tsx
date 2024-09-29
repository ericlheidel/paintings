import Image from "next/image"

export const CitiesAndGreasedLightningDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-center">&quot;Cities&quot;</h2>
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
          <h2 className="my-2 text-center">&quot;Greased Lightning&quot;</h2>
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
      <div>Cities And Greased Lightning Mobile</div>
    </div>
  )
}
