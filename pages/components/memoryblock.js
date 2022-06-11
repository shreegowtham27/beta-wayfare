import { Container } from "react-bootstrap"
import Link from "next/link"

const MemoryBlock = ()=>{
    return(
        <div className="bg-primary p-5 text-center mx-auto">
            <h1 className="text-light">Create a Memory to Remember</h1>
            <br/>
            <p><span className="text-white text-center font-weight-bolder d-block"><strong>Enrich your Memories with us</strong></span></p>
            <br/>
            <Link href="#contact">
                <button className="btn btn-outline-light px-4 py-2">
                    See Vlogs
                </button>
            </Link>
        </div>
    )
}

export default MemoryBlock