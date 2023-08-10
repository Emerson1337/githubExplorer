import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
  description: string;
  html_url: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <h1>Repository: {params.repository}</h1>
      <br />
      <p>
        <strong>Description:</strong> {params.description}
      </p>
      <br />
      <a target="_blank" href={`https://github.com/${params.repository}`}>
        Open the repository
      </a>
      <br />
      <br />
      <a href={`/`}>Back</a>
    </>
  );
};

export default Repository;
