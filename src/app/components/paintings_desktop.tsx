import { FaHome } from "react-icons/fa"
import { FiverDesktop } from "./5s/fiver"
import Link from "next/link"
import { TripleDesktop } from "./3s/triple"
import { ServingTrayDesktop } from "./3s/serving_tray"
import { ArgyleDesktop } from "./3s/argyle"
import { ConcaveSunsetDesktop } from "./1s/concave_sunset"
import { CosmicBowlingDesktop } from "./1s/cosmic_bowling"
import { EnvyDesktop } from "./1s/envy"
import { Nashville } from "./1s/nashville"
import { Chicago } from "./1s/chicago"
import { LightingStudioDesktop } from "./1s/lighting_studio"
import { ArizonaDesktop } from "./1s/arizona"
import { ColorOfTheYearOneAndTwoDesktop } from "./2s/color_of_the_year_1_and_2"
import { BeeStingDesktop } from "./1s/bee_sting"
import { FuturamaDesktop } from "./1s/futurama"
import { FourLittleDiamondsDesktop } from "./1s/four_little_diamonds"
import { CitiesAndGreasedLightningDesktop } from "./2s/cities_and_greased_lightning"
import { FiftySevenChevyAndAutumnDesktop } from "./2s/57_chevy_and_autumn"
import { FunkAndDisco } from "./2in1s/funk_disco"
import { AlternatingCurrentAndDirectCurrent } from "./2in1s/ac_dc"
import { ADayAtTheRacesAndANightAtTheOpera } from "./2in1s/races_opera"
import { PrimaryDesktop } from "./1s/primary"
import { StripesIDesktop } from "./1s/stripes_I"

export const PaintingsDesktop = () => {
  return (
    <div className="md:block hidden">
      <div className="text-3xl font-semibold text-[#1BFFFF] mb-4 flex flex-row justify-center">
        <Link href="https://www.eheidel.com">
          <FaHome size={30} color="aqua" className="mt-[2px]" />
        </Link>
        <div className="ml-2">
          <Link href="https://www.eheidel.com">Home</Link>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-8 justify-center">
        <FiverDesktop />
        <TripleDesktop />
        <ServingTrayDesktop />
        <ArgyleDesktop />
        <ConcaveSunsetDesktop />
        <CosmicBowlingDesktop />
        <EnvyDesktop />
        <Nashville />
        <Chicago />
        <LightingStudioDesktop />
        <ArizonaDesktop />
        <ColorOfTheYearOneAndTwoDesktop />
        <BeeStingDesktop />
        <FuturamaDesktop />
        <FourLittleDiamondsDesktop />
        <CitiesAndGreasedLightningDesktop />
        <PrimaryDesktop />
        <FiftySevenChevyAndAutumnDesktop />
        <FunkAndDisco />
        <AlternatingCurrentAndDirectCurrent />
        <ADayAtTheRacesAndANightAtTheOpera />
        <StripesIDesktop />
      </div>
    </div>
  )
}
