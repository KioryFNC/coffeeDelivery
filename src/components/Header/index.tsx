import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from '../../assets/Logo'
import * as Element from './styles'
import { useTheme } from 'styled-components'

export function Header() {
  const theme = useTheme()
  
  return (
    <Element.Root>
      <Element.Logo>
        <Logo />
      </Element.Logo>

      <Element.Actions>
        <span><MapPin /> Porto Alegre, RS</span>
        <div>
          <ShoppingCart color={theme['yellow-dark']} weight='fill'/>
        </div>
      </Element.Actions>
    </Element.Root>
  )
}