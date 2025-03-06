import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
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

        <Element.Payment>
          <Element.PaymentHeader>
            <CurrencyDollar color={theme['purple']}/>
            <div>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </Element.PaymentHeader>
          <Element.Buttons>
            <button><CreditCard color={theme['purple']}/> Cartão de crédito</button>
            <button><Bank color={theme['purple']}/> cartão de débito</button>
            <button><Money color={theme['purple']}/> dinheiro</button>
          </Element.Buttons>
        </Element.Payment>
      </Element.Section>
      <Element.Order>
        <h2>Cafés selecionados</h2>
        <Element.ConfirmOrder>
          <Element.CardDetails>
            <p>card</p>
          </Element.CardDetails>
          <Element.PriceOrder>
            <span>Total de itens</span>
            <span>Entrega</span>
            <strong>Total</strong>
          </Element.PriceOrder>
          <button>Confirmar Pedido</button>
        </Element.ConfirmOrder>
      </Element.Order>
    </Element.Root>
  )
}