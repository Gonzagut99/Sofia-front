import { Link } from "@remix-run/react";
import { Button } from "../button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "../card";

interface AuthHeaderProps {
  label: string;
  title: string;
}

const AuthHeader = ({ label, title }: AuthHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
      <p className="text-sm md:text-base text-muted-foreground">{label}</p>
    </div>
  );
};

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button variant="link" className="font-normal w-full text-sm md:text-base" size="sm" asChild>
      <Link to={href}>{label}</Link>
    </Button>
  );
};

interface AuthCardProps {
  label: string;
  title: string;
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
}

const AuthCard = ({
  label,
  title,
  backButtonHref,
  backButtonLabel,
  children,
}: AuthCardProps) => {
  return (
    <Card className=" px-7 sm:px-10 md:px-12 lg:px-30 ">
      <CardHeader className="p-0 mt-7">
        <AuthHeader label={label} title={title} />
      </CardHeader >
      <CardContent className="p-0"
      >{children}</CardContent>
      <CardFooter className=" p-8 pt-5 " > 
        <BackButton   label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default AuthCard;