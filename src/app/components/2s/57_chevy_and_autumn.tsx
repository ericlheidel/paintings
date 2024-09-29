import Image from "next/image"

export const FiftySevenChevyAndAutumnDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-center">&quot;57 Chevy&quot;</h2>
          <Image
            src="/assets/paintings/57_chevy_500x500.png"
            alt="An image of a painting entitled 57 Chevy"
            width={200}
            height={200}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-center">&quot;Autumn&quot;</h2>
          <Image
            src="/assets/paintings/autumn_500x500.png"
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
      <div>57 Chevy And Autumn Mobile</div>
    </div>
  )
}
