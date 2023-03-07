import styled from "styled-components";
export default function Header({ isLarge, onSetIsLarge }) {
  return (
    <StyledHeader>
      <div>
        <h1>My Places</h1>
        <div>
          <label htmlFor="image-size">Large Images</label>
          <input
            id="image-size"
            type="checkbox"
            checked={isLarge}
            onChange={(event) => {
              onSetIsLarge(event.target.checked);
            }}
          />
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100vw;
  height: var(--header-height);
  background-color: #457b9d;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 calc(max(var(--spacing-1), (100vw - var(--content-max-width)) / 2));
  & div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
