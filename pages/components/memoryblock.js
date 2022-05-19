import { Container } from "react-bootstrap"
import Link from "next/link"

const MemoryBlock = ()=>{
    return(
        <div className="bg-primary p-5 text-center mx-auto">
            <h1 className="text-light">Create a Memory to Remember</h1>
            <br/>
            <p className="text-white">Duis laborum sint aliqua incididunt non. Esse et ut deserunt minim eiusmod. Dolore ex est nulla sunt do pariatur sunt qui elit sunt ex.</p>
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