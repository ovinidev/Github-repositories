import { useState } from 'react';
import { RepositoryItem, RepositoryProps } from '../RepositoryItem/RepositoryItem';
import { Container, Title } from './styles';

const repository = {
  name: 'Repository',
  description: 'Forms in React',
  link: 'https://github.com/vinimedeiros13/Github-repositories'
}

export const RepositoryList = () => {

  return (
    <Container>
      <Title>
        Lista de repositórios
      </Title>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>

    </Container>
  )
}