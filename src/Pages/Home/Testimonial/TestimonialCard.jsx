
// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ testimonials }) => {
  // eslint-disable-next-line react/prop-types
  const { testimonial_description, img, name, date } = testimonials;
  return (
    <div >
      <div className="card bg-base-100 shadow-xl h-[400px] rounded-none">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-full w-[100px] h-[100px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold italic">{name}</h2>
          <p className="text-left">{testimonial_description}</p>
         <div className="justify-end w-full">
            <p className="text-[#f31312] pt-[-20px] mt-[-40px] mx-auto flex">{date}</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
