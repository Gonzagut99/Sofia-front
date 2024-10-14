import { Moon, Sun, Laptop } from 'lucide-react'
import { Button } from '../button'

interface ThemeIconProps {
    children?: JSX.Element | JSX.Element[] | string
    variant: 'light' | 'dark' | 'system'
}
export function ThemeButton({ variant,children }: ThemeIconProps) {
  return (
    <Button className='dark:text-white' type='submit'>
        {variant === 'light' && (
            <Sun />
        )}
        {variant === 'dark' && (
            <Moon />
        )}
        {variant === 'system' && (
            <Laptop />
        )}
        <span className="sr-only">{variant}</span>
        { children }
    </Button>
  )
}