import { FaHome } from "react-icons/fa"
import { FiverDesktop } from "./5s/fiver"
import Link from "next/link"
import { TripleDesktop } from "./3s/triple"
import { ServingTrayDesktop } from "./3s/serving_tray"
import { ArgyleDesktop } from "./3s/argyle"
import { ConcaveSunsetDesktop } from "./1s/concave_sunset"
import { CosmicBowlingDesktop } from "./1s/cosmic_bowling"
import { EnvyDesktop } from "./1s/envy"
import { NashvilleDesktop } from "./1s/nashville"
import { ChicagoDesktop } from "./1s/chicago"
import { LightingStudioDesktop } from "./1s/lighting_studio"
import { ArizonaDesktop } from "./1s/arizona"
import { ColorOfTheYearOneAndTwoDesktop } from "./2s/color_of_the_year_1_and_2"
import { BeeStingDesktop } from "./1s/bee_sting"
import { FuturamaDesktop } from "./1s/futurama"
import { FourLittleDiamondsDesktop } from "./1s/four_little_diamonds"
import { CitiesAndGreasedLightningDesktop } from "./2s/cities_and_greased_lightning"

export const PaintingsDesktop = () => {
  return (
    <div className="md:block hidden">
      <div className="flex flex-row justify-center">
        <FaHome size={30} color="aqua" />
        <div className="ml-4">
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
        <NashvilleDesktop />
        <ChicagoDesktop />
        <LightingStudioDesktop />
        <ArizonaDesktop />
        <ColorOfTheYearOneAndTwoDesktop />
        <BeeStingDesktop />
        <FuturamaDesktop />
        <FourLittleDiamondsDesktop />
        <CitiesAndGreasedLightningDesktop />
      </div>
    </div>
  )
}
