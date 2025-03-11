import * as Element from './styles'
import illustration from '../../assets/Illustration.png'

export function Success() {
  return (
    <Element.Root>
      <Element.Information>
        <Element.Head>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Element.Head>
        <Element.Details>
          <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <span>Farrapos - Porto Alegre, RS</span></span>  
          <span>Previsão de entrega <strong> <span>20 min - 30 min</span></strong></span>  
          <span>Pagamento na entrega <strong> <span>Cartão de Crédito</span></strong></span>  
        </Element.Details>
      </Element.Information>
      <Element.Image>
        <img src={illustration}/>
      </Element.Image>
    </Element.Root>
  )
}