import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents variant="black" />
    </div>
  );
}

const BoxWithStyledComponents = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ variant }) =>
    variant === "black" ? "black" : "green;"};
  }};
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;

/* const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: "green";
  margin: 2rem;
  &:hover {
    background-color: ${  ({isBlack})  =>  } ;
  }
`;

function BoxWithStyledComponents({ isBlack }) {} */
