import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from 'phosphor-react'
import * as Element from './styles'
import { useTheme } from 'styled-components'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { NavLink } from 'react-router-dom'


export function Checkout() {
  const theme = useTheme()
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext)
  const [selected, setSelected] = useState<string | null>(null)

  const deliveryFee = 3.50
  const subTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const total = subTotal + deliveryFee

  const [formData, setFormData] = useState({
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    uf: '',
    pagamento: '',
  })

  const isFormValid =
    formData.rua.trim() !== '' &&
    formData.numero.trim() !== '' &&
    formData.bairro.trim() !== '' &&
    formData.cidade.trim() !== '' &&
    formData.uf.trim() !== '' &&
    selected !== null && cart.length > 0;

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value}))
  }

  function handleConfirmOrder() {
    const orderDetails = {
      endereco: `${formData.rua}, ${formData.numero}`,
      bairro: formData.bairro,
      cidade: formData.cidade,
      uf: formData.uf,
      pagamento: selected,
    };
  
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
  
    clearCart();
  }

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
          <input type='text' name='rua' placeholder='Rua' onChange={handleInputChange}/>
          <div>
            <input type='text' name='numero' placeholder='Número' onChange={handleInputChange}/>
            <input type='text' placeholder='Complemento (Opcional)'/>
          </div>
          <div>
            <input type='text' name='bairro' placeholder='Baírro' onChange={handleInputChange}/>
            <input type='text' name='cidade' placeholder='Cídade' onChange={handleInputChange}/>
            <input type='text' name='uf' placeholder='UF' onChange={handleInputChange}/>
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
              onClick={() => handleSelectPayment('Cartão de crédito')}
              className={selected === 'Cartão de Crédito' ? 'active' : ''}
            >
              <CreditCard color={theme['purple']}/> Cartão de crédito
            </button>
            <button
              onClick={() => handleSelectPayment('cartão de débito')}
              className={selected === 'Cartão de Débito' ? 'active' : ''}
            >
              <Bank color={theme['purple']}/> cartão de débito
            </button>
            <button
              onClick={() => handleSelectPayment('dinheiro')}
              className={selected === 'dinheiro' ? 'active' : ''}
            >
              <Money color={theme['purple']}/> Dinheiro
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
            to={isFormValid ? '/concluido' : '#'}
            onClick={isFormValid ? handleConfirmOrder : undefined}
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