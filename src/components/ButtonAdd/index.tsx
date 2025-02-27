import * as Element from './styles'
import { Minus, Plus } from "phosphor-react"

interface ButtonAddProps {
  quantity: number;
  increment: () => void
  decrement: () => void
}

export function ButtonAdd({ quantity, increment, decrement }: ButtonAddProps) {
  return (
    <Element.Root>
      <Element.Button onClick={decrement} disabled={quantity === 1} aria-label="Diminuir quantidade">
        <Minus weight="bold"/>
      </Element.Button>
      <Element.Quantity>{quantity}</Element.Quantity>
      <Element.Button onClick={increment} aria-label="Aumentar quantidade">
        <Plus weight="bold"/>
      </Element.Button>
    </Element.Root>
  )
}