"use client";
import { FaThumbsUp } from 'react-icons/fa';
import Image from "next/image";
import Slots from './slots';
import './style.css';

function Item(props) {
    const { bookAppointmentClick } = props
    const { selectedItemIndex } = props
    const { index } = props
    const { item } = props
    
    return (
        <div>
            <div className='item-mainParent'>
                <div className='img-parent'>
                    <Image
                        src={item.imgUrl}
                        width={100}
                        height={100}
                        alt="Health Logo" />
                    <p className='view'>View profile</p>
                </div>
                <div>
                    <h3 className='names'>{item.doctorName}</h3>
                    <p className='speciality'>{item.speciality}</p>
                    <p className='experience'>{`${item.experience} experience overall`}</p>
                    <span className='item-span'>
                        <div className='thumb-MainParent'>
                            <div className='thumb-parent'>
                                <FaThumbsUp size={10} color='white' />
                            </div>
                            <div className="like">
                                <h4 style={{ color: 'white' }}>{item.likes}</h4>
                            </div>
                        </div>
                        <div className='rating'>
                            <p className='ratingss'>{`${item.ratings} ratings`}</p>
                        </div>
                    </span>
                </div>
                <hr className='hr' />
                <div>
                    <div className='address-mainParent'>
                        <div className='img-itemparent'>
                            <Image src="/images/location.png" height={30} width={20} alt='location' />
                        </div>
                        <div>
                            <p className='address'>{item.address}</p>
                        </div>
                    </div>
                    <div className='lang-mainParent'>
                        <div className='img-langparent'>
                            <Image src="/images/languages.png" height={28} width={28} alt='language' />
                        </div>
                        <div>
                            <p className='lang'>{item.languages}</p>
                        </div>
                    </div>
                </div>
                <hr className='hr' />
                <div className='curr-mainParent'>
                    <div className='curr-imgParent'>
                        <Image src="/images/rupee-icon.png" height={30} width={28} alt='currency' />
                    </div>
                    <div >
                        <div className='price'>
                            <div>
                                <h5>₹{item.price}</h5>
                            </div>
                        </div>
                        <p className='fee'>Consltation fee</p>
                    </div>
                </div>
                <div className='btn-parent'>
                    <button className='btn' onClick={() => { bookAppointmentClick(index) }} >Book an Appointment</button>
                </div>
            </div>
            {selectedItemIndex === index ? <Slots /> : <div></div>}
        </div>
    );
}
export default Item;