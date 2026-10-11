import Stripe from "stripe";

let stripeClient: Stripe | null = null;

/**
 * Created on first use. Importing this module must not throw during
 * `next build`, which loads route modules before runtime secrets exist.
 */
export function getStripe(): Stripe | null {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return null;
  }

  if (!stripeClient) {
    stripeClient = new Stripe(secretKey);
  }

  return stripeClient;
}

function requireStripe(): Stripe {
  const client = getStripe();

  if (!client) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  return client;
}

export const stripe: Stripe = new Proxy({} as Stripe, {
  get(_target, property) {
    const client = requireStripe();
    const value = Reflect.get(client, property, client);

    return typeof value === "function" ? value.bind(client) : value;
  },
});
