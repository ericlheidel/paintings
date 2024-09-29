import Image from "next/image"

export const PrimaryDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-center">&quot;Primary&quot;</h2>
          <Image
            src="/assets/paintings/primary.png"
            alt="An image of a painting entitled Primary"
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

export const CosmicBowlingMobile = () => {
  return (
    <div>
      <div>Primary Mobile</div>
    </div>
  )
}
