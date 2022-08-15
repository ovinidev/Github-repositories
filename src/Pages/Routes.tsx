import { Link, Route, Routes } from 'react-router-dom';
import { RepositoryList } from './RepoList';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RepositoryList />} />
      <Route path="/test" element={<div><Link to="/">home</Link></div>} />
    </Routes>
  );
}
