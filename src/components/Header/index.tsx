import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from '../../assets/Logo'
import * as Element from './styles'

export function Header() {
  return (
    <Element.Root>
      <Element.Logo>
        <Logo />
      </Element.Logo>

      <Element.Actions>
        <span><MapPin /> Porto Alegre, RS</span>
        <div>
          <ShoppingCart />
        </div>
      </Element.Actions>
    </Element.Root>
  )
}