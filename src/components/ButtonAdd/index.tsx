import { useCallback, useState } from "react"
import * as Element from './styles'
import { Minus, Plus } from "phosphor-react"

export function ButtonAdd() {
  const [quantity, setQuantity] = useState(1)

  const decrement = useCallback(() => {
    setQuantity(prev => Math.max(1, prev - 1))
  }, []) 

  const increment = useCallback(() => {
    setQuantity(prev => prev + 1)
  }, []) 

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