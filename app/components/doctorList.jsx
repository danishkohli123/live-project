"use client"
import Item from "./item";
import './style.css';
import { DOCTOR_LIST } from "./Constant"
import { useState } from "react";
function DoctorList() {
    let doctorList = DOCTOR_LIST;
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
    const bookAppointmentClick = (index) => {
        setSelectedItemIndex(index);
    }
    return (
        <>
            <p className="intro">Home / Bangalore / Find DOctors /Dentist</p>
            <div className="doc-mainParent">
                <div className="doc-708-parent">
                    <p className="doc-708">708 doctors available in Bangalore</p>
                </div>
                <div className="doc-dropdown-parent">
                    <select id="myDropdown" className="dropdown-sort">
                        <option value="Sort By">Sort By</option>
                        <option value="option2">Sort By 2</option>
                        <option value="option3">Sort By 3</option>
                        <option value="option4">Sort By 4</option>
                    </select>
                </div>
            </div>
            {
                doctorList.map((item, index) => {
                    return <Item key={index} item={item} index={index} bookAppointmentClick={bookAppointmentClick} selectedItemIndex={selectedItemIndex} />;
                })
            }
        </>
    );
}
export default DoctorList;