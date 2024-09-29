import { FaHome } from "react-icons/fa"
import { FiverMobile } from "./5s/fiver"
import Link from "next/link"
import { TripleMobile } from "./3s/triple"
import { ServingTrayMobile } from "./3s/serving_tray"
import { ArgyleMobile } from "./3s/argyle"
import { ConcaveSunsetMobile } from "./1s/concave_sunset"
import { CosmicBowlingMobile } from "./1s/cosmic_bowling"
import { EnvyMobile } from "./1s/envy"
import { Nashville } from "./1s/nashville"
import { Chicago } from "./1s/chicago"
import { LightingStudioMobile } from "./1s/lighting_studio"
import { ArizonaMobile } from "./1s/arizona"
import { ColorOfTheYearOneAndTwoMobile } from "./2s/color_of_the_year_1_and_2"
import { BeeStingMobile } from "./1s/bee_sting"
import { FuturamaMobile } from "./1s/futurama"
import { FourLittleDiamondsMobile } from "./1s/four_little_diamonds"
import { CitiesAndGreasedLightningMobile } from "./2s/cities_and_greased_lightning"
import { PrimaryMobile } from "./1s/primary"
import { FunkAndDisco } from "./2in1s/funk_disco"
import { AlternatingCurrentAndDirectCurrent } from "./2in1s/ac_dc"
import { FiftySevenChevyAndAutumnMobile } from "./2s/57_chevy_and_autumn"
import { ADayAtTheRacesAndANightAtTheOpera } from "./2in1s/races_opera"
import { StripesIMobile } from "./1s/stripes_I"

export const PaintingsMobile = () => {
  return (
    <div className="md:hidden flex flex-col gap-8 items-center">
      <div className="text-2xl font-semibold text-[#1BFFFF] flex flex-row justify-center">
        <FaHome size={30} color="aqua" />
        <div className="ml-2">
          <Link href="https://www.eheidel.com">Home</Link>
        </div>
      </div>
      <FiverMobile />
      <TripleMobile />
      <ServingTrayMobile />
      <ArgyleMobile />
      <ConcaveSunsetMobile />
      <CosmicBowlingMobile />
      <EnvyMobile />
      <Nashville />
      <Chicago />
      <LightingStudioMobile />
      <ArizonaMobile />
      <ColorOfTheYearOneAndTwoMobile />
      <BeeStingMobile />
      <FuturamaMobile />
      <FourLittleDiamondsMobile />
      <CitiesAndGreasedLightningMobile />
      <PrimaryMobile />
      <FunkAndDisco />
      <AlternatingCurrentAndDirectCurrent />
      <FiftySevenChevyAndAutumnMobile />
      <ADayAtTheRacesAndANightAtTheOpera />
      <StripesIMobile />
    </div>
  )
}
