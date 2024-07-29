import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context/global';

function Sidebar() {
  const { popularAnime } = useGlobalContext();

  const sorted = popularAnime?.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <SidebarStyled>
      <h3>Top 5 Popular</h3>
      <div className="anime">
        {sorted?.slice(0, 5).map((anime) => {
          return (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
              <h5>{anime.title}</h5>
            </Link>
          );
        })}
      </div>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  margin-top: 2rem;
  background-color: transparent;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 200px;

  h3 {
    color: #fff;
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1.5rem;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 0.5rem;
  }

  .anime {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #052659;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      border-radius: 10px;
      padding: 0.5rem;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      }

      img {
        width: 100%;
        border-radius: 5px;
        border: 3px solid #e5e7eb;
        max-width: 120px;
      }

      h5 {
        margin-top: 0.5rem;
        font-size: 1rem;
        color: #052659;
        text-align: center;
      }
    }
  }
`;

export default Sidebar;
