import { NextSeo } from "next-seo"
import React from "react"
import { Container } from "react-bootstrap"
import Footer from "./components/footer"
import NavBar from "./components/navbar"

const PrivacyPolicy =() =>{
    return(
        <div className="privacy-page">
            <NextSeo
                title="Wayfare Holiday - Privacy Policy"
                description="We are the leading provider of holiday packages in and around Tamilnadu at an affordable cost with high quality service."
                canonical="https://www.wayfareholidays.com/"
                openGraph={{
                url: 'https://www.wayfareholidays.com/privacy-policy',
                title: 'Wayfare Holiday - Privacy Policy',
                description: 'We are the leading provider of holiday packages in and around Tamilnadu at an affordable cost with high quality service.',
                images: [
                    {
                    url: 'https://www.wayfareholidays.com/logo.jpg',
                    width: 800,
                    height: 600,
                    alt: 'Wayfare Holidays',
                    type: 'image/jpeg',
                    }
                ],
                site_name: 'https://www.wayfareholidays.com',
                }}
                twitter={{
                handle: '@HolidaysWayfare',
                site: '@HolidaysWayfare',
                cardType: 'summary_large_image',
                }}
            />
            <NavBar/>
            <Container>
                <h1 className="p-4 text-center">PRIVACY POLICY</h1>
                
                <p className="text-justify lh-lg">While data is critical to our goal of delivering exceptional service, the confidence of our clients is our most valuable asset. At Wayfare Holidays, keeping client personal information safe and secure and utilising it only as our clients would want us to is a key concern. So, here&apos;s our obligation to each of our unique customers:</p>
                
                <ol className="list-styled lh-lg">
                    <li>Any information our clients share with us will be protected according to strong security and confidentiality requirements.</li>
                    <li>We will limit the collection and use of customer information to the bare minimum required to provide superior service to our customers, which includes informing them about our products, services, and other opportunities, as well as to run our business, and we will only give access to that information to authorised employees who have been trained in the proper handling of customer information. Employees who break our Privacy Promise will face our standard disciplinary procedure.</li>
                    <li>We shall not disclose customer information to any third parties unless we have previously notified the customer through disclosures or agreements, or unless we are obligated by law to do so.</li>
                    <li>We will constantly keep the confidentiality of our customers&apos; information under our control. When a consumer expresses interest in a service or product, we may share customer information with respectable firms. Please note that this Privacy Policy does not apply to the use of customer information by these other companies.</li>
                    <li>We will expect those organisations that offer support services to adhere to our privacy standards and allow us to assess them for compliance whenever we engage them.</li>
                    <li>We will attempt to keep customer files complete, up-to-date, and accurate. We will tell our customers how and where to conveniently access their information (except when we’re prohibited by law) and how to notify us about errors which we will promptly correct.</li>
                </ol>
            </Container>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy