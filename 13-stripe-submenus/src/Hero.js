import classes from "./Hero.module.css";
import Button from "./UI/Button";

export default function Hero() {
  return (
    <section className={classes["hero"]}>
      <div className={classes["text-content"]}>
        <h1>Payments infrastructure for the internet</h1>
        <p>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe’s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <Button>Start now</Button>
      </div>
      <img
        src="https://react-projects-13-stripe-submenus.netlify.app/static/media/phone.58d7e3d6.svg"
        alt="mobile"
      />
    </section>
  );
}
