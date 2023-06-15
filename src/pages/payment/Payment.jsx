import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_pk);

const Payment = ({ cls }) => {
  return (
    <div>
      <div className="space-y-3">
        <h2 className="text-3xl text-center">Pay with your Card</h2>
        <h2 className="text-3xl text-center">
          Total Bill: <span>{cls.price}$</span>
        </h2>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm cls={cls}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
