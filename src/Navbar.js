import { Button } from 'react-bootstrap';
import { useState } from "react";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import Contact from './Contact';

const Navbar = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowContact,setModalContact] = useState(false)
    return (



    <div className="btn-container">
        <Button variant="outline-warning" className="btn" onClick={() => setModalShow(true)}>
     projects
      </Button>
      
      <Button variant="outline-warning" className="btn"  onClick={() => setModalShow(true)}>
     About
      </Button>
      <Button variant="outline-warning" className="btn" onClick={() => setModalContact(true)}>
     Contact me!
        </Button>

            <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
            />
            <Contact
                show={modalShowContact}
      onHide={() => setModalContact(false)}/>
      </div>
    )

}

export default Navbar