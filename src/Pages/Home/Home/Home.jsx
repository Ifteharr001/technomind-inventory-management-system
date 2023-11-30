import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";
import Service from "../Service/Service";
import Location from "../Locatiion/Location";

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>TechnoMinds | Home</title>
        </Helmet>
        <Banner />
        <Service></Service>
        <Testimonial></Testimonial>
        <Location></Location>
      </div>
    );
};

export default Home;