import { FaPhone,FaGithub } from 'react-icons/fa';
const Name = () => {
    return (
        <div className="name-container">
            <h2>Demetri Selmer</h2>
            <div className="cellPhoneIcon">
                <FaPhone />
                <p>312.605.2652</p>
                <a className="gitHubLink" href="https://github.com/dsh410">
                    <FaGithub />
                  
                </a>
               
            </div>
        </div>
    )
}

export default Name