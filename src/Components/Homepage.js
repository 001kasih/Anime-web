import React from 'react';
import { useGlobalContext } from '../context/global';
import Popular from './Popular';
import Upcoming from './Upcoming';
import Airing from './Airing';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
    const {
        handleSubmit,
        search,
        handleChange,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext();

    const [rendered, setRendered] = React.useState('popular');

    const switchComponent = () => {
        switch (rendered) {
            case 'popular':
                return <Popular rendered={rendered} />;
            case 'airing':
                return <Airing rendered={rendered} />;
            case 'upcoming':
                return <Upcoming rendered={rendered} />;
            default:
                return <Popular rendered={rendered} />;
        }
    };

    return (
        <HomepageStyled>
            <header className="bg-navbar text-white p-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex align-items-center">
                            <img src="/images/logo.png" alt="Logo" className="logo" />
                            <h1 className="ms-3">
                                {rendered === 'popular'
                                    ? 'Popular Anime'
                                    : rendered === 'airing'
                                    ? 'Airing Anime'
                                    : 'Upcoming Anime'}
                            </h1>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <div className="d-flex align-items-center gap-2">
                                <button
                                    className="btn btn-light"
                                    onClick={() => {
                                        setRendered('popular');
                                        getPopularAnime();
                                    }}
                                >
                                    Popular <i className="fas fa-fire"></i>
                                </button>
                                <button
                                    className="btn btn-light"
                                    onClick={() => {
                                        setRendered('airing');
                                        getAiringAnime();
                                    }}
                                >
                                    Airing
                                </button>
                                <button
                                    className="btn btn-light"
                                    onClick={() => {
                                        setRendered('upcoming');
                                        getUpcomingAnime();
                                    }}
                                >
                                    Upcoming
                                </button>
                            </div>
                        </div>
                    </div>
                    <form
                        className="mt-4 d-flex justify-content-center"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Search Anime"
                            value={search}
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn btn-search">
                            Search
                        </button>
                    </form>
                </div>
            </header>
            <main className="py-4">
                {switchComponent()}
            </main>
        </HomepageStyled>
    );
}

const HomepageStyled = styled.div`
    background-color: #052659;
    min-height: 100vh;

    header {
        
    }

    .logo {
        width: 60px; /* Adjust based on your logo size */
        height: auto;
    }

    .bg-navbar {
        background-color: #052659;
    }

    .btn-light {
        
        color: #495057;
        background-color: #f8f9fa;
    }

    .btn-search {
        background-color: #5483B3;
        color: #fff;
        transition: background-color 0.3s ease;
        
        &:hover {
            background-color: #4066A1;
            border-color: #4066A1;
        }
    }

    @media (max-width: 992px) { /* Adjust for medium screens */
        header {
            padding: 1rem;
        }

        .logo {
            width: 50px; /* Adjust for smaller screens */
        }

        h1 {
            font-size: 1.5rem;
        }

        .btn-light {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
        }

        .form-control {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
        }

        .btn-search {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 768px) { /* Adjust for small screens */
        header {
            padding: 1rem;
        }

        .logo {
            width: 40px; /* Adjust for very small screens */
        }

        h1 {
            font-size: 1.2rem;
        }

        .btn-light {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
        }

        .form-control {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
        }

        .btn-search {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
        }
    }
`;

export default Homepage;
