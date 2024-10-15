import { Link } from '@remix-run/react';
import { SocialIcon } from 'react-social-icons'
import { Card } from '../card';

interface FooterProps {
    theme: 'light' | 'dark' | 'system'
}
export function Footer({theme}: FooterProps) {
    return (
      <div className="pt-8">
        <Card className="border-none rounded-2xl bg-white dark:bg-zinc-800">
          <footer
            className={
              "md:flex md:items-center md:justify-between p-4 md:p-6 xl:p-8"
            }
          >
            <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
              <figure>
                {theme == "dark" ? (
                  <img
                    className="size-[50px]"
                    src="/public/LogoSimboloDark.svg"
                    alt="Logo Footer"
                  />
                ) : (
                  <img
                    className="size-[50px]"
                    src="/public/LogoSimboloLight.svg"
                    alt="Logo Footer"
                  />
                )}
              </figure>
              <ul className="flex items-center flex-wrap mb-6 md:mb-0 text-zinc-400 dark:text-zinc-300">
                <li>
                  <Link
                    to="#"
                    className="text-sm font-normal hover:underline mr-4 md:mr-6"
                  >
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-normal hover:underline mr-4 md:mr-6"
                  >
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-normal hover:underline mr-4 md:mr-6"
                  >
                    Licensia
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-normal hover:underline mr-4 md:mr-6"
                  >
                    Política de cookies
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm font-normal hover:underline">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex sm:justify-center space-x-6 text-sm text-customPrimary-400 dark:text-customPrimary-300">
              <Link to="#" className=" hover:text-customPrimary-900">
                <SocialIcon network="facebook" />
              </Link>
              <Link to="#" className=" hover:text-customPrimary-900">
                <SocialIcon network="instagram" />
              </Link>
              <Link to="#" className=" hover:text-customPrimary-900">
                <SocialIcon network="tiktok" />
              </Link>
              <Link to="#" className=" hover:text-customPrimary-900">
                <SocialIcon network="whatsapp" />
              </Link>
            </div>
          </footer>
        </Card>
        <p className="text-center text-sm text-zinc-400 dark:text-zinc-300 mt-5">
          &copy; {new Date().getFullYear()}{" "}
          <Link to="#" className="hover:underline" target="_blank">
            Bugbusters
          </Link>
          . Todos los derechos reservados.
        </p>
      </div>
    );
}
  