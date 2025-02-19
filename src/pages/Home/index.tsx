import * as Element from "./styles"
import coffee from "../../assets/Coffee.png" 

export function Home() {
  return (
    <Element.Root>
      <Element.Banner>
        <Element.BannerText>
          <Element.Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </Element.Title>
          <Element.Itens>
            <span>Compra simples e segura</span>
            <span>Entrega rápida e rastreada</span>
            <span>Embalagem mantém o café intacto</span>
            <span>O café chega fresquinho até você</span>
          </Element.Itens>
        </Element.BannerText>
        <img src={coffee} alt="Coffee Delivery" />
      </Element.Banner>
    </Element.Root>
  )
}