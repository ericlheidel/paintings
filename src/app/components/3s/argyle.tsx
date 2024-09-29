import Image from "next/image"

export const ArgyleDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            &quot;Argyle 1, 2 & 3&quot;
          </h2>
          <Image
            src="/assets/paintings/500x500/argyle_1_2_3_500x500.png"
            alt="An image of a 3 paintings of argyle patterns"
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

export const ArgyleMobile = () => {
  return (
    <div>
      <div>Argyle Mobile</div>
    </div>
  )
}
