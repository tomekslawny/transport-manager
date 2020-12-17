import * as React from "react";
import styled from "styled-components";

export interface HomeProps {}

const ViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

const Home: React.SFC<HomeProps> = () => {
  return (
    <ViewWrapper>
      <h1>Home</h1>
    </ViewWrapper>
  );
};

export default Home;
