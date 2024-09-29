import Image from "next/image"

export const FiverDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Crumble</h2>
          <Image
            src="/assets/paintings/500x500/quin_1_crumble_500x500.png"
            alt="An image of a painting entitled Crumble"
            width={230}
            height={230}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Spaghetti & Meatballs
          </h2>
          <Image
            src="/assets/paintings/500x500/quin_2_spaghetti_and_meatballs_500x500.png"
            alt="An image of a painting entitled Spaghetti And Meatballs"
            width={230}
            height={230}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            The Great Divide
          </h2>
          <Image
            src="/assets/paintings/500x500/quin_3_the_great_divide_500x500.png"
            alt="An image of a painting entitled The Great Divide"
            width={230}
            height={230}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Brainstorm</h2>
          <Image
            src="/assets/paintings/500x500/quin_4_brainstorm_500x500.png"
            alt="An image of a painting entitled Brainstorm"
            width={230}
            height={230}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Geminiman</h2>
          <Image
            src="/assets/paintings/500x500/quin_5_geminiman_500x500.png"
            alt="An image of a painting entitled Geminiman"
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

export const FiverMobile = () => {
  return (
    <div>
      <div className="px-2 flex flex-col w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Crumble</h2>
          <Image
            src="/assets/paintings/500x500/quin_1_crumble_500x500.png"
            alt="An image of a painting entitled Crumble"
            width={275}
            height={275}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Spaghetti & Meatballs
          </h2>
          <Image
            src="/assets/paintings/500x500/quin_2_spaghetti_and_meatballs_500x500.png"
            alt="An image of a painting entitled Spaghetti And Meatballs"
            width={275}
            height={275}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            The Great Divide
          </h2>
          <Image
            src="/assets/paintings/500x500/quin_3_the_great_divide_500x500.png"
            alt="An image of a painting entitled The Great Divide"
            width={275}
            height={275}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Brainstorm</h2>
          <Image
            src="/assets/paintings/500x500/quin_4_brainstorm_500x500.png"
            alt="An image of a painting entitled Brainstorm"
            width={275}
            height={275}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">Geminiman</h2>
          <Image
            src="/assets/paintings/500x500/quin_5_geminiman_500x500.png"
            alt="An image of a painting entitled Geminiman"
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
