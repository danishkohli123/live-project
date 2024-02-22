import './style.css';
function Filters() {
    return (
        <div className="filter-mainParent">
            <div className="dropdown-parent">
                <div>
                    <select id="myDropdown" className="dropdown-gender">
                        <option value="Sort By">Gender</option>
                        <option value="option2">Male</option>
                        <option value="option3">Female</option>
                    </select>
                </div>
                <div>
                    <select id="myDropdown" className="dropdown-experience">
                        <option value="Sort By">Experience</option>
                        <option value="option2">5 Years</option>
                        <option value="option3">8 Years</option>
                        <option value="option4">12 Years</option>
                    </select>
                </div>
                <div>
                    <select id="myDropdown" className="dropdown-availabilty">
                        <option value="Sort By">Availabilty</option>
                        <option value="option2">Morning</option>
                        <option value="option3">Afternoon</option>
                        <option value="option4">Evening</option>
                    </select>
                </div>
            </div>
            <div className="filter-parent" >
                <select className="dropdown-filter" id="myDropdown">
                    <option value="Sort By">All Filter</option>
                    <option value="option2">filter 2</option>
                    <option value="option3">filter 3</option>
                    <option value="option4">filter 4</option>
                </select>
            </div>
        </div>
    );
}
export default Filters;