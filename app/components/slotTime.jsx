'use client'
import './style.css';
import { useState } from "react";
import { MORNING_SLOTS, AFTERNOON_SLOTS } from "./Constant";
function SlotTime() {
    const [selectedSlot, setSelectedSlot] = useState(0)
    const [morningSelectedSlotIndex, setMorningSelectedSlotIndex] = useState(-1);
    const [afternoonSelectedSlotIndex, setAfternoonSelectedSlotIndex] = useState(-1);
    return (
        <div className="slotTime-mainParent">
            <div className="slot-secondMainParent">
                <div style={{
                    display: 'flex', alignItems: 'center', textUnderlineOffset: '10px', textDecoration: 'underline',
                    textDecorationColor: selectedSlot == 0 ? '#0aa9a9c9' : 'white', textDecorationThickness: '6px', justifyContent: 'center',
                }} onClick={() => {
                    setSelectedSlot(0)
                    setAfternoonSelectedSlotIndex(-1);
                }}>
                    <h4 className="daysName">Morning <span style={{ fontSize: '12px', fontWeight: 'normal' }}>({MORNING_SLOTS.length} slots)</span></h4>
                </div>
                <div style={{
                    display: 'flex', alignItems: 'center', textDecoration: 'underline',
                    textDecorationColor: selectedSlot == 1 ? '#0aa9a9c9' : 'white', textUnderlineOffset: '10px', textDecorationThickness: '6px', padding: '10px', justifyContent: 'center'
                }} onClick={() => {
                    setSelectedSlot(1)
                    setMorningSelectedSlotIndex(-1);
                }}>
                    <h4 className="daysName">Afternoon <span style={{ fontSize: '12px', fontWeight: 'normal' }}>({AFTERNOON_SLOTS.length} slots)</span></h4>
                </div>
            </div>
            <div className="timeSlots" style={{}}>
                {selectedSlot == 0 ? MORNING_SLOTS.map((value, index) => {
                    return <p key={index} className="slotMorning" style={{ backgroundColor: index === morningSelectedSlotIndex ? '#0aa9a9c9' : '#fbf3f3', marginTop: '20px', color: index === morningSelectedSlotIndex ? 'white' : 'black' }} onClick={() => { setMorningSelectedSlotIndex(index) }}>{value}</p>
                }) :
                    AFTERNOON_SLOTS.map((value, index) => {
                        return <p key={index} className="slotMorning" style={{  backgroundColor: index === afternoonSelectedSlotIndex ? '#0aa9a9c9' : '#fbf3f3', marginTop: '20px', color: index === afternoonSelectedSlotIndex ? 'white' : 'black' }} onClick={() => { setAfternoonSelectedSlotIndex(index) }}>{value}</p>
                    })
                }
            </div>
        </div>
    );
}
export default SlotTime;