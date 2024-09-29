import Image from "next/image"

export const NashvilleDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-center">&quot;Nashville&quot;</h2>
          <Image
            src="/assets/paintings/--500x500/nashville_1000x500.png"
            alt="An image of a painting entitled Nashville"
            width={430}
            height={430}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

export const NashvilleMobile = () => {
  return (
    <div>
      <div>Nashville Mobile</div>
    </div>
  )
}
