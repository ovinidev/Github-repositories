import axios from 'axios';
import { useEffect, useState } from 'react';
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
  const [repositories, setRepositories] = useState<IRepositoryProps[]>([]);
  
  useEffect(() => {
    (async function getUser() {
      try {
        const response = await axios.get('https://api.github.com/users/vinimedeiros13/repos');
        setRepositories(response.data);
      } catch (error) {
        console.error(error);
      }
    }())
  }, [])

  return (
    <Container>
      <RepositoryContent>
        <Title>
          Lista de repositórios
        </Title>

        {repositories
          && repositories.map(item => {
            return (
              <ul>
                <RepositoryItem
                  key={item.id}
                  data={item}
                />
              </ul>
            )
          })
        }

      </RepositoryContent>
    </Container>
  )
}