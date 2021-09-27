import { Button } from 'react-bootstrap';
import { useState } from "react";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

const Navbar = () => {
    const [modalShow, setModalShow] = useState(false);
    return (



    <div className="btn-container">
        <Button variant="outline-warning" className="btn" onClick={() => setModalShow(true)}>
     projects
      </Button>
      
      <Button variant="outline-warning" className="btn"  onClick={() => setModalShow(true)}>
     About
      </Button>
      <Button variant="outline-warning" className="btn" onClick={() => setModalShow(true)}>
     Contact me!
            </Button>
            <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
      </div>
    )

}

export default Navbar