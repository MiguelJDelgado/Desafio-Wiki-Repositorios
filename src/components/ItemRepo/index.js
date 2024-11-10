import React from 'react'

import { ItemContainer } from './styles'; 

function ItemRepo({ repo, handleRemoveRepo }) {

  const handleRemove = (e) => {
    e.preventDefault();  
    handleRemoveRepo(repo.id);  
  }

  return (
    <ItemContainer> 
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a className='ver' href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
      <a href="#" onClick={handleRemove} className="remover">Remover</a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
