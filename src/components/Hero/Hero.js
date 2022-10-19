import React from "react";
import styled from "styled-components";
import Star from "../../assests/images/star.svg";
import HeroImg from "../../assests/images/HeroImage2.png";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <Wrapper>
      <div className="HeroWrapper">
        <div className="HeroText">
          <h2>
            Discover amazing
            <br /> art around the <br />
            <span>world</span>
          </h2>
          <p>
            Browse a curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many more
          </p>

          <div className="StarContainer">
            <Button text="Explore Arts" link="/allarts" />
            <img src={Star} alt="" className="star" />
          </div>
        </div>

        <div className="ImageContainer">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  /* border: 2px solid white; */
  height: calc(100vh - 5rem);
  margin: 0 auto;

  .HeroWrapper {
    /* border: 2px solid yellow; */
    width: 95vw;
    height: calc(100vh - 10rem);
    max-width: var(--max-width);
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .HeroText {
    /* border: 2px solid white; */
    width: 50%;
    height: 100%;
    h2 {
      font-size: 68px;
      font-weight: 700;
      line-height: 72px;
      color: white;
      span {
        color: #fbaf00;
      }
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: white;
      width: 80%;
      padding-top: 1rem;
    }
    .StarContainer {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        position: absolute;
        left: 600px;
        bottom: 120px;
      }
    }
  }

  .ImageContainer {
    /* border: 2px solid crimson; */
    width: 50%;
    height: 100%;
    margin: 0 auto;
    img {
      width: 90%;
      height: 700px;
    }
  }

  .sec2 {
    position: sticky;
  }
  .sec1 {
    top: 55px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    /* border: 2px solid white; */
    margin: 0 auto;

    .HeroWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 1rem;
    }
    .ImageContainer,
    .star {
      visibility: hidden;
    }
    .HeroText {
      /* border: 2px solid white; */
      width: 100%;
      height: 100%;

      h2 {
        font-size: 40px;
        font-weight: 700;
        line-height: 72px;
        color: white;
        span {
          color: #fbaf00;
        }
      }
      p {
        font-weight: 400;
        font-size: 15px;
      }
      .StarContainer {
        width: 80%;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        /* justify-content: space-between; */
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0 auto;

    .HeroWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 1rem;
    }
    .ImageContainer,
    .star {
      visibility: hidden;
    }
    .HeroText {
      /* border: 2px solid white; */
      width: 100%;
      height: 100%;

      h2 {
        font-size: 40px;
        font-weight: 700;
        line-height: 72px;
        color: white;
        span {
          color: #fbaf00;
        }
      }
      p {
        font-weight: 400;
        font-size: 15px;
      }
      .StarContainer {
        width: 80%;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
