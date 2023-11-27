import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";
import Service from "../Service/Service";

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>TechnoMinds | Home</title>
        </Helmet>
        <Banner />
        <Service></Service>
        <Testimonial></Testimonial>
        {/* TODO: map or shop location */}
      </div>
    );
};

export default Home;