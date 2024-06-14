import {
    faBell,
    faCaretDown,
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useHistory } from "react-router-dom";
  import styled from "styled-components";
  
  const Panel = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1.3rem;
    align-items: center;
    cursor: pointer;
  `;
  
  const Avatar = styled.img`
    display: inline-block;
    width: 50px;
    border-radius: 0.3rem;
  `;
  
  export default function User() {
    const history = useHistory();
    const handleNavigation = () => {
      history.push("/welcome");
    };
  
    return (
      <Panel>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <span>Kids</span>
        <FontAwesomeIcon icon={faBell} />
        <Avatar src="http://picsum.photos/300?1" onClick={handleNavigation} />
        <FontAwesomeIcon icon={faCaretDown} />
      </Panel>
    );
  }