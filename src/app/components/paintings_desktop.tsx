import { FaHome } from "react-icons/fa"
import { FiverDesktop } from "./5s/fiver"
import Link from "next/link"
import { TripleDesktop } from "./3s/triple"
import { ServingTrayDesktop } from "./3s/serving_tray"

export const PaintingsDesktop = () => {
  return (
    <div className="md:block hidden">
      <div className="flex flex-row justify-center">
        <FaHome size={30} color="aqua" />
        <div className="ml-4">
          <Link href="https://www.eheidel.com">Home</Link>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-8">
        <FiverDesktop />
        <TripleDesktop />
        <ServingTrayDesktop />
      </div>
    </div>
  )
}
