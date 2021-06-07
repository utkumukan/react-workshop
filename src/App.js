import GlobalStyle from "./global-styles";
import styled from "styled-components";
import Layout from "./components/Layout/index";

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Layout />
    </AppWrapper>
  );
}
