import styled from "styled-components";

const SectionTitle = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 4rem;

  &:after {
    content: "";
    height: 1px;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
  }
`;

export default SectionTitle;
