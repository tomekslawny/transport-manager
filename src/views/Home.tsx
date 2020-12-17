import * as React from "react";
import styled from "styled-components";
import Card from "../Home/Card";

export interface HomeProps {}

const ViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <ViewWrapper>
      <Card
        img={
          "https://www.koty.pl/wp-content/uploads/2017/11/shutterstock_330164483-864x575.jpg"
        }
        headerTxt={"Kotek"}
        contentTxt={"kotek"}
        footer={["footessr", "wdwed"]}
      />
    </ViewWrapper>
  );
};

export default Home;
