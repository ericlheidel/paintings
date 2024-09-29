import Image from "next/image"

export const ServingTrayDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Serving Tray #1
          </h2>
          <Image
            src="/assets/paintings/500x500/serving_tray_1_500x500.png"
            alt="An image of a painted serving tray"
            width={230}
            height={230}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Serving Tray #2
          </h2>
          <Image
            src="/assets/paintings/500x500/serving_tray_2_500x500.png"
            alt="An image of a painted serving tray"
            width={230}
            height={230}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Serving Tray #3
          </h2>
          <Image
            src="/assets/paintings/500x500/serving_tray_3_500x500.png"
            alt="An image of a painted serving tray"
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

export const ServingTrayMobile = () => {
  return (
    <div>
      <div className="px-2 flex flex-col w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Serving Tray #1
          </h2>
          <Image
            src="/assets/paintings/500x500/serving_tray_1_500x500.png"
            alt="An image of a painted serving tray"
            width={275}
            height={275}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Serving Tray #2
          </h2>
          <Image
            src="/assets/paintings/500x500/serving_tray_2_500x500.png"
            alt="An image of a painted serving tray"
            width={275}
            height={275}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-lg font-semibold text-center">
            Serving Tray #3
          </h2>
          <Image
            src="/assets/paintings/500x500/serving_tray_3_500x500.png"
            alt="An image of a painted serving tray"
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
