import './style.css'
import Image from 'next/image';
function Footer() {
    return (
        <div style={{ backgroundColor: '#273d64' }}>
            <div className='footer-mainParent'>
                <div className='foot'>
                    <ul>
                        <h3>Onemedical</h3>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='foot'>
                    <ul>
                        <h3>For patients</h3>
                        <li>Search for doctors</li>
                        <li>Search for clinics</li>
                        <li>Search for hospitals</li>
                        <li>Book Diagnostics Tests</li>
                        <li>Book Full Body Checkups</li>
                        <li>Practo Plus</li>
                        <li>Covid Hospital listing</li>
                        <li>Practo Care Clinics</li>
                        <li>Read health articles</li>
                        <li>Read about medicines</li>
                        <li>Health app</li>
                    </ul>
                </div>
                <div className='foot'>
                    <ul>
                        <h3>For doctors</h3>
                        <li>Onemedical Profile</li>
                    </ul>
                    <ul>
                        <h3 style={{ marginTop: '35px' }}>For clinics</h3>
                        <li>plan 01</li>
                        <li>plan 02</li>
                        <li>plan 03</li>
                    </ul>
                </div>
                <div className='foot'>
                    <ul>
                        <h3>For hospitals</h3>
                        <li>plan 01</li>
                        <li>plan 02</li>
                        <li>plan 03</li>
                    </ul>
                    <ul>
                        <h3 style={{ marginTop: '35px' }}>For Corporates</h3>
                        <li>Wellness Plans</li>
                    </ul>
                </div>
                <div className='foot'>
                    <ul>
                        <h3>More</h3>
                        <li>Help</li>
                        <li>Developers</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>PCS T&C</li>
                        <li>Healthcare Directory</li>
                        <li>Health Wiki</li>
                    </ul>
                </div>
                <div className='foot'>
                    <ul>
                        <h3>Social</h3>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Youtube</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
            <div style={{ textAlign:'center', paddingBottom: '20px' }}>
                <Image src="/images/footer-img.png" height={40} width={40} alt='footer' />
            </div>
            <div style={{backgroundColor:'#0aa9a9c9',color:'white',textAlign:'center',padding:'20px'}}>
                <p style={{fontSize:'12px'}}>2023| Terms & Conditions | Privacy Policy | Statutory Compliance | Program & Policies.</p>
            </div>
        </div>
    );
}
export default Footer;