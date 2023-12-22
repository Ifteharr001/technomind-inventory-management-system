import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
    return (
      <div>
        <h2 className="text-4xl text-center mt-16 mb-12  font-bold italic ...">
          {" "}
          <span className="text-[#f31312]">----</span>Payment{" "}
          <span className="text-[#f31312]">----</span>
        </h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    );
};

export default Payment;