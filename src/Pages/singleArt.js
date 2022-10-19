import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { singleArtItems } from "../features/SingleSlice";
import { BiArrowBack } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import Button from "../components/Button/Button";

//  url for the Api
const url1 = "https://api.artic.edu/api/v1/artworks";

const SingleArt = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  // ========== Fetching the infoemation needed from the store
  const { singleItem } = useSelector((store) => store.singleArt);

  useEffect(() => {
    dispatch(singleArtItems(`${url1}/${id}`));
    // eslint-disable-next-line
  }, []);

  // Destructured the information gotten form the API

  const { title, image_id, thumbnail } = singleItem;

  // =============== Url to fetch Image =================
  const url = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;

  return (
    <Wrapper>
      <div className="singleItemContainer">
        <div className="iconCon">
          <Link to="/">
            <BiArrowBack />
          </Link>
          <FiShare2 />
        </div>
        <div className="detail">
          <div className="imageCon">
            <img src={url} alt="" />
          </div>
          <div className="TextCon">
            <div>
              <h4>{title}</h4>
              <p>{thumbnail?.alt_text}</p>
            </div>

            <div className="button">
              <Button text="Explore Art" link="/allarts" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleArt;

const Wrapper = styled.div`
  /* border: 2px solid white; */
  margin: 0 auto;
  height: 100vh;
  margin-top: 2rem;
  .singleItemContainer {
    /* border: 2px solid red; */
    width: 95vw;
    max-width: var(--max-width);
    margin: 0 auto;
    height: 100%;
  }
  .iconCon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      font-size: 34px;
      color: white;
    }
  }
  .detail {
    /* border: 2px solid white; */
    width: 80vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 2rem;
  }
  .imageCon {
    width: 500px;
    height: 600px;
    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 200px;
      border-bottom-right-radius: 200px;
    }
  }
  .TextCon {
    height: 550px;
  }
  h4,
  p {
    color: white;
  }
  .button {
    margin-top: 20rem;
    margin-right: 20px;
  }
  .sec1 {
    position: relative;
    top: 55px;
    left: -90px;
  }
  .sec2 {
    /* border: 2px solid white; */
    position: sticky;
    left: 10px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    .detail {
      display: flex;
      flex-direction: column;
    }
    .imageCon {
      width: 400px;
      height: 500px;
      img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 200px;
        border-bottom-right-radius: 200px;
      }
    }
    .button {
      margin-top: -2rem;
      margin-right: 20px;
    }
    .sec1 {
      position: relative;
      top: 55px;
      left: -100px;
    }
    .sec2 {
      /* border: 2px solid white; */
      position: sticky;
      left: 10px;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    p {
      font-size: 12px;
    }
    .detail {
      display: flex;
      flex-direction: column;
    }
    .imageCon {
      width: 300px;
      height: 400px;
      img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 200px;
        border-bottom-right-radius: 200px;
      }
    }
    .button {
      margin-top: -2rem;
      margin-right: 20px;
    }
    .sec1 {
      position: relative;
      top: 55px;
      left: -60px;
    }
    .sec2 {
      /* border: 2px solid white; */
      position: sticky;
      left: 10px;
    }
  }
`;
