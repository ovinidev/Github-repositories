import { IDataProps } from '../RepositoryList'
import { Container } from './styles'

export const RepositoryItem = ({ data }: IDataProps) => {

  return (
    <Container>
      <li>
        <strong>{data.name}</strong>
        <p>{data.description}</p>

        <a href={data.clone_url} target="_blank">Acessar repositório</a>
      </li>
    </Container>

  )
}