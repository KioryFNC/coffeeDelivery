import * as Element from './styles'
import illustration from '../../assets/Illustration.png'

export function Success() {
  return (
    <Element.Root>
      <Element.Information>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <Element.Details>
          <span>Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos - Porto Alegre, RS</span>  
          <span>Previsão de entrega <span>20 min - 30 min</span></span>  
          <span>Pagamento na entrega <span>Cartão de Crédito</span></span>  
        </Element.Details>
      </Element.Information>
      <Element.Image>
        <img src={illustration}/>
      </Element.Image>
    </Element.Root>
  )
}