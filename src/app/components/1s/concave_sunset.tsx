import Image from "next/image"

export const ConcaveSunsetDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-center">&quot;Concave Sunset&quot;</h2>
          <Image
            src="/assets/paintings/concave_sunset.png"
            alt="An image of a painting entitled Concave Sunset"
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

export const ConcaveSunsetMobile = () => {
  return (
    <div>
      <div>Concave Sunset Mobile</div>
    </div>
  )
}
