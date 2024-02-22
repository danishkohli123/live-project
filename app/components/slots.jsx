import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import SlotTime from './slotTime';
import './style.css';
import { DAYS } from './Constant';
import { useState } from 'react';
function Slots() {

    let todayDate = new Date();
    
    let tomorrowDate = new Date();
    tomorrowDate.setDate(todayDate.getDate() + 1);

    const [selectedDate,setSelectedDate] = useState(todayDate)

    let dateArray = Array.from({ length: 10 }, (_, index) => {
        const date = new Date();
        date.setDate(todayDate.getDate() + index);
        return date;
    });
    

    const getDaytitle = (date)=>{
        if(date.getDate() == todayDate.getDate()) {
            return  "TODAY"
        } else if(date.getDate() == tomorrowDate.getDate()) {
            return "TOMORROW"
        }    else{
            return""
        }
        
    }

    return (
        <>
            <div className='slot-mainParent'>
                <div className='Arrow'>
                    <FaArrowLeft size={14} />
                </div>
                <div className='updateDays'>
                    {dateArray.map((currentDate) =>
                        <div className='days' style={{background: currentDate.getDate() == selectedDate.getDate() ? '#0aa9a9c9' : 'white',color:currentDate.getDate() == selectedDate.getDate() ? 'white' : 'black'}} onClick={()=>{
                            setSelectedDate(currentDate)
                            }}>
                            <h4 className='namedays' >{DAYS[currentDate.getDay()]}</h4>
                            <h5>{currentDate.getDate()}</h5>
                            <p className='dayTitle'>{getDaytitle(currentDate)}</p>
                        </div>

                    )}
                </div>
                <div className='Arrow'>
                    <FaArrowRight size={14} />
                </div>
            </div>
            <SlotTime currentDate = {selectedDate}/>
        </>
    )
}
export default Slots;