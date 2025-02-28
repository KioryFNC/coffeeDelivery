import { MapPinLine } from 'phosphor-react'
import * as Element from './styles'
import { useTheme } from 'styled-components'

export function Checkout() {
  const theme = useTheme()
  return (
    <Element.Root>
      <Element.Section>
        <h2>Complete seu pedido</h2>

        <Element.Address>
        <Element.AddressHeader>
          <MapPinLine color={theme['yellow-dark']} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Element.AddressHeader>
        <Element.Form>
          <input type='text' placeholder='CEP'/>
          <input type='text' placeholder='Rua'/>
          <div>
            <input type='text' placeholder='Número'/>
            <input type='text' placeholder='Complemento (Opcional)'/>
          </div>
          <div>
            <input type='text' placeholder='Baírro'/>
            <input type='text' placeholder='Cídade'/>
            <input type='text' placeholder='UF'/>
          </div>
        </Element.Form>
        </Element.Address>
      </Element.Section>
      <Element.Order>

      </Element.Order>
    </Element.Root>
  )
}