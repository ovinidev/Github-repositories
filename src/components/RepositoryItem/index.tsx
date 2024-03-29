import { IDataProps } from '../../Pages/RepoList'
import { Container } from './styles'

export const RepositoryItem = ({ data }: IDataProps) => {

  return (
    <Container>
      <ul>
        <li>
          <strong>{data.name}</strong>
          <p>{data.description}</p>

          <a href={data.clone_url} target="_blank">Acessar repositório</a>
        </li>
      </ul>

    </Container>

  )
}