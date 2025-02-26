import { ButtonAdd } from '../ButtonAdd';
import * as Element from './styles'

interface CardProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
}

export function Card({ image, tags, title, description, price}: CardProps) {
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
      <Element.Price>R$ <span>{price.toFixed(2)}</span></Element.Price>
      <ButtonAdd />
      
      </Element.Value>
    </Element.Root>
  )
}