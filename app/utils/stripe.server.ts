import { Stripe } from 'stripe';
import { envs } from '~/config/envs';

export const stripe = new Stripe(envs.stripeSecretKey ,{
    apiVersion: '2024-11-20.acacia',
    typescript: true,
});