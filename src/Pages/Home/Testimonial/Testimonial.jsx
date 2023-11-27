import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState()
  useEffect(() => {
    fetch('testimonial.json')
    .then(res => res.json())
    .then(data => setTestimonial(data))
  }, [])
  
    return (
      <div className="bg-[#faf5f5] w-[1140px] mx-auto">
        <h2 className="text-4xl text-center mt-16 py-10  font-bold italic ...">
          {" "}
          <span className="text-[#f31312]">----</span> Users Feedback{" "}
          <span className="text-[#f31312]">----</span>
        </h2>
       <div className="grid grid-cols-2 gap-6 pl-4 pr-4 pb-8">
         {
          testimonial?.map(testimonials => <TestimonialCard key={testimonials._id} testimonials={testimonials}></TestimonialCard>)
        }
       </div>
        
      </div>
    );
};

export default Testimonial;