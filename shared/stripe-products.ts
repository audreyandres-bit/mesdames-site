/**
 * Stripe Products Configuration for MESDAMES Gift Cards
 * These are the gift card amounts available for purchase
 */

export const GIFT_CARD_PRODUCTS = [
  {
    id: "gift_card_50",
    name: "Carte Cadeau 50€",
    amount: 5000, // in cents
    currency: "eur",
    description: "Carte cadeau MESDAMES d'une valeur de 50€",
  },
  {
    id: "gift_card_75",
    name: "Carte Cadeau 75€",
    amount: 7500,
    currency: "eur",
    description: "Carte cadeau MESDAMES d'une valeur de 75€",
  },
  {
    id: "gift_card_100",
    name: "Carte Cadeau 100€",
    amount: 10000,
    currency: "eur",
    description: "Carte cadeau MESDAMES d'une valeur de 100€",
  },
  {
    id: "gift_card_150",
    name: "Carte Cadeau 150€",
    amount: 15000,
    currency: "eur",
    description: "Carte cadeau MESDAMES d'une valeur de 150€",
  },
  {
    id: "gift_card_200",
    name: "Carte Cadeau 200€",
    amount: 20000,
    currency: "eur",
    description: "Carte cadeau MESDAMES d'une valeur de 200€",
  },
];

export function getProductByAmount(amount: number) {
  return GIFT_CARD_PRODUCTS.find((p) => p.amount === amount);
}
