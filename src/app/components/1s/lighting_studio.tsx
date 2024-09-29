import Image from "next/image"

export const LightingStudioDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div className="w-[300px]">
          <p className="p-4">
            This was a very fun project I did for a friend. He was moving his
            lighting company to a new office and asked me to paint the room that
            would be used for programming lighting for concerts. I did not
            realize at the time how much work it would be, but I finished the
            project well before the deadline.
          </p>
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Lighting Studio
          </h2>
          <Image
            src="/assets/paintings/500x500/lighting_studio_500x500.png"
            alt="An image of a lighting studio painted by Eric Heidel"
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

export const LightingStudioMobile = () => {
  return (
    <div>
      <div className="px-2 flex flex-col w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Lighting Studio
          </h2>
          <Image
            src="/assets/paintings/500x500/lighting_studio_500x500.png"
            alt="An image of a lighting studio painted by Eric Heidel"
            width={270}
            height={270}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div className="w-[250px] mx-auto">
          <p className="p-4">
            This was a very fun project I did for a friend. He was moving his
            lighting company to a new office and asked me to paint the room that
            would be used for programming lighting for concerts. I did not
            realize at the time how much work it would be, but I finished the
            project well before the deadline.
          </p>
        </div>
      </div>
    </div>
  )
}
