import styled from "styled-components";

const Content = ({ children, className }) => (
  <ContentContainer className={className}>{children}</ContentContainer>
);

export default Content;

const ContentContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
`;
