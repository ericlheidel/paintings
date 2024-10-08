import { PaintingsDesktop } from "./components/paintings_desktop"
import { PaintingsMobile } from "./components/paintings_mobile"

export default function Home() {
  return (
    <div className="p-6 w-full min-h-screen flex flex-col items-center">
      <h1 className="m-8 md:text-5xl text-3xl font-semibold text-[#1BFFFF]">
        My Old Paintings
      </h1>
      <PaintingsMobile />
      <PaintingsDesktop />
      <footer className="mt-2">
        <p className="text-center">Created by Eric Heidel, 2024</p>
        <p className="mt-2 text-center">Created with NextJS</p>
        <p className="mt-2 text-center">Styled with TailwindCSS</p>
        <p className="mt-2 text-center">
          All images are intellectual property of Eric Heidel
        </p>
      </footer>
    </div>
  )
}
