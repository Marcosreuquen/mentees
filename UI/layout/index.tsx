import styled from "styled-components";
import { Header } from "UI/header";

export const PageConteiner = styled.div`
  background: var(--background-gradient);
`;

export function Layout({ children }: any) {
  return (
    <PageConteiner>
      <Header />
      {children}
    </PageConteiner>
  );
}
