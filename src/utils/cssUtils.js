export const hoverBackground = ` 
  position: relative;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ddd;
    opacity: 0;
    z-index: -1;
    transition: opacity 300ms ease-in-out;
  }

  :hover::after {
    opacity: 1;
  }`;

export const sectionPadding = `
    padding: 10px 0;
  `;
export const visuallyHidden = `
  width: 0;
  height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;
