import {Container} from './styles'

type Props = {
  repository: RepositoryProps;
}

export type RepositoryProps = {
  name: string;
  description: string;
  link: string;
}

export const RepositoryItem = ({ repository }: Props) => {
  return (
    <Container>
      <li>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>

        <a href={repository.link} target="_blank">Acessar repositório</a>
      </li>
    </Container>

  )
}