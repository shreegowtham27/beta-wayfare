import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import LostImage from "../pages/Images/404.webp"
import Footer from './components/footer'
import NavBar from './components/navbar'

export default function FourOhFour() {
    return (
        <>
            <NextSeo
                title="404 - Page Not Found | Wayfare Holiday"
                description="404 - Page Not Found | Wayfare Holidays."
                canonical="https://www.wayfareholidays.com/"
                keywords="hotels, flights, travelocity, airline tickets, vacation, trip, plane tickets, travel agency, airlines, cheap airline tickets, airfare, fare, cheap airfare, destination, one travel, package, vacation packages, cheap plane tickets, travel channel, cheap airlines, travel news, budget travel, last minute travel, travel sites, chennai travel, Tamilnadu travel agency, travel agency near me, travel agency in chennai"
                openGraph={{
                url: 'https://www.wayfareholidays.com/',
                title: 'The Best International & Domestic Holiday provider in TamilNadu|Wayfare Holiday',
                description: '404 - Page Not Found | Wayfare Holidays.',
                images: [
                    {
                    url: 'https://www.wayfareholidays.com/logo.jpg',
                    width: 800,
                    height: 600,
                    alt: 'Wayfare Holidays',
                    type: 'image/jpeg',
                    }
                ],
                site_name: 'https://www.wayfareholidays.com/404',
                }}
                twitter={{
                handle: '@HolidaysWayfare',
                site: '@HolidaysWayfare',
                cardType: 'summary_large_image',
                }}
                additionalMetaTags={[{
                property: 'keywords',
                content: 'hotels, flights, travelocity, airline tickets, vacation, trip, plane tickets, travel agency, airlines, cheap airline tickets, airfare, fare, cheap airfare, destination, one travel, package, vacation packages, cheap plane tickets, travel channel, cheap airlines, travel news, budget travel, last minute travel, travel sites, chennai travel, Tamilnadu travel agency, travel agency near me, travel agency in chennai'
                }]}
            />
            <NavBar/>
            <h1 className="text-center">404 - Page Not Found</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Image src={LostImage} width={500} height={300}/>
            </div>
            <Link href="/">
            <button className="d-block mx-auto btn-primary p-3 px-5 my-3">
                Go back home
            </button>
            </Link>
            <Footer/>
        </>
    )
}