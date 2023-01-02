import styled from "styled-components";
import { Header } from "components/header";

export const PageConteiner = styled.div`
  background: var(--background-gradient);
`;

const Container = styled.div`
  min-height: 100vh;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 10px;
`;

export function Layout({ children }: any) {
  return (
    <PageConteiner>
      <Header />
      <Container>
        {children}
      </Container>
    </PageConteiner>
  );
}
