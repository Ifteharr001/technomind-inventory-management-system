import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>TechnoMinds | Home</title>
        </Helmet>
        <Banner />
        {/* TODO: service card */}
        <Testimonial></Testimonial>
        {/* TODO: map or shop location */}
      </div>
    );
};

export default Home;