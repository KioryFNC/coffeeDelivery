import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from '../../assets/Logo'
import * as Element from './styles'
import { useTheme } from 'styled-components'
import { NavLink } from 'react-router-dom'

export function Header() {
  const theme = useTheme()
  
  return (
    <Element.Root>
      <NavLink to='/'>
        <Logo />
      </NavLink>

      <Element.Actions>
        <span><MapPin /> Porto Alegre, RS</span>
        <NavLink to='/carrinho'>
          <ShoppingCart color={theme['yellow-dark']} weight='fill'/>
        </NavLink>
      </Element.Actions>
    </Element.Root>
  )
}