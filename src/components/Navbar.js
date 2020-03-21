import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SearchBox from "./searchBox";
import Logo from "./Logo";
import Dropdown from "./DropdownMenu";
import withUser from "./withUser";
import UserProvider, { UserContext } from "./UserProvider";

const Navbar = () => {
  //Authenticated prop provided by context
  const { authenticated, actions } = useContext(UserContext);

  if(authenticated){
    return (
      <Header className="row no-gutters">
        <Wrapper className="col-12 d-flex justify-content-end">
          <Navigation>
            <Logo />

            <StyledLink to={"/home"}>Descubrir</StyledLink>

            <StyledLink to={"/"}>Explorar</StyledLink>

            <StyledLink to={"/trip"}>Viajes</StyledLink>
          </Navigation>

          <SearchBox />

          <Actions>
            {!authenticated && (
              <Link to={"/login"}>
                <button>Log In</button>
              </Link>
            )}
            {authenticated && <Dropdown />}
          </Actions>
        </Wrapper>
      </Header>
    );
  }
  else{
    return null;
  }
};

//export default withUser(Navbar);
export default Navbar;

const Header = styled.div`

`;

const Wrapper = styled.div`
`;

const Navigation = styled.nav`
`;

const Actions = styled.div`

`;

const StyledLink = styled(Link)`
`;
