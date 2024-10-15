import { cn } from "~/lib/utils"
import { Card } from "../card"

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    className?: string
}

function CustomCard({ children,className, ...rest }: CustomCardProps) {                                                                                                                                                                
  return (
    <Card {...rest} className={cn("border-none outline-none shadow-md dark:bg-zinc-800", className)}>
        {children}
    </Card>
  )
}

export default CustomCard