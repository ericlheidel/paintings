import Image from "next/image"

export const StripesIDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-center">&quot;Stripes I&quot;</h2>
          <Image
            src="/assets/paintings/--500x500/stripes_I_500x500.png"
            alt="An image of a painting entitled Stripes I"
            width={210}
            height={210}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

export const StripesIMobile = () => {
  return (
    <div>
      <div>Stripes I Mobile</div>
    </div>
  )
}
