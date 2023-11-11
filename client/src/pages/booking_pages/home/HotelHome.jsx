
import Topbar from "../../../components/topbar/Topbar";
import Header from "../../../components/booking_components/header/Header";
import Featured from "../../../components/booking_components/featured/Featured";
import PropertyList from "../../../components/booking_components/propertyList/PropertyList";
import FeaturedProperties from "../../../components/booking_components/featuredProperties/FeaturedProperties";
import MailList from "../../../components/booking_components/mailList/MailList";
import Footer from "../../../components/booking_components/footer/Footer";
import './hotel_home.css'
import Sidebar from "../../../components/sidebar/Sidebar";

const HotelHome = () => {
  return (
    <div>
      <Topbar />
     
      <Header/>
      <div className="homeContainer">
     
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default HotelHome;
