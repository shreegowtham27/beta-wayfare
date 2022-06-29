import Image from 'next/image'
import Link from 'next/link'
import LostImage from "../pages/Images/404.webp"

export default function FourOhFour() {
    return <>
        <h1 className="text-center">404 - Page Not Found</h1>
            <Image className="p-5 d-block mx-auto" src={LostImage} width={800} height={500}/>
        <Link href="/">
        <button className="btn-primary p-3">
            Go back home
        </button>
        </Link>
    </>
}