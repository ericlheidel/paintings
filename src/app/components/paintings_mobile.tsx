import { FaHome } from "react-icons/fa"
import { FiverMobile } from "./5s/fiver"
import Link from "next/link"

export const PaintingsMobile = () => {
  return (
    <div className="md:hidden block">
      <div>Paintings MOBILE</div>
      <div className="mx-auto">
        <FaHome size={30} color="aqua" />
        <div className="ml-4">
          <Link href="https://www.eheidel.com">Home</Link>
        </div>
      </div>
      <FiverMobile />
    </div>
  )
}
