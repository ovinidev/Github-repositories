import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { RepositoryItem } from '../RepositoryItem';
import { Container, Title, RepositoryContent } from './styles';

interface IRepositoryProps {
  id?: string,
  name: string,
  clone_url: string,
  description: string
}

export interface IDataProps {
  data: IRepositoryProps,
  item?: string
}

export const RepositoryList = () => {

  const { data, isLoading } = useQuery(['repos'], async () => {
    const { data } = await axios.get<IRepositoryProps[]>('https://api.github.com/users/vinimedeiros13/repos');

    return data;
  }, {
    staleTime: 1000 * 5
  })

  if (isLoading) {
    return (
      <RepositoryContent>
        <h1>Carregando...</h1>
      </RepositoryContent>

    )
  }

  return (
    <Container>
      <RepositoryContent>
        <Title>
          Lista de repositórios
        </Title>

        {data?.map(item => {
          return (
            <RepositoryItem
              key={item.id}
              data={item}
            />
          )
        })
        }

      </RepositoryContent>
    </Container>
  )
}