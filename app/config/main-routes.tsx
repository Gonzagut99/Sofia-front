import { Home, BotMessageSquare, GraduationCap, CalendarCheck, CircleUser, CreditCard, LogOut, LogIn } from 'lucide-react'
  interface Route {
    href: string;
    pathName: string;
    icon: () => JSX.Element;
    authentification?: boolean;
  }
  
  export const navLinks: Route[] = [
    {
      href: '/',
      pathName: 'Inicio',
      icon: ()=> <Home/>
    },
    {
      href: '/services',
      pathName: 'Chat Sofia',
      icon: () => <BotMessageSquare/>,
      authentification: true
    },
    {
      href: '/sections',
      pathName: 'Mis secciones',
      icon: () => <GraduationCap/>,
      authentification: true
    },
    {
      href: '/session-plans',
      pathName: 'Mis sesiones planificadas',
      icon: () => <CalendarCheck/>,
      authentification: true
    },
    {
      href: '/my-account',
      pathName: 'Mi cuenta',
      icon: () => <CircleUser/>,
      authentification: true
    },
    {
      href: '/subscriptions',
      pathName: 'Mi suscripción',
      icon: () => <CreditCard/>,
      authentification: true
    }
    
    // { href: "/logout", pathName: "Cerrar sesión", icon: <SignOut/> },
  ];

  export const servicesLinks: Route[] = [
    {
      href: '/services',
      pathName: 'Chat Sofia',
      icon: () => <BotMessageSquare/>,
      authentification: true
    },
    {
      href: '/sections',
      pathName: 'Mis secciones',
      icon: () => <GraduationCap/>,
      authentification: true
    },
    {
      href: '/session-plans',
      pathName: 'Mis sesiones planificadas',
      icon: () => <CalendarCheck/>,
      authentification: true
    }
  ]

  export const accountLinks = {
    loggedInLinks: [
      {
        href: '/my-account',
        pathName: 'Mi cuenta',
        icon: () => <CircleUser/>,
        authentification: true
      },
      {
        href: '/subscription',
        pathName: 'Mi suscripción',
        icon: () => <CreditCard/>,
        authentification: true
      },
      {
        href: '/logout',
        pathName: 'Cerrar sesión',
        icon: () => <LogOut/>,
        authentification: true
      },
    ],
    LogInLink: {
      href: '/login',
      pathName: 'Iniciar Sesion',
      icon: () => <LogIn/>,
      authentification: false
    },
    pricing:{
      href: '/pricing',
      pathName: 'Precios',
      icon: () => <CreditCard/>,
      authentification: false
    }
  }

  export const desktopLinks = {
    sectionsLink: {
      href: '/sections',
      pathName: 'Mis secciones',
      icon: () => <GraduationCap/>,
      authentification: true
    },
    servicesLinks,
    accountLinks
  }