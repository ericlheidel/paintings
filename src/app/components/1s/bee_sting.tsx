import Image from "next/image"

export const BeeStingDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-center">&quot;Bee Sting&quot;</h2>
          <Image
            src="/assets/paintings/--500x500/bee_sting_500x500.png"
            alt="An image of a painting entitled Bee Sting"
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

export const BeeStingMobile = () => {
  return (
    <div>
      <div>Bee Sting Mobile</div>
    </div>
  )
}
