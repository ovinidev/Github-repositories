import { IRepositoryProps } from '../RepositoryList'
import { Container } from './styles'

export const RepositoryItem = ({ name, description, clone_url }: IRepositoryProps) => {

  return (
    <Container>
      <li>
        <strong>{name}</strong>
        <p>{description}</p>

        <a href={clone_url} target="_blank">Acessar repositório</a>
      </li>
    </Container>

  )
}