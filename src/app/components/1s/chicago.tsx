import Image from "next/image"

export const Chicago = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Chicago</h2>
          <Image
            src="/assets/paintings/500x500/chicago_1000x500.png"
            alt="An image of a painting entitled Chicago"
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
