import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
	return (
		<div className="container flex gap-5 items-center ml-20 my-7 py-3 ">
			<Link href={"/"}><Image
				src="/GoodMeals.png"
				width={120}
				height={120}
				alt="Picture of the author"
			/></Link>
			<div className="flex gap-x-14 items-center bg-white my-3 px-20 py-3 rounded-full shadow-sm">
				<Link href={"/"}><h2 className="text-l">Inicio</h2></Link>
				<Link href={"/"}><h2 className="text-l">Menu</h2></Link>
				<Link href={"/"}><h2 className="text-l">Sobre Nosotros</h2></Link>
			</div>
		</div>
	)
}