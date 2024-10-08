import Image from "next/image"

export const AlternatingCurrentAndDirectCurrent = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Alternating Current {`&`} Direct Current
          </h2>
          <Image
            src="/assets/paintings/500x500/alternating_current_&_direct_current_1000x500.png"
            alt="An image of a painting entitled Alternating Current and a painting entitled Direct Current"
            width={380}
            height={380}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

export const AlternatingCurrentAndDirectCurrentMobile = () => {
  return (
    <div>
      <div>Alternating Current And Direct current Mobile</div>
    </div>
  )
}
