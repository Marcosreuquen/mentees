import styled from "styled-components";

interface LargeProps {
  textAlign?: string
}

export const Title = styled.h1<LargeProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 3.75rem;
  line-height: 48px;
  text-align: ${props => props.textAlign || "initial"};
  color: var(--blanco);
  margin: 0;
  `;

interface LargeProps {
  margin?: string
}

export const Large = styled.p<LargeProps>`
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 30px;
  text-align: center;
  color: var(--blanco);
  margin: ${props => props.margin || "0"};
  `;

interface BodyProps {
  size?: string
}

export const Body = styled(Large)<BodyProps>`
  font-size: ${props => props.size || "1.2rem"};
  text-align: initial;
`