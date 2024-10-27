import { Link, NavLink, useLocation } from "@remix-run/react";
import { useState } from "react";

import { useMediaQuery } from "~/hooks/useMediaQuery";
import { Twirl as Hamburger } from 'hamburger-react';
import { cn, customFontSizes } from "~/lib/utils";
import { Logo } from "./Logo";
import { desktopLinks, navLinks } from "~/config/main-routes";
import { Button, buttonVariants } from "../button";
import { Bird, CircleUserRound, Handshake, Home, LogIn, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../drawer";
import { ScrollArea } from "../scroll-area";
import { P } from "./CustomParagraph";
import { Separator } from "../separator";

import { useWindowScroll } from "react-use";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../navigation-menu";

const activeNavLinkClassName = (
  defaultTwClass: string,
  activeLinkTwClass: string,
  isActive: boolean,
  pendingLinkTwClass: string,
  isPending: boolean,
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined,
  buttonSize?: "default" | "sm" | "lg" | "icon" | null | undefined
) => {
  const buttonClassName = buttonVariants({
    variant: buttonVariant || "link",
    size: buttonSize || "default",
  });
  const localDefaultTwClass = cn(buttonClassName, defaultTwClass);
  if (isActive) {
    return cn(localDefaultTwClass, activeLinkTwClass);
  } else if (isPending) {
    return cn(localDefaultTwClass, pendingLinkTwClass);
  } else {
    return localDefaultTwClass;
  }
};

interface NavigationComponentsProps {
  theme?: "light" | "dark" | "system";
  children?: JSX.Element | JSX.Element[] | string;
}

export function NavigationComponents({ children, theme }: NavigationComponentsProps) {
  //comportamiento del tamaño de la pantalla
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  //Control de estado y comportamiento del menúbar, del drawer
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenChange = (newOpenState: boolean) => {
    setIsOpen(newOpenState);
  };
  const location = useLocation();
  const pathName = location.pathname;

  //Comportamiento de scroll para estilizado del navbar
  const { y } = useWindowScroll();

  const defaultNavbarClassName =
    "fixed top-0 z-[60] flex justify-between px-2 sm:p-4 py-2 transition-colors duration-500 ease-in bg-zinc-50/50 backdrop-blur-md dark:bg-zinc-950/50";

  let navbarClassName: string;
  if (y > 0) {
    navbarClassName = cn(
      defaultNavbarClassName,
      "bg-zinc-50/90 backdrop-blur-md dark:bg-zinc-950/90 border-b"
    );
  } else if (isOpen) {
    navbarClassName = cn(
      defaultNavbarClassName,
      "duration-100 bg-background dark:bg-zinc-950 border-b"
    );
  } else {
    navbarClassName = defaultNavbarClassName;
  }

  //Estilizado y estado de los botones Link
  const defaultLinkClassName =
    "flex gap-x-3 text-lg text-zinc-950 dark:text-customPrimary-50";

  const isLoggedIn = false;
  let user: User | null = null;
  if (isLoggedIn) {
    user = {
      id: 1,
      name: "Gonzalo Gutiérrez",
      email: "74060336@certus.edu.pe",
      password: "123456",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  //   // Escucha los cambios en el tema
  //   useEffect(() => {
  //     setThemeColorState(
  //       theme === 'dark' ? '#fcf64d' : '#0b0b09'
  //     );
  //   }, [theme]);

  //Switch dependiente del tamaño de pantalla
  if (isDesktop) {
    const activeClassName =
      "text-customPrimary-600 dark:text-customPrimary-300";
    const defaultClassName =
      "flex gap-x-3 text-lg text-customSecondary-950 dark:text-customPrimary-50";
    const pendingClassName =
      "text-customSecondary-950 dark:text-customPrimary-50";
  
  const desktopNavigationTriggerClassName = "bg-transparent flex gap-1";
  const desktopNavigationContentClassname = "p-4 min-w-[360px]";

    const className = ({
      isActive,
      isPending,
    }: {
      isActive: boolean;
      isPending: boolean;
    }) => {
      return activeNavLinkClassName(
        defaultClassName,
        activeClassName,
        isActive,
        pendingClassName,
        isPending
      );
    };

    return (
      <nav className="flex justify-center">
        <div className={cn(navbarClassName, "w-full justify-center")}>
          <div className="flex justify-between max-w-screen-2xl w-full px-10">
            <Logo theme={theme}></Logo>
            <NavigationMenu className="bg-transparent">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      cn(className({ isActive, isPending }), "justify-start")
                    }
                  >
                    <Home></Home>
                    <span>Inicio</span>
                  </NavLink>
                </NavigationMenuItem>
                {isLoggedIn && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={desktopNavigationTriggerClassName}
                    >
                      <Bird></Bird>
                      <span>Servicios</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      className={desktopNavigationContentClassname}
                    >
                      {desktopLinks.servicesLinks.map((link) => {
                        return (
                          <NavLink
                            key={link.pathName}
                            to={link.href}
                            className={({ isActive, isPending }) =>
                              cn(
                                className({ isActive, isPending }),
                                "justify-start"
                              )
                            }
                          >
                            {link.icon()}
                            <span>{link.pathName}</span>
                          </NavLink>
                        );
                      })}
                      <NavigationMenuLink></NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}
                {isLoggedIn && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={desktopNavigationTriggerClassName}
                    >
                      <CircleUserRound></CircleUserRound>
                      <span>Sesión</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      className={desktopNavigationContentClassname}
                    >
                      {desktopLinks.accountLinks.loggedInLinks.map((link) => {
                        return (
                          <NavLink
                            key={link.pathName}
                            to={link.href}
                            className={({ isActive, isPending }) =>
                              cn(
                                className({ isActive, isPending }),
                                "justify-start"
                              )
                            }
                          >
                            {link.icon()}
                            <span>{link.pathName}</span>
                          </NavLink>
                        );
                      })}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}
                {!isLoggedIn && (
                  <>
                    <NavigationMenuItem>
                      <NavLink
                        to={desktopLinks.accountLinks.LogInLink.href}
                        className={({ isActive, isPending }) =>
                          cn(
                            className({ isActive, isPending }),
                            "justify-start"
                          )
                        }
                      >
                        <LogIn></LogIn>
                        <span>Iniciar sesión</span>
                      </NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavLink
                        to={desktopLinks.accountLinks.RegisterLink.href}
                        className={({ isActive, isPending }) =>
                          cn(
                            className({ isActive, isPending }),
                            "justify-start"
                          )
                        }
                      >
                        <CircleUserRound></CircleUserRound>
                        <span>Registrarse</span>
                      </NavLink>
                    </NavigationMenuItem>
                  </>
                )}
                <NavigationMenuItem>
                  <NavLink
                    to={desktopLinks.accountLinks.pricing.href}
                    className={({ isActive, isPending }) =>
                      cn(className({ isActive, isPending }), "justify-start")
                    }
                  >
                    <Handshake></Handshake>
                    <span>Precios</span>
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>{children}</NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={cn(navbarClassName, 'w-full')}>
      <Logo theme={theme}></Logo>
      <Drawer direction="left" onOpenChange={handleOpenChange}>
        <DrawerTrigger>
          <Hamburger
            color={theme === "dark" ? "#5993FF" : "#002fff"}
            direction="left"
            rounded
            size={28}
            toggled={isOpen}
          />
        </DrawerTrigger>
        <DrawerContent className="pl-5 sm:py-4 min-h-fit">
          <ScrollArea className="h-full min-h-fit overflow-auto">
            <section className="pt-4 pr-4 flex justify-between items-start">
              <div className="flex gap-2">
                <DrawerClose asChild>
                  <Link to={"/profile"}>
                    <Avatar className="rounded-lg bg-gradient-to-b from-customSecondary-950/10 to-customSecondary-50/90 dark:from-customSecondary-50/20 dark:to-customSecondary-950/10">
                      <AvatarImage
                        src="/assets/AvatarExample.png"
                        alt="@GonzaloGutiérrez"
                      />
                      <AvatarFallback>GG</AvatarFallback>
                    </Avatar>
                  </Link>
                </DrawerClose>
                <div>
                  <P className="flex flex-col">
                    <span>Hola{", "}</span>
                    <span className={customFontSizes("lg")}>
                      {user?.name.split(" ")[0]}
                    </span>
                  </P>
                </div>
              </div>
              {/* <DrawerClose asChild>
                <Link to={"/cart"} className="dark:fill-customPrimary-50">
                  <Bag size={32} />
                </Link>
              </DrawerClose> */}
            </section>
            <Separator className="my-4"></Separator>
            <section>
              <ul className="flex flex-col gap-y-3">
                {navLinks.map((route) => {
                  const Icon = route.icon;
                  const isActive = pathName.startsWith(route.href);
                  const activeClassName =
                    "text-customPrimary-600 dark:text-customPrimary-400";
                  //const defultClassName =
                  // ('flex gap-x-3 text-lg text-customSecondary-950 dark:text-customPrimary-50');
                  const className: string = isActive
                    ? cn(defaultLinkClassName, activeClassName)
                    : defaultLinkClassName;
                  if (route.authentification && !isLoggedIn) {
                    return null;
                  }
                  return (
                    <li
                      key={route.pathName}
                      className="transition duration-100 ease-in transform hover:translate-x-2"
                    >
                      <DrawerClose asChild>
                        <Link to={route.href}>
                          <Button variant={"link"} className={className}>
                            <Icon />
                            <span className="text-customSecondary-950 dark:text-customPrimary-50">
                              {route.pathName}
                            </span>
                          </Button>
                        </Link>
                      </DrawerClose>
                    </li>
                  );
                })}
              </ul>
            </section>
            <Separator className="my-4"></Separator>
            <section
              className={cn(defaultLinkClassName, "px-4 items-center")}
            >
              {/* <MoonStars />
              <DarkModeSwitch className="text-lg flex grow justify-between"></DarkModeSwitch> */}
              {
                children
              }
            </section>
            <Separator className="my-4"></Separator>
            <section>
              {!isLoggedIn ? (
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <DrawerClose asChild>
                      <Link to="/login">
                        <Button
                          variant={"link"}
                          className={defaultLinkClassName}
                        >
                          <LogIn name="log-in" />
                          <span>Iniciar sesión</span>
                        </Button>
                      </Link>
                    </DrawerClose>
                  </li>
                  <li>
                    <DrawerClose asChild>
                      <Link to="/register">
                        <Button
                          variant={"link"}
                          className={defaultLinkClassName}
                        >
                          <CircleUserRound name="user-plus" />
                          <span>Registrarse</span>
                        </Button>
                      </Link>
                    </DrawerClose>
                  </li>
                </ul>
              ) : (
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <DrawerClose asChild>
                      <Link to="/logout">
                        <Button
                          variant={"link"}
                          className={defaultLinkClassName}
                        >
                          <LogOut />
                          <span>Cerrar sesión</span>
                        </Button>
                      </Link>
                    </DrawerClose>
                  </li>
                </ul>
              )}
            </section>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
