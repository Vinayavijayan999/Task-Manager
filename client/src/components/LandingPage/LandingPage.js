import React from "react";
import "../../css/LandingPage.css";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import picture from "../../assets/Product-screenshot.png";
import Img from "../../assets/lp-bg-img.png";
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
//import '../node_modules/mdbreact/docs/css/mdb.min.css';
import circles from "../../assets/Methodize_lp-circles-bg.png";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";
//import { Button } from "@material-ui/core";
import Logo from "../../assets/Logo";

const LandingPage = () => {
  return (
    <div id="div1"
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        backgroundImage: `linear-gradient(to top right, #2D3947, #151B26)`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        display: "flex",
        height: "100%",
        zIndex: "-2",
        overflow: "hidden",
      }}
    >
      <div id="div2"
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          /*backgroundImage: `url(${circles})`,*/
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: "-1",
        }}
      ></div>
      <div className="landing-container">
        <div className="landing-nav-container">


          {/*<div className="landing-nav-logo" style={{ paddingTop: "7px" }}>
            <a href="/">
              <Logo />
            </a>
      </div> */}


          {/* <div className="landing-nav-sessions">
            <div style={{ marginRight: "20px" }}>
              <a href="/login">
                <button className="landing-nav-login--button">Login</button>
              </a>
            </div>

            <div>
              <a href="/register">
                <button className="landing-nav-register--button">
                  Register
                </button>
              </a>
            </div>
          </div> */}



        </div>
        {/*DISPLAY HEADING*/}
        <center>
        <div className="landing-main">
          <div className="landing-message">
            <h1
              style={{
                fontSize: "3.5em",
                fontWeight: "500",
                color: "white",
                width: "90%",
              }}
            > 
              TASK MANAGER
            </h1>
            </div>
          </div>

        {/*DISPLAY HEADING*/}
        <div className="landing-main">
          <div className="landing-message">
            <h2
              style={{
                fontSize: "3em",
                fontWeight: "200",
                color: "white",
                width: "57%",
              }}
            >
              Manage your tasks easily!
            </h2>

            {/*<div className="landing-message-button--div">
              <a href="/login">
                <button className="landing-message--button">Try Demo</button>
              </a>
            </div>*/}
          </div>


            {/*LOGIN AND SIGNUP */}
            <div className="card" style={{
        zIndex: "999",}}>
          <MDBCard style={{ maxWidth: '22rem',
        zIndex: "999",}}>
      <MDBCardBody>
      <br/>
        <MDBCardText>
        
        <a href="/login">
        <button>Login</button>
        <br/>
        </a>
        <br/>
        <a href="/register">
        <Button>Sign Up</Button>
        </a>
        
        </MDBCardText>
        <br/>
      </MDBCardBody>
    </MDBCard>
    </div>


          <div className="landing-main-picture">
            <img src={Img} alt="landing" className="landing-picture" style={{
                zIndex: "-999",
              }} />
          </div>
          {/* <div className="landing-main-bottom">
            <div className="landing-main-bottom-icons-container">
              <div className="icon-container">
                <AiOutlineTeam
                  style={{ fontSize: "75px", color: "rgb(59, 182, 170)" }}
                />
                <p>
                  Establish Teams with other colleagues and work together to
                  accomplish tasks.
                </p>
              </div>
              <div className="icon-container">
                <MdAssignment
                  style={{ fontSize: "75px", color: "rgb(59, 182, 170)" }}
                />
                <p>
                  Create multiple projects within a team categorize tasks based
                  on different types of projects.
                </p>
              </div>
              <div className="icon-container">
                <BsCardChecklist
                  style={{ fontSize: "75px", color: "rgb(59, 182, 170)" }}
                />
                <p>
                  Keep track of tasks via tasklists in individual projects and
                  check them off when they are completed.
                </p>
              </div>
            </div>
            <div className="guest-login-button">
              <a href="/login">
                <button className="landing-message--button">
                  Guest Login!
                </button>
              </a>
            </div>
          </div> */}



          



        </div>
        </center>

        
      </div>
    </div>
  );
};

export default LandingPage;
