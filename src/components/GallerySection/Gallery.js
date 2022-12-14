import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getArtItems } from "../../features/ArtSlice";
import GalleryItems from "../GalleryItems/GalleryItems";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Button from "../Button/Button";

const url = "https://api.artic.edu/api/v1/artworks";

const Gallery = () => {
  const { artItem, isLoading } = useSelector((store) => store.art);
  const dispatch = useDispatch();

  const [newSearch, setNewSearch] = useState("");

  // ====Fetching the url for the search input
  const fetchData = () => {
    const newUrl = `${url}/search?q=${newSearch}`;
    dispatch(getArtItems(newUrl));
  };

  useEffect(() => {
    console.log("dispatching ");
    dispatch(getArtItems(url));
    // eslint-disable-next-line
  }, []);

  console.log("in the gallary", isLoading);

  // ====Loader component
  // if (isLoading) {
  //   return <div className="loading loading-center"></div>;
  // }

  return (
    <Wrapper>
      <div className="Gallery">
        <div className="ArtHeadline">
          <h2>Art in the collection</h2>

          {/*  =============Search Input container============= */}
          <div className="Search">
            <FaSearch onClick={fetchData} />
            <input
              data-testid="gallary__search"
              placeholder="Search"
              type="text"
              value={newSearch}
              onChange={(e) => setNewSearch(e.target.value)}
            />
          </div>
        </div>
        <p>
          Browse a curated selection of art around the world, including museum
          exhibitions, gallery openings, upcoming and many more
        </p>
        {/* ===========================Mapping of infromation gotte from the store to display */}
        <div className="ArtGalleryContainer">
          {artItem.slice(0, 6).map((items) => {
            // =============GalleryItems COntaines the structure of the infromation being mapped to the gallery components
            return <GalleryItems key={items.id} {...items} />;
          })}
        </div>
        <div className="btnMore">
          <Button text="Exlore More" link="/allarts" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Gallery;

const Wrapper = styled.div`
  /* border: 2px solid white; */
  margin: 0 auto;
  /* height: 100vh; */
  margin-top: 2rem;
  .Gallery {
    /* border: 2px solid blue; */
    width: 95vw;
    max-width: var(--max-width);
    margin: 0 auto;
    p {
      margin-top: -10px;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: -0.01em;
      color: #ffffff;
    }
  }
  .ArtHeadline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 72px;
      letter-spacing: -0.03em;
      color: #ffffff;
    }
  }
  .ArtGalleryContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;
    padding-top: 4rem;
  }
  .Search {
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    width: 350px;
    background-color: #463201;
    border-radius: 20px;
    svg {
      color: #fbaf00;
      font-size: 22px;
    }
    input {
      width: 100%;
      padding: 0.2rem;
      background-color: #463201;
      border-style: none;
      color: white;
      ::placeholder {
        color: #fbaf00;
      }
    }
  }
  .btnMore {
    /* border: 2px solid red; */
    margin-bottom: 4rem;
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sec2 {
    position: sticky;
  }
  .sec1 {
    top: 55px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .Gallery {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      p {
        font-size: 15px;
      }
    }
    .ArtHeadline {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      h2 {
        font-size: 40px;
      }
    }
    .ArtGalleryContainer {
      display: flex;
      flex-direction: column;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 7rem;
    .Gallery {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      margin-top: 2rem;
      p {
        font-size: 15px;
      }
    }
    .ArtHeadline {
      /* margin-top: 2rem; */
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      h2 {
        font-size: 30px;
      }
    }
    .ArtGalleryContainer {
      display: flex;
      flex-direction: column;
    }
  }
`;
