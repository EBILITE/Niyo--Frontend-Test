import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = ({ text, link }) => {
  return (
    <Wrapper>
      <div>
        <div className="sec1"></div>
        <div className="sec2">
          <Link to={link}>{text}</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.div`
  /* border: 2px solid red; */

  .sec1 {
    width: 150px;
    height: 50px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 25px;
    background-color: white;
    margin: 0 auto;
    position: relative;
    left: 5px;
    bottom: 5px;
    background-color: yellow;
  }

  .sec2 {
    border: 2px solid #fbaf00;
    width: 150px;
    height: 50px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 25px;
    background-color: white;
    top: 5px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
`;
