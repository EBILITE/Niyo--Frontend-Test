import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GalleryItems from "../../components/GalleryItems/GalleryItems";
import { getArtItems } from "../../features/ArtSlice";
// import backIcon from "../../assests/images/VectorBackButton.svg";
import { BiArrowBack } from "react-icons/bi";

const url = "https://api.artic.edu/api/v1/artworks";
const AllArts = () => {
  const { artItem, isLoading } = useSelector((store) => store.art);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtItems(url));
  }, [dispatch]);

  if (isLoading) {
    return <div className="loading loading-center"></div>;
  }
  return (
    <Wrapper>
      <div className="AllArts">
        <Link to="/" className="link">
          <BiArrowBack />
          <p>Back</p>
        </Link>
        <div className="AllArtsCon">
          {artItem.map((items) => {
            return <GalleryItems key={items.id} {...items} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default AllArts;

const Wrapper = styled.div`
  /* border: 2px solid white; */
  margin: 0 auto;
  /* height: 100vh; */
  margin-top: 2rem;

  .AllArts {
    /* border: 2px solid blue; */
    width: 95vw;
    max-width: var(--max-width);
    margin: 0 auto;

    .AllArtsCon {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 3rem;
      padding-top: 4rem;
    }
    p {
      color: white;
    }
  }
  .link {
    display: flex;
    gap: 1rem;
    svg {
      font-size: 44px;
      color: white;
    }
  }
  @media (min-width: 481px) and (max-width: 767px) {
    .AllArtsCon {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
