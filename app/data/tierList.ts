import { envs } from "~/config/envs";
import { Tier } from "~/types/subscription-tiers";

export const tiers: Tier[] = [
    {
      name: 'Plan Free',
      id: 'tier-hobby',
      href: envs.stripeMonthlyPlanLink,
      discountedPrice: 0,
      originalPrice: 0,
      isExternal: true,
      features: [
        'Acceso al contenido del blog de Sofía',
        'Uso de 3 prompts de Sofia Chat al día', 
        'Máximo de 100 tokens de IA por mes',
        'Creación de máximo 1 módulo administrativo de sección'
      ],
      featured: false,
    },
    {
      name: 'Plan Pro Mensual',
      id: 'tier-professional',
      href: envs.stripeMonthlyPlanLink,
      isExternal: true,
      discountedPrice: 5.00,
      originalPrice: 5.00,
      features: [
        'Prueba de 30 días gratuita',
        'Acceso ilimitado al contenido del blog de Sofía', 
        'Uso de 10 prompts de Sofia Chat al día', 
        'Máximo de 500 tokens de IA por mes',
        'Acceso ilimitado a los servicios administrativos por secciones de Sofía'
      ],
      featured: true,
    },
    {
      name: 'Plan Pro Anual',
      id: 'tier-business',
      href: envs.stripeYearlyPlanLink,
      isExternal: true,
      discountedPrice: 60.00,
      originalPrice: 49.00,
      disccount: 15,
      features: [
        'Acceso ilimitado al contenido del blog de Sofía', 
        'Uso de 10 prompts de Sofia Chat al día', 
        'Máximo de 500 tokens de IA por mes',
        'Acceso ilimitado a los servicios administrativos por secciones de Sofía'
      ],
      featured: false,
    },
  //   {
  //     name: 'Plan Enterprise',
  //     id: 'plan-enterprise',
  //     href: '#',
  //     priceMonthly: '$29',
  //     features: [
  //       'Evaluación y certificación en habilidades empresariales y liderazgo.', 
  //       'Certificación en competencias estratégicas, con retroalimentación', 
  //       'Hasta 20 salas simultáneas, ideal para evaluar varios grupos a la vez.', 
  //       'Análisis de habilidades en liderazgo y toma de decisiones.'],
  //     featured: false,
  //   }
  ]