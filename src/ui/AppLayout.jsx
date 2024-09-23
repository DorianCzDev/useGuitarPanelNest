import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Logo from "./Logo";
import { BsArrowBarLeft } from "react-icons/bs";
import { useLogout } from "../services/useLogout";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 280px 1fr;
  color: #d4d4d4;
`;

const StyledAside = styled.aside`
  background-color: var(--primary-bg-color);
  border-right: 1px solid var(--primary-border-color);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
`;

const Content = styled.div`
  display: grid;
  background-color: var(--primary-bg-color);
  overflow-y: auto;
`;

const OutletContainer = styled.main`
  margin: 0 auto;
  padding: 60px 0px 0px 0px;
  min-width: 1060px;
  background-color: transparent;
`;

const LogoutContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: flex-end;
  padding-bottom: 32px;
  padding-left: 22px;
`;

const ButtonContainer = styled.div`
  color: #46587b;
  display: flex;
  gap: 6px;
  font-size: 26px;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    color: #556b95;
  }
`;

function AppLayout() {
  const { logout, isPending } = useLogout();
  return (
    <StyledAppLayout>
      <StyledAside>
        <Logo />
        <Nav />
        <LogoutContainer>
          <ButtonContainer onClick={logout}>
            <BsArrowBarLeft /> Log out
          </ButtonContainer>
        </LogoutContainer>
      </StyledAside>
      <Content>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Content>
    </StyledAppLayout>
  );
}

export default AppLayout;
