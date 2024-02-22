import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';
import './style.css';
function Header() {
    return (
        <div className="head-mainParent">
            <div>
                <Image src="/images/health-icon.png"
                    width={60}
                    height={40}
                    alt="Health Logo"
                    className="health-img" />
            </div>
            <div className="head-firstMainParent">
                <h5 className="underline-head">Find Doctors</h5>
                <h5>Find Nurses</h5>
                <h5>Medicines</h5>
                <h5>Lab Test</h5>
                <h5>Clinics</h5>
            </div>
            <div className="head-secondMainParent">
                <div className="firstdropdown-headparent">
                    <select id="myDropdown" className="firstdropdown">
                        <option value="Sort By">For Corporates</option>
                    </select>
                </div>
                <div className="seconddropdown-headparent">
                    <select id="myDropdown" className="seconddropdown">
                        <option value="Sort By">For Providers</option>
                    </select>
                </div>
                <div className="head-sec-parent">
                    <h6 className="sechelp">Security & Help</h6>
                </div>
                <div className="log-sign">
                    <h5>Login/SignUp</h5>
                    <FaArrowRight size={12} 
                    style={{ marginLeft: '3px', color: '#0aa9a9c9' }} />
                </div>
            </div>
        </div>
    );
}
export default Header;