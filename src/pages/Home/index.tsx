import * as Element from "./styles"
import coffeeBanner from "../../assets/CoffeeLogo.png" 
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { Card } from "../../components/Card"

export function Home() {
  return (
    <Element.Root>
      <Element.Banner>
        <Element.BannerText>
          <Element.Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </Element.Title>
          <Element.Items>
            <span><div><ShoppingCart/> </div> Compra simples e segura</span>
            <span><div><Package/> </div> Embalagem mantém o café intacto</span>
            <span><div><Timer/> </div> Entrega rápida e rastreada</span>
            <span><div><Coffee/> </div> O café chega fresquinho até você</span>
          </Element.Items>
        </Element.BannerText>
        <img src={coffeeBanner} alt="Coffee Delivery" />
      </Element.Banner>
      <Element.Content>
        <h2>Nossos cafés</h2>
        <Card 
          image="/src/assets/CoffeeExpresso.png"
          tags={["Tradicional"]}
          title="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9.90}
        />
      </Element.Content>
    </Element.Root>
  )
}