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
            <span><div><ShoppingCart color='white' weight='fill'/> </div> Compra simples e segura</span>
            <span><div><Package color='white' weight='fill'/> </div> Embalagem mantém o café intacto</span>
            <span><div><Timer color='white' weight='fill'/> </div> Entrega rápida e rastreada</span>
            <span><div><Coffee color='white' weight='fill'/> </div> O café chega fresquinho até você</span>
          </Element.Items>
        </Element.BannerText>
        <img src={coffeeBanner} alt="Coffee Delivery" />
      </Element.Banner>
      <Element.Content>
        <h2>Nossos cafés</h2>
        <Element.Cards>
          <Card
            id="1"
            image="/images/CoffeeExpresso.png"
            tags={["Tradicional"]}
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.90}
          />
          <Card
            id="2"
            image="/public/images/CoffeeAmericano.png"
            tags={["Tradicional"]}
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price={9.90}
          />
          <Card
            id="3"
            image="/public/images/CoffeeExpressoCremoso.png"
            tags={["Tradicional"]}
            title="Expresso Cremoso"
            description="Café expresso tradicional com espuma cremosa"
            price={9.90}
          />
          <Card
            id="4"
            image="/public/images/CoffeeCaféGelado.png"
            tags={["Tradicional", "Gelado"]}
            title="Expresso Gelado"
            description="Bebida preparada com café expresso e cubos de gelo"
            price={9.90}
          />
          <Card
            id="5"
            image="/public/images/CoffeeCaféComLeite.png"
            tags={["Tradicional", "com leite"]}
            title="Café com Leite"
            description="Meio a meio de expresso tradicional com leite vaporizado"
            price={9.90}
          />
          <Card
            id="6"
            image="/public/images/CoffeeLatte.png"
            tags={["Tradicional", "com leite"]}
            title="Latte"
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            price={9.90}
          />
          <Card
            id="7"
            image="/public/images/CoffeeCapuccino.png"
            tags={["Tradicional", "com leite"]}
            title="Capuccino"
            description="Bebida com canela feita de doses iguais de café, leite e espuma"
            price={9.90}
          />
          <Card
            id="8"
            image="/public/images/CoffeeMacchiato.png"
            tags={["Tradicional", "com leite"]}
            title="Macchiato"
            description="Café expresso misturado com um pouco de leite quente e espuma"
            price={9.90}
          />
          <Card
            id="9"
            image="/public/images/CoffeeMochaccino.png"
            tags={["Tradicional", "com leite"]}
            title="Mocaccino"
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.90}
          />
          <Card
            id="10"
            image="/public/images/CoffeeChocolateQuente.png"
            tags={["Especial", "Tradicional"]}
            title="Chocolate Quente"
            description="Bebida feita com chocolate dissolvido no leite quente e café"
            price={9.90}
          />
          <Card
            id="11"
            image="/public/images/CoffeeCubano.png"
            tags={["especial", "Alcoólico", "gelado"]}
            title="Cubano"
            description="Drink gelado de café expresso com rum, creme de leite e hortelã"
            price={9.90}
          />
          <Card
            id="12"
            image="/public/images/CoffeeHavaiano.png"
            tags={["especial"]}
            title="Havaiano"
            description="Bebida adocicada preparada com café e leite de coco"
            price={9.90}
          />
          <Card
            id="13"
            image="/public/images/CoffeeÁrabe.png"
            tags={["especial"]}
            title="Árabe"
            description="Bebida preparada com grãos de café árabe e especiarias"
            price={9.90}
          />
          <Card
            id="14"
            image="/public/images/CoffeeIrlandês.png"
            tags={["especial", "Alcoólico"]}
            title="Irlandês"
            description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            price={9.90}
          />
        </Element.Cards>
      </Element.Content>
    </Element.Root>
  )
}