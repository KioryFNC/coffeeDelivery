import * as Element from './styles'
import illustration from '../../assets/Illustration.png'
import { useEffect, useState } from 'react'

export function Success() {
  const [orderDetails, setOrderDetails] = useState({
    endereco: '',
    bairro: '',
    cidade: '',
    uf: '',
    pagamento: '',
  })

  useEffect(() => {
    const storedData = localStorage.getItem('orderDetails')
    if (storedData) {
      setOrderDetails(JSON.parse(storedData))
    }
  }, [])

  return (
    <Element.Root>
      <Element.Information>
        <Element.Head>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Element.Head>
        <Element.Details>
          <span>Entrega em <strong>{orderDetails.endereco}</strong> <span>{orderDetails.bairro} - {orderDetails.cidade}, {orderDetails.uf}</span></span>  
          <span>Previsão de entrega <strong> <span>20 min - 30 min</span></strong></span>  
          <span>Pagamento na entrega <strong> <span>{orderDetails.pagamento}</span></strong></span>  
        </Element.Details>
      </Element.Information>
      <Element.Image>
        <img src={illustration}/>
      </Element.Image>
    </Element.Root>
  )
}