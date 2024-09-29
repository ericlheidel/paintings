import Image from "next/image"

export const ADayAtTheRacesAndANightAtTheOperaDesktop = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap w-fit rounded-xl border-2 border-[#1BFFFF] ">
        <div>
          <h2 className="my-2 text-center">
            &quot;A Day at the Races {`&`} A Night at the Opera&quot;
          </h2>
          <Image
            src="/assets/paintings/500x500/a_day_at_the_races_&_a_night_at_the_opera_1000x500.png"
            alt="An image of a painting entitled A Day at the Races and a painting entitled A Night at the Opera"
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

export const ADayAtTheRacesAndANightAtTheOperaMobile = () => {
  return (
    <div>
      <div>A Day At The Races And A Night At The Opera Mobile</div>
    </div>
  )
}
