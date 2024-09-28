import Image from "next/image"

export const ServingTrayDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF]">
        <div>
          <h2 className="my-2 text-center">&quot;Serving Tray #1&quot;</h2>
          <Image
            src="/assets/paintings/serving_tray_1.png"
            alt="An image of a painted serving tray"
            width={230}
            height={230}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-center">&quot;Serving Tray #2&quot;</h2>
          <Image
            src="/assets/paintings/serving_tray_2.png"
            alt="An image of a painted serving tray"
            width={230}
            height={230}
            priority
            unoptimized
            className="px-4 pb-4 shadow-xl"
          />
        </div>
        <div>
          <h2 className="my-2 text-center">&quot;Serving Tray #3&quot;</h2>
          <Image
            src="/assets/paintings/serving_tray_3.png"
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
      <div>Serving Tray Mobile</div>
    </div>
  )
}
