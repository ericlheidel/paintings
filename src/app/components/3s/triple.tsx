import Image from "next/image"

export const TripleDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-center">&quot;Boom&quot;</h2>
          <Image
            src="/assets/paintings/--500x500/tri_boom_500x500.png"
            alt="An image of a painting entitled Boom"
            width={230}
            height={230}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-center">&quot;Pow&quot;</h2>
          <Image
            src="/assets/paintings/--500x500/tri_pow_500x500.png"
            alt="An image of a painting entitled Pow"
            width={230}
            height={230}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-center">&quot;Surprise&quot;</h2>
          <Image
            src="/assets/paintings/--500x500/tri_surprise_500x500.png"
            alt="An image of a painting entitled Surprise"
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

export const TripleMobile = () => {
  return (
    <div>
      <div>Triple Mobile</div>
    </div>
  )
}
