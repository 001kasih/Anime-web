import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGlobalContext } from '../context/global';
import { setSelectedAnime } from '../redux/animeSlice'; // Periksa jalur ini
import styled from 'styled-components';
import Sidebar from './Sidebar';

function Popular({ rendered }) {
  const { popularAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === 'popular') {
      return popularAnime?.map((anime) => (
        <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
          <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        </Link>
      ));
    } else {
      return searchResults?.map((anime) => (
        <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
          <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        </Link>
      ));
    }
  };

  return (
    <PopularStyled>
      <div className="popular-anime">{conditionalRender()}</div>
      <Sidebar />
    </PopularStyled>
  );
}

const PopularStyled = styled.div`
  display: flex;
  background-color: #021024;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .popular-anime {
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 5rem;
    padding-right: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Perkecil ukuran elemen */
    grid-gap: 2rem;
    background-color: transparent;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    a {
      height: 400px; /* Perkecil tinggi elemen */
      border-radius: 7px;
      border: 5px solid #e5e7eb;
      overflow: hidden;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }
  }
`;

export default Popular;
