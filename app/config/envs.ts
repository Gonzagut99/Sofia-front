import "dotenv/config";
import { z } from "zod";

interface EnvVars {
    BASE_BACKEND_URL: string;
    // JWT_SECRET_KEY: string;
    // JWT_EXPIRES_IN: string;
    // ENCRYPTION_SECRET_KEY: string;
}

const envsSchema = z.object({
    BASE_BACKEND_URL: z.string().url(),
    // ENCRYPTION_SECRET_KEY: z.string().min(32),
    // JWT_SECRET_KEY: z.string().min(32),
    // JWT_EXPIRES_IN: z.string().min(1),
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
};
