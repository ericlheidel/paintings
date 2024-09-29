import Image from "next/image"

export const FunkAndDisco = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Funk {`&`} Disco
          </h2>
          <Image
            src="/assets/paintings/500x500/funk_&_disco_1000x500.png"
            alt="An image of a painting entitled Funk and a painting entitled Disco"
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
