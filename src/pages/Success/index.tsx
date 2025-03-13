import * as Element from './styles'
import illustration from '../../assets/Illustration.png'
import { useEffect, useState } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

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
  <span>
    <div>
      <MapPin color='white' weight='fill'/>
    </div>
    <div>
      Entrega em <strong>{orderDetails.endereco}</strong> <span>{orderDetails.bairro} - {orderDetails.cidade}, {orderDetails.uf}</span>
    </div>
  </span>  
  <span>
    <div>
      <Timer color='white' weight='fill'/>
    </div>
    <div>
      Previsão de entrega <strong><span>20 min - 30 min</span></strong>
    </div>
  </span>  
  <span>
    <div>
      <CurrencyDollar color='white' weight='fill'/>
    </div>
    <div>
      Pagamento na entrega <strong><span>{orderDetails.pagamento}</span></strong>
    </div>
  </span>  
</Element.Details>

      </Element.Information>
      <Element.Image>
        <img src={illustration}/>
      </Element.Image>
    </Element.Root>
  )
}

{/* 
  <Element.Details>
    <span>
      <div>
        <MapPin color='white' weight='fill'/>
      </div>
      Entrega em <strong>{orderDetails.endereco}</strong> <span>{orderDetails.bairro} - {orderDetails.cidade}, {orderDetails.uf}</span>
    </span>  
    <span>
      <div>
        <Timer color='white' weight='fill'/>
      </div>
      Previsão de entrega <strong><span>20 min - 30 min</span></strong>
    </span>  
    <span>
      <div>
        <CurrencyDollar color='white' weight='fill'/>
      </div>
      Pagamento na entrega <strong> <span>{orderDetails.pagamento}</span></strong>
    </span>  
  </Element.Details> 
  */}