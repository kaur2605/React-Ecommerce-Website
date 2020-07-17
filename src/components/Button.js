import styled from "styled-components";
const ButtonBox = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  
  background: transparent;
  border: 0.06rem solid var(--lightblue);
  border-color: ${props => (props.cart ? 'var(--lightgreen)' : 'var(--lightblue)')};
  color:${props => (props.cart ? 'var(--lightgreen)' : 'var(--lightblue)')};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background:${props => (props.cart ? 'var(--lightgreen)' : 'var(--lightblue)')};
    color: var(--mainblue);
  }
`;

export default ButtonBox;
