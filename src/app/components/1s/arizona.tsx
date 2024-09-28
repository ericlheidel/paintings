import Image from "next/image"

export const ArizonaDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-center">&quot;Chicago&quot;</h2>
          <Image
            src="/assets/paintings/arizona.png"
            alt="An image of a painting entitled Chicago"
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

export const ArizonaMobile = () => {
  return (
    <div>
      <div>Arizona Mobile</div>
    </div>
  )
}
