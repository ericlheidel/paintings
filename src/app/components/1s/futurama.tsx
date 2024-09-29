import Image from "next/image"

export const FuturamaDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Futurama</h2>
          <Image
            src="/assets/paintings/500x500/futurama_500x500.png"
            alt="An image of a painting entitled Futurama"
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

export const FuturamaMobile = () => {
  return (
    <div>
      <div className="px-2 flex flex-col w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Futurama</h2>
          <Image
            src="/assets/paintings/500x500/futurama_500x500.png"
            alt="An image of a painting entitled Futurama"
            width={275}
            height={275}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}
