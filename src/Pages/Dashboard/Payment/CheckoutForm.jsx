import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCheckOut from "../../../Hooks/useCheckOut";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const CheckoutForm = () => {
   const [check, refetch] = useCheckOut();
    const totalCost = check.reduce( (total, item) => total + item.cost ,0)
    const [error, setError] = useState('');
    const {user} = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.post("/create-payment-intent", {cost: totalCost} )
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    }, [totalCost, axiosSecure])


    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('payment error', error);
            setError(error.message)
        } else{
            console.log('payment method', paymentMethod);
            setError('')
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('error')
        } else{
            console.log(paymentIntent)
            if (paymentIntent.status === "succeeded") {
                refetch()
              console.log(paymentIntent.id);
              setTransactionId(paymentIntent.id);

              const payment = {
                email: user.email,
                cost: totalCost,
                cardIds: check.map((item) => item._id),
                productIds: check.map((item) => item.productId),
              };

              try {
                const res = await axiosSecure.post("/payments", payment);
                console.log(res.data);
              } catch (error) {
                console.error("Error making payment request:", error);
              }
            }

        }
    }


    return (
      <div className="w-[800px] mx-auto">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button className="btn w-[80px] rounded-none text-white bg-[#f31312] border-none" type="submit" disabled={!stripe || !clientSecret}>
            Pay
          </button>
          <p className="text-red-600">{error}</p>
          {transactionId && <p className="text-green-600">  Your transaction Id: {transactionId}</p>}
        </form>
      </div>
    );
};

export default CheckoutForm;