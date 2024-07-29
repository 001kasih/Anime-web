import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context/global';

function Gallery() {
    const { getAnimePictures, pictures } = useGlobalContext();
    const { id } = useParams();

    // state
    const [index, setIndex] = React.useState(0);

    const handleImageClick = (i) => {
        setIndex(i);
    };

    React.useEffect(() => {
        getAnimePictures(id);
    }, [id]);

    return (
        <GalleryStyled>
            <div className="back">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                    Back to Home
                </Link>
            </div>
            <div className="gallery-container">
                <div className="big-image">
                    <img src={pictures[index]?.jpg.image_url} alt="Main" />
                </div>
                <div className="small-images">
                    {pictures?.map((picture, i) => (
                        <div
                            className="image-con"
                            onClick={() => handleImageClick(i)}
                            key={i}
                        >
                            <img
                                src={picture?.jpg.image_url}
                                alt={`Thumbnail ${i}`}
                                style={{
                                    border: i === index ? '3px solid #27AE60' : '3px solid #e5e7eb',
                                    filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
                                    transform: i === index ? 'scale(1.1)' : 'scale(1)',
                                    transition: 'all .3s ease-in-out',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </GalleryStyled>
    );
}

const GalleryStyled = styled.div`
    background-color: #052659; /* Background color */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    .back {
        position: absolute;
        top: 1rem;
        left: 1rem;
        z-index: 10;
        a {
            font-weight: 600;
            text-decoration: none;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.2rem;
            transition: color 0.3s ease;
            &:hover {
                color: #1e7f4d;
            }
        }
    }

    .gallery-container {
        display: flex;
        gap: 1rem;
        width: 90%;
        max-width: 1200px;
        margin-top: 2rem;

        .big-image {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            background-color: transparent;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

            img {
                width: 100%;
                max-width: 600px;
                border-radius: 8px;
                object-fit: cover;
            }
        }

        .small-images {
            flex: 1;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-template-rows: repeat(2, auto); /* Two rows */
            gap: 1rem; /* Gap between images */
            width: 100%;
            background-color: transparent;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

            .image-con {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.5rem; /* Padding around small images */
            }

            img {
                width: 100%;
                max-width: 100px; /* Size of small images */
                height: auto;
                cursor: pointer;
                border-radius: 5px;
                border: 3px solid #e5e7eb;
                object-fit: cover;
            }
        }
    }
`;

export default Gallery;

