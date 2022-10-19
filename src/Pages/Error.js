import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="Error">
        <Link to="/" className="link">
          <BiArrowBack />
          <p>Back</p>
        </Link>
        <div className="ErrorText">
          <h1>Page Not Found</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  .Error {
    /* border: 2px solid blue; */
    width: 95vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  h1, p {
    color: white;
  }
  .link {
    display: flex;
    gap: 1rem;
    svg {
      font-size: 44px;
      color: white;
    }
  }
  .ErrorText{
    display: flex;
    align-items: center;
justify-content: center;
  }
`;
