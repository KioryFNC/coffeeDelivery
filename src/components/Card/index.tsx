import { ShoppingCart } from 'phosphor-react';
import { ButtonAdd } from '../ButtonAdd';
import * as Element from './styles'
import { useState } from 'react';

interface CardProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
}

export function Card({ image, tags, title, description, price}: CardProps) {
  const [quantity, setQuantity] = useState(1)
  
    const decrement = () => {
      setQuantity((prev) => Math.max (1, prev - 1))
    }
  
    const increment = () => {
      setQuantity((prev) => prev + 1)
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
        <ButtonAdd quantity={quantity} increment={increment} decrement={decrement}/>
        <div>
          <ShoppingCart color='white' weight='fill'/>
        </div>
      </Element.Value>
    </Element.Root>
  )
}