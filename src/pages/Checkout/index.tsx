import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from 'phosphor-react'
import * as Element from './styles'
import { useTheme } from 'styled-components'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { NavLink } from 'react-router-dom'


export function Checkout() {
  const theme = useTheme()
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext)
  const [selected, setSelected] = useState<string | null>(null)

  const deliveryFee = 3.50
  const subTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const total = subTotal + deliveryFee

  function handleSelectPayment(method:string) {
    setSelected(method)
  }

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
            <button
              onClick={() => handleSelectPayment('credit')}
              className={selected === 'credit' ? 'active' : ''}
            >
              <CreditCard color={theme['purple']}/> Cartão de crédito
            </button>
            <button
              onClick={() => handleSelectPayment('debit')}
              className={selected === 'debit' ? 'active' : ''}
            >
              <Bank color={theme['purple']}/> cartão de débito
            </button>
            <button
              onClick={() => handleSelectPayment('cash')}
              className={selected === 'cash' ? 'active' : ''}
            >
              <Money color={theme['purple']}/> dinheiro
            </button>
          </Element.Buttons>
        </Element.Payment>
      </Element.Section>
      
      <Element.Order>
        <h2>Cafés selecionados</h2>
        <Element.ConfirmOrder>
          <Element.CoffeeList>
            {cart.map((item) => (
              <Element.CoffeeItem key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className='details'>
                  <h4>{item.title}</h4>
                  <div className='actions'>
                    <Element.QuantityControl>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity === 1}
                      >
                        <Minus weight='bold'/>
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus weight='bold'/>
                      </button>
                    </Element.QuantityControl>
                    <Element.RemoveButton onClick={() => removeFromCart(item.id)}>
                      <Trash />
                      Remover
                    </Element.RemoveButton>
                  </div>
                </div>
                <span className='price'>R$ {(item.price * item.quantity).toFixed(2)}</span>
              </Element.CoffeeItem>
            ))}
          </Element.CoffeeList>
            
          <Element.PriceOrder>
            <span>Total de itens <span>R$ {subTotal.toFixed(2)}</span></span>
            <span>Entrega <span>R$ {deliveryFee.toFixed(2)}</span></span>
            <strong>Total <strong>R$ {total.toFixed(2)}</strong></strong>
          </Element.PriceOrder>

          <NavLink 
            to='/concluido' 
            style={{ display: 'flex', width: '100%', textDecoration: 'none'}}
          >
            <Element.ConfirmButton>
              Confirmar Pedido
            </Element.ConfirmButton>
          </NavLink>
        </Element.ConfirmOrder>
      </Element.Order>
    </Element.Root>
  )
}