import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavLogo from "../images/logo.svg";
import Homeicon from "../images/home-icon.svg";
import seachIcon from "../images/search-icon.svg";
import watchList from "../images/watchlist-icon.svg";
import original from "../images/original-icon.svg";
import movieIcon from "../images/movie-icon.svg";
import seriesIcon from "../images/series-icon.svg";
import { auth, googleProvider } from "../firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import {
  setUserLoggedInDetails,
  setSignOutState,
} from "../features/User/userSlice";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [userName, getUserName] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.userSlice);

  // OnAuthStateChangedFunction;
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/home");
        getUserName(user);
      } else {
        navigate("/");
      }
    });
  }, [data.name]);

  let isSignInProgress = false;

  //Sign In With Google
  const signInWithGoogle = async () => {
    try {
      const da = await signInWithPopup(auth, googleProvider).then(
        (response) => {
          // console.log(response);
          setUser(response.user);
          getUserName(response.user);
        }
      );
    } catch (error) {
      console.log("current request cancelled");
    }
  };

  //SetUserFuction
  const setUser = (user) => {
    dispatch(
      setUserLoggedInDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
    localStorage.setItem("name", user.displayName);
    localStorage.setItem("email", user.email);
    localStorage.setItem("photo", user.photoURL);
  };

  // SignOut
  const LogOut = () => {
    signOut(auth).then(() => {
      dispatch(setSignOutState());
      navigate("/");
      getUserName();
    });
  };

  return (
    <Nav className="container-fluid">
      <Logo>
        <Link to={userName ? "/home" : ""}>
          <img src={NavLogo} alt="" />
        </Link>
      </Logo>

      {!userName ? (
        <Login onClick={() => signInWithGoogle()}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src={Homeicon} alt="" />
              <span>HOME</span>
            </a>
            <a href="">
              <img src={seachIcon} alt="" />
              <span>SEARCH</span>
            </a>
            <a href="">
              <img src={watchList} alt="" />
              <span>WATCHLIST</span>
            </a>
            <a href="">
              <img src={original} alt="" />
              <span>ORIGINALS</span>
            </a>
            <a href="">
              <img src={movieIcon} alt="" />
              <span>MOVIES</span>
            </a>
            <a href="">
              <img src={seriesIcon} alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>

          <SignOut>
            <UserImg src={data.photo} />
            <DropDown>
              <span onClick={() => LogOut()}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 15px;

    img {
      height: 25px;
      min-width: 20px;
      width: 25px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 15px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 3px 3px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  backgroudn-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  text-align: center;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border: transparent;
  }
`;

const UserImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 137%;
  right: -35%;
  background: rgb(19, 19, 19);
  border-radius: 4px;
  width: 120px;
  border: 1px solid rgb(151, 151, 151, 0.34);
  padding: 10px;
  opacity: 0;

  span {
    letter-spacing: 3px;
  }
`;

const SignOut = styled.div`
  position: relative;
  cursor: pointer;
  text-align: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
