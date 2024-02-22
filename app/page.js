import DoctorList from "./components/doctorList";
import Filters from "./components/filters";
import Footer from "./components/footer";
import Header from "./components/header";
import Search from "./components/search";
export default function Home() {
  return (
    <div >
      <Header />
      <Search />
      <Filters />
      <DoctorList />
      <Footer />
    </div>
  );
}
