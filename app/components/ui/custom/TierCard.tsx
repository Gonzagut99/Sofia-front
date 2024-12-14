import { Tier } from "~/types/subscription-tiers"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card"
import { cn } from "~/lib/utils"
import { Check } from "lucide-react"
import { RainbowButton, rainBowButtonStyles } from "../RainbowButton"
import { Button, buttonVariants } from "../button"
import { Link } from "@remix-run/react"

interface TierCardProps extends React.HTMLAttributes<HTMLDivElement>{
    tierData: Tier
    actionCallback?: () => void
    type?:'buy' | 'update' | 'cancel' | 'free' | 'acquired'
  }
  export const TierCard = ({
    tierData,
    type = 'free',
    actionCallback,
    ...rest
  }: TierCardProps) => {
    const {name, originalPrice, discountedPrice, disccount, features, featured} = tierData
    const currency = '$USD'
    let tierText = ''
    switch (type) {
      case 'buy':
        tierText = 'Obtener'
        break
      case 'update':
        tierText = 'Actualizar'
        break
      case 'cancel':
        tierText = 'Cancelar'
        break
      case 'free':
        tierText = 'Actualizar'
        break
      case 'acquired':
        tierText = 'Administrar'
        break
      default:
        tierText = 'Obtener'
        break
    }
    return (
      <Card {...rest} className={cn('relative dark:bg-zinc-950 flex flex-col space-x-3 justify-between',featured?'shadow-customPrimary-500 shadow-sm scale-105':'')}>
         {
            disccount && 
            <div className="w-fit text-sm text-zinc-50 px-4 py-2 rounded-md bg-customPrimary-500 absolute top-2 right-2">{
              `- ${disccount}%`
            }</div>
          }
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-center">{name}</CardTitle>
         
          {
            disccount && 
            <CardDescription className="text-sm line-through text-zinc-600 dark:text-zinc-500">{originalPrice==0?'Gratis':`${originalPrice} ${currency}`}</CardDescription>
          }
          <CardDescription className="text-lg text-customPrimary-500 dark:text-customPrimary-400 font-semibold">{
              originalPrice==0?'Gratis':`${discountedPrice} ${currency}`
            }</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-inside text-sm text-zinc-600 dark:text-zinc-400">
            {features.map((feature) => (
              <li key={feature} className="flex space-x-1">
                <span><Check className="text-customPrimary-500 dark:text-customPrimary-400 w-4"></Check></span>
                <span>{feature}</span>
                </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          {/* {
            featured?
            <RainbowButton className="rounded-md text-lg transition-all hover:scale-110" onClick={actionCallback}>
              {
                tierText
              }
            </RainbowButton>:
            <Button variant={"outlinePrimary"} onClick={actionCallback}>
              {
                tierText
              }
            </Button>
          } */}
          <SubscriptionButton
            text={tierText}
            onClick={actionCallback}
            featured={featured}
            href={tierData.href}
            isExternal={tierData.isExternal}
          ></SubscriptionButton>
        </CardFooter>
      </Card>
    )
  }

  interface SubscriptionButtonProps{
    text: string
    onClick?: () => void
    href?: string
    featured?: boolean
    isExternal?: boolean
  }
  
  export const SubscriptionButton = ({text, featured, href, isExternal, onClick}:SubscriptionButtonProps) => {
    const rainbowButtonCustomStyles = "rounded-md text-lg transition-all hover:scale-110"
    if (href) {
      const className = featured ? cn(rainBowButtonStyles(), rainbowButtonCustomStyles) : buttonVariants({
        variant: 'outlinePrimary',
        size: 'default',
      })
      if (!isExternal) {
        return (
          <a href={href} target="_blank" rel="noreferrer" className={className}>
            {text}
          </a>
        )
      } else {
        return (
          <Link to={href} className={className}>
            {text}
          </Link>
        )
      }
    } else{
      
      if(featured){
        return (
          <RainbowButton className={rainbowButtonCustomStyles} onClick={onClick}>
            {text}
          </RainbowButton>
        )
      } else {
        return (
          <Button variant={"outlinePrimary"} onClick={onClick}>
            {text}
          </Button>
        )
      }
    }
  }
  