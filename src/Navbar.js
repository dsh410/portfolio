import { Button } from 'react-bootstrap';
import { useState } from "react";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import Contact from './Contact';
import AboutModal from './AboutModal';

const Navbar = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowContact, setModalContact] = useState(false)
    const [modalShowAbout,setModalAbout] = useState(false)
    return (



    <div className="btn-container">
        <Button variant="outline-warning" className="btn" onClick={() => setModalShow(true)}>
     projects
      </Button>
      
      <Button variant="outline-warning" className="btn"  onClick={() => setModalAbout(true)}>
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
                onHide={() => setModalContact(false)} />
             <AboutModal
      show={modalShowAbout}
      onHide={() => setModalAbout(false)}
            />
      </div>
    )

}

export default Navbar