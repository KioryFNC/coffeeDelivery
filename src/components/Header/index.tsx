import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from '../../assets/Logo'
import * as Element from './styles'
import { useTheme } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const theme = useTheme()
  const { cartQuantity } = useContext(CartContext)
  
  return (
    <Element.Root>
      <NavLink to='/'>
        <Logo />
      </NavLink>

      <Element.Actions>
        <span><MapPin color={theme['purple']} weight='fill'/> Santo André, SP</span>
        <NavLink to='/carrinho' style={{ position: 'relative'}}>
          <ShoppingCart color={theme['yellow-dark']} weight='fill'/>
          {cartQuantity > 0 && (
            <Element.CartBadge>{cartQuantity}</Element.CartBadge>
          )}
        </NavLink>
      </Element.Actions>
    </Element.Root>
  )
}