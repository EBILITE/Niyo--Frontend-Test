import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";

const GalleryItems = ({
  id,
  title,
  timestamp,

  place_of_origin,
  artist_title,
  image_id,
}) => {
  const url = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;
  return (
    <Wrapper>
      <Link to={`/single/${id}`} className="ArtWrapper">
        <div className="ArtImg">
          <img src={url} alt="" />
        </div>
        <div className="DetailContainer">
          <p className="title">{title}</p>
          <p className="moment">{moment(timestamp).format("ll")}</p>
          <p className="moment">
            {artist_title}, {place_of_origin}
          </p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default GalleryItems;

const Wrapper = styled.div`
  /* border: 2px solid white; */
  border-top-left-radius: 200px;
  border-bottom-right-radius: 20px;

  .ArtWrapper {
  }
  .ArtImg {
    /* border: 2px solid blue; */
    height: 300px;
    width: 400px;
    position: relative;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-top-left-radius: 150px;
    }
  }
  .DetailContainer {
    /* border: 2px solid yellow; */
    width: 400px;
    background-color: #1a1405;
    padding: 1rem;
    border-bottom-right-radius: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
