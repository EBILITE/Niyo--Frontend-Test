import React from "react";
import styled from "styled-components";
import Logo from "../../assests/images/Logo.svg";
import { NavData } from "../../utils/NavbarData";
import Button from "../Button/Button";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <img src={Logo} alt="" />
        <div className="menuIcon">
          <BiMenu />
        </div>
        <div className="NavData-Flex">
          {/* =============Information bring mapped on the navbar from the NavData============ */}
          {NavData.map((items) => {
            return <p key={items.id}>{items.name}</p>;
          })}

          {/* ========================================================== */}
          <Button text="Login" link="/" />
          <Button text="Explore Art" link="/allarts" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  /* border: 2px solid red; */
  margin: 0 auto;
  height: 5rem;
  .section-center {
    /* border: 2px solid blue; */
    width: 95vw;
    margin: 0 auto;
    max-width: var(--max-width);
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
  }
  .NavData-Flex {
    display: flex;
    align-items: center;
    gap: 2rem;
    p {
      color: var(--primary-50);
    }
  }
  .sec1,
  .sec2 {
    margin-top: 0.3rem;
  }
  .menuIcon {
    visibility: hidden;
    svg {
      font-size: 32px;
      color: white;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    /* border: 2px solid red; */
    .section-center {
      display: flex;
      gap: 20rem;
    }
    .NavData-Flex {
      visibility: hidden;
    }
    .menuIcon {
      visibility: visible;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .section-center {
      display: flex;
      gap: 13rem;
    }
    .NavData-Flex {
      visibility: hidden;
    }
    .menuIcon {
      visibility: visible;
    }
  }
`;
