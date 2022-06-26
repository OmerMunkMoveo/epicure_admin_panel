import {Alert, Fade} from "react-bootstrap";
import {useState} from "react";

const BootStrapExamples = () => {
    const [show, setShow] = useState(true);
    return(
        <>
            <h1 style={{backgroundColor:"transparent"}}>
                Examples:
            </h1>

            {show && <Alert onClose={()=> setShow(false)} dismissible>
                <Alert.Heading>Omg its and error!!!</Alert.Heading>
                <p>
                    ready for it???

                </p>
            </Alert>}
        </>
    )
}
export default BootStrapExamples
