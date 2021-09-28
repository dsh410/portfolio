import { Button } from 'react-bootstrap';
import { useState } from "react";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import Email from './Email';

const Navbar = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowEmail,setModalEmail] = useState(false)
    return (



    <div className="btn-container">
        <Button variant="outline-warning" className="btn" onClick={() => setModalShow(true)}>
     projects
      </Button>
      
      <Button variant="outline-warning" className="btn"  onClick={() => setModalShow(true)}>
     About
      </Button>
      <Button variant="outline-warning" className="btn" onClick={() => setModalEmail(true)}>
     Contact me!
        </Button>

            <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
            />
            <Email
                show={modalShowEmail}
      onHide={() => setModalEmail(false)}/>
      </div>
    )

}

export default Navbar