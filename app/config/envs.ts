import "dotenv/config";
import { z } from "zod";

interface EnvVars {
    BASE_BACKEND_URL: string;
    // JWT_SECRET_KEY: string;
    // JWT_EXPIRES_IN: string;
    // ENCRYPTION_SECRET_KEY: string;
    // STRIPE_MONTHLY_PLAN_LINK=https://buy.stripe.com/test_cN2dQS2rSaoo2QMcMM
    // STRIPE_YEARLY_PLAN_LINK=https://buy.stripe.com/test_00g5kmaYodAA8b67st
    // STRIPE_MONTHLY_PRICE_ID=price_1QVZrcD0U66Zs2Cio3WnbhuL
    // STRIPE_YEARLY_PRICE_ID=price_1QVZugD0U66Zs2Cixg1mxhDs
    STRIPE_SECRET_KEY: string;
    STRIPE_MONTHLY_PLAN_LINK: string;
    STRIPE_YEARLY_PLAN_LINK: string;
    STRIPE_MONTHLY_PRICE_ID: string;
    STRIPE_YEARLY_PRICE_ID: string;
    STRIPE_WEBHOOK_SECRET: string;
    STRIPE_CUSTOMER_PORTAL: string;
    VAK_CLASSIFICATION_MICROSERVICE_URL: string
    SCORE_PREDICTION_MICROSERVICE_URL: string
}

const envsSchema = z.object({
    BASE_BACKEND_URL: z.string().url(),
    // ENCRYPTION_SECRET_KEY: z.string().min(32),
    // JWT_SECRET_KEY: z.string().min(32),
    // JWT_EXPIRES_IN: z.string().min(1),
    STRIPE_SECRET_KEY: z.string(),
    STRIPE_MONTHLY_PLAN_LINK: z.string().url(),
    STRIPE_YEARLY_PLAN_LINK: z.string().url(),
    STRIPE_MONTHLY_PRICE_ID: z.string(),
    STRIPE_YEARLY_PRICE_ID: z.string(),
    STRIPE_WEBHOOK_SECRET: z.string(),
    STRIPE_CUSTOMER_PORTAL: z.string().url(),
    VAK_CLASSIFICATION_MICROSERVICE_URL: z.string().url(),
    SCORE_PREDICTION_MICROSERVICE_URL: z.string().url(),
}).passthrough(); // Allows additional environment variables. La función .passthrough() en Zod se utiliza para permitir que las propiedades no definidas en el esquema original pasen a través de la validación sin ser eliminadas.

const parsed = envsSchema.safeParse(process.env);
if (!parsed.success) {
    throw new Error(`Config validation error: ${parsed.error.message}`);
}

export const envVars: EnvVars = parsed.data;

export const envs = {
    backendUrl: envVars.BASE_BACKEND_URL,
    // encryptionSecretKey: envVars.ENCRYPTION_SECRET_KEY,
    // jwtSecretKey: envVars.JWT_SECRET_KEY,
    // jwtExpiresIn: envVars.JWT_EXPIRES_IN,
    stripeSecretKey: envVars.STRIPE_SECRET_KEY,
    stripeMonthlyPlanLink: envVars.STRIPE_MONTHLY_PLAN_LINK,
    stripeYearlyPlanLink: envVars.STRIPE_YEARLY_PLAN_LINK,
    stripeMonthlyPriceId: envVars.STRIPE_MONTHLY_PRICE_ID,
    stripeYearlyPriceId: envVars.STRIPE_YEARLY_PRICE_ID,
    stripeWebhookSecret: envVars.STRIPE_WEBHOOK_SECRET,
    stripeCustomerPortal: envVars.STRIPE_CUSTOMER_PORTAL,
    vakClassificationMicroserviceUrl: envVars.VAK_CLASSIFICATION_MICROSERVICE_URL,
    scorePredictionMicroserviceUrl: envVars.SCORE_PREDICTION_MICROSERVICE_URL
};
