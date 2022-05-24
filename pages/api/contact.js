import mailgun from "mailgun-js"
const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
})

const successCode = 200
const errorCode = 400
const customErrorCode = 500
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
}

// Our cloud function
export default function Contact(event, res) {

    let data = JSON.parse(JSON.stringify(event.body))

    let { name, email, destination, phone, city, error } = data

    let subject = `New Travel enquiry for ${destination} from ${name}`

    let message = `Hi this is ${name} from ${city}. I have planned for a trip to ${destination}. Reach out to me at ${phone} or ${email}`

    let errorMessage = null;

    console.log(data)

    if (!data) {
        errorMessage = "No form data supplied";
        console.log(errorMessage);
    } 
    if (!data.name) {
        errorMessage = "No NAME supplied";
        console.log(errorMessage);
    }
    if (!data.email) {
        errorMessage = "No EMAIL supplied";
        console.log(errorMessage);

    }
    if (!data.phone) {
        errorMessage = "No Phone Number supplied";
        console.log(errorMessage);

    }
    if (!data.destination) {
        errorMessage = "No Destination supplied";
        console.log(errorMessage);

    }
    if (!data.city) {
        errorMessage = "No City supplied";
        console.log(errorMessage);

    } 
    if (errorMessage){
        console.log("No Message Sent as " + errorMessage);
        // callback("No Message Sent as " + errorMessage);
        // res("No Message Sent as " + errorMessage);
        res.status(401).json({
            "error":"401",
            "body": errorMessage
        })
    }else{
        let mailOptions = {
            from: `${name} <${email}>`,
            to: process.env.TO_EMAIL_ADDRESS,
            replyTo: email,
            subject: `${subject}`,
            text: `${message}`,
        }
        
        mg.messages().send(mailOptions, (error, body) => {
            if (error) {
                console.log(error)
                res.status(401).json({
                    "errorCode": errorCode,
                    "body": JSON.stringify(error),
                })
            } else {
                console.log(body)
                res.status(200).json({
                    "successCode":successCode,
                    "body": "We have received your Message, We will reach you soon :)"
                })
            }
        })
    }
}

// export default Contact