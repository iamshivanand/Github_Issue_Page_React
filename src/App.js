import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
//icons
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import Menu from "./images/menu1.svg";
// import Bell from "./images/bell.svg";
// import Github from "./images/github.svg";
import Down from "./images/down.svg";
import Warning from "./images/warning.svg";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Tick from "./images/Tick.svg";
import Search from "./images/search.svg";
import Label from "./images/label.svg";
import Code from "./images/code.svg";
import Pull from "./images/pull.svg";
import Discussions from "./images/discussions.svg";
import Actions from "./images/Actions.svg";
import Projects from "./images/projects.svg";
import Watch from "./images/watch.svg";
import Star from "./images/star.svg";
import Fork from "./images/fork.svg";
// import { Link } from "react-router-dom";
//axios

function App() {
  const [issues, setIssues] = useState();
  const [focus1, setfocus1] = useState(false);
  const [focus2, setfocus2] = useState(true);
  const [focus3, setfocus3] = useState(false);
  const [focus4, setfocus4] = useState(false);
  const [focus5, setfocus5] = useState(false);
  const [focus6, setfocus6] = useState(false);
  useEffect(() => {
    const data = axios.get(
      "https://api.github.com/repos/facebook/react/issues"
    );
    data.then((hello) => {
      // console.log("hello", hello);
      setIssues(hello.data);
    });
  }, []);
  const handleInternavigationClick = (e) => {
    if (e.target.id === "1") {
      setfocus1(true);
      setfocus2(false);
      setfocus2(false);
      setfocus3(false);
      setfocus4(false);
      setfocus5(false);
      setfocus6(false);
      console.log("focus1", focus1);
    }
    if (e.target.id === "2") {
      setfocus1(false);
      setfocus2(true);

      setfocus3(false);
      setfocus4(false);
      setfocus5(false);
      setfocus6(false);
      console.log("focus2", focus2);
    }
    if (e.target.id === "3") {
      setfocus1(false);
      setfocus2(false);
      setfocus3(true);
      setfocus4(false);
      setfocus5(false);
      setfocus6(false);
      console.log("focus3", focus3);
    }
    if (e.target.id === "4") {
      setfocus4(true);
      setfocus1(false);
      setfocus2(false);

      setfocus3(false);
      setfocus5(false);
      setfocus6(false);
      console.log("focus4", focus4);
    }
    if (e.target.id === "5") {
      setfocus5(true);
      setfocus1(false);
      setfocus2(false);

      setfocus3(false);
      setfocus4(false);

      setfocus6(false);
      console.log("focus5", focus5);
    }
    if (e.target.id === "6") {
      setfocus6(true);
      setfocus1(false);
      setfocus2(false);

      setfocus3(false);
      setfocus4(false);
      setfocus5(false);
      console.log("focus6", focus6);
    }
    console.log(e.target);
  };
  const handleIssueClick = () => {};

  console.log("issues", issues);
  return (
    <div className="App">
      <div className="NavigationBar">
        <div className="menuIcon">
          {/* <img src={Menu} alt="Menu-Icon" /> */}
          <MenuIcon />
        </div>
        <div className="icon">
          {/* <img src={Github} alt="Github-Icon" /> */}
          <GitHubIcon />
        </div>
        <div className="notificationIcon">
          {/* <img src={Bell} alt="Bell-Icon" /> */}
          <NotificationsNoneIcon />
        </div>
      </div>
      <div className="pageHeaders">
        <div className="url">
          <span>facebook / create-react-app</span>
        </div>
        <div className="url-right">
          <div className="watch">
            <div className="watchFirst">
              <img src={Watch} alt="watch" />
              &nbsp; Watch
            </div>
            <div className="watchSecond">1.9k</div>
          </div>
          <div className="watch">
            <div className="watchFirst">
              <img src={Star} alt="Star" /> &nbsp;Unstar
            </div>
            <div className="watchSecond">80k</div>
          </div>
          <div className="watch">
            <div className="watchFirst">
              <img src={Fork} alt="Fork" /> &nbsp;Fork
            </div>
            <div className="watchSecond">19.4k</div>
          </div>
        </div>
      </div>
      <div className="internalNavigation">
        <ul id="horizontal-list">
          <li>
            <img src={Code} alt="Code" />
            &nbsp;
            <span
              id="1"
              className={focus1 ? "focus" : "NotFocus"}
              onClick={handleInternavigationClick}
            >
              Code
            </span>
          </li>
          <li>
            <img src={Warning} alt="Warning" />
            &nbsp;
            <span
              id="2"
              className={focus2 ? "focus" : "NotFocus"}
              onClick={handleInternavigationClick}
            >
              Issues
            </span>
          </li>
          <li>
            <img src={Pull} alt="pull" />
            &nbsp;
            <span
              id="3"
              className={focus3 ? "focus" : "NotFocus"}
              onClick={handleInternavigationClick}
            >
              Pull requests
            </span>
          </li>
          <li>
            <img src={Discussions} alt="Discussions" />
            &nbsp;
            <span
              id="4"
              className={focus4 ? "focus" : "NotFocus"}
              onClick={handleInternavigationClick}
            >
              Discussions
            </span>
          </li>
          <li>
            <img src={Actions} alt="Actions" />
            &nbsp;
            <span
              id="5"
              className={focus5 ? "focus" : "NotFocus"}
              onClick={handleInternavigationClick}
            >
              Actions
            </span>
          </li>
          <li>
            <img src={Projects} alt="projects" />
            &nbsp;
            <span
              id="6"
              className={focus6 ? "focus" : "NotFocus"}
              onClick={handleInternavigationClick}
            >
              Projects
            </span>
          </li>
        </ul>
      </div>
      {focus1 && <h1>This is Code Section</h1>}
      {focus2 && (
        <div className="contentDiv">
          <div className="firstRow">
            <div className="filters">
              <div className="filterTab">
                <button>
                  Filters <img src={Down} alt="Down" />
                </button>
              </div>
              <div className="searchBar">
                <img src={Search} alt="search" />
                <input></input>
              </div>
            </div>
            <div className="labels-milestones">
              <div className="labels">
                <img src={Label} alt="label" /> <span>Labels</span>
              </div>
              <div className="milestones">
                <img src={Label} alt="label" /> <span>Milestones</span>
              </div>
            </div>
            <div className="newIssues">
              <button className="New-issue">New issue</button>
            </div>
          </div>
          <div className="open-closed">
            {/* <img src={Warning} alt="Warning" /> */}
            <ErrorOutlineIcon />
            &nbsp;&nbsp;
            <span> 495 Open</span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <img src={Tick} alt="Tick" />
            &nbsp;&nbsp;
            <span>4,465 Closed</span>
          </div>
          <div className="mainContentDiv">
            <div className="contentNavigationBar">
              <div className="internalNavigation1">
                <ul id="horizontal-list1">
                  <li>
                    Author <img src={Down} alt="downn" />
                  </li>
                  <li>
                    Labels <img src={Down} alt="downn" />
                  </li>
                  <li>
                    Projects <img src={Down} alt="downn" />
                  </li>
                  <li>
                    Milestones <img src={Down} alt="downn" />
                  </li>
                  <li>
                    Assignee <img src={Down} alt="downn" />
                  </li>
                  <li>
                    Sort <img src={Down} alt="downn" />
                  </li>
                </ul>
              </div>
            </div>
            {issues?.map((issue, index) => (
              // <Link to="https://www.google.com/">
              <div className="issuesDiv" key={index} onClick={handleIssueClick}>
                <div className="firstRowIssueDiv">
                  <div className="issueDivLeft">
                    <div style={{ paddingTop: 6 }}>
                      <ErrorOutlineIcon color="green" />
                    </div>
                    <div>
                      <span>{issue.title}</span>
                    </div>
                  </div>
                  <div className="issueDivRight">
                    <ChatBubbleOutlineIcon /> <span>{issue.comments}</span>
                  </div>
                </div>

                <p className="description">
                  #{issue.id} {issue.state} on {issue.created_at} by{" "}
                  {issue.user.login}
                </p>
              </div>
              // </Link>
            ))}
          </div>
        </div>
      )}
      {focus3 && <h1>This is Pull Request Section</h1>}
      {focus4 && <h1>This is Discussions Section</h1>}
      {focus5 && <h1>This is Actions Section</h1>}
      {focus6 && <h1>This is Projects Section</h1>}
    </div>
  );
}

export default App;
