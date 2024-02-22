import Image from "next/image";
import './style.css';
function Search() {
    return (
        <div className="search-mainParent">
            <div className="location-heading">
                <Image src="/images/location.png" height={30} width={20} alt='location' />
                <h2 className="heading">Bangalore</h2>
            </div>
            <input className="inputSearch" type="search" placeholder="Search Nurses, Specialities, Symptons, Hospitals etc." />
        </div>
    );
}
export default Search;