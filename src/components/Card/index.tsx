import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ShoppingCart } from 'phosphor-react';
import { ButtonAdd } from '../ButtonAdd';
import * as Element from './styles'

interface CardProps {
  id: string;
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
}

export function Card({ id, image, tags, title, description, price}: CardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useContext(CartContext)

  function handleAddToCart() {
    addToCart({ id, image, title, price, quantity })
  }
    
  return (
    <Element.Root>
      <Element.Image src={image} alt={title}/>
      <Element.Tags>
        {tags.map((tag, index) => (
          <Element.Tag key={index}>{tag}</Element.Tag>
        ))}
      </Element.Tags>
      <Element.Title>{title}</Element.Title>
      <Element.Description>{description}</Element.Description>
      <Element.Value>
        <Element.Price>R$ <span>{(price * quantity).toFixed(2)}</span></Element.Price>
        <Element.QuantityAndCart>
          <ButtonAdd 
            quantity={quantity} 
            increment={() => setQuantity(quantity + 1)} 
            decrement={() => setQuantity(Math.max(1, quantity - 1))} 
          />
            <button className='cart-button' onClick={handleAddToCart}>
              <ShoppingCart color='white' weight='fill'/>
            </button>
        </Element.QuantityAndCart>
      </Element.Value>
    </Element.Root>
  )
}