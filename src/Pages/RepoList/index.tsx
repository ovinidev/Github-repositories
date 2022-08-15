import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { RepositoryItem } from '../../components/RepositoryItem';
import { useDebounce } from '../../hooks/useDebounce';
import { Container, Title, RepositoryContent, Input } from './styles';

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
  const textRef = useRef<HTMLInputElement>({ value: '' } as HTMLInputElement);
  const [input, setInput] = useState('')

  const handleInputChange = () => {
    setInput(textRef.current.value)
  }

  const debounceInputChange = useDebounce(handleInputChange, 0);

  const { data, isLoading, error } = useQuery(['repos', { name: input, filter: 'day' }], async () => {
    const { data } = await axios.get<IRepositoryProps[]>('https://api.github.com/users/vinimedeiros13/repos');

    return data;
  }, {
    keepPreviousData: true,
    select: (data) => data.filter(repo => {
      return repo.name.toLowerCase().includes(input.toLowerCase());
    }),
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
        <Input onChange={debounceInputChange} ref={textRef} />
        <Link to="/test">TESTE</Link>
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