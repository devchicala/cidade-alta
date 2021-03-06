import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position:fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #f5f5f5;
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow:0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
  header {
      font-size: 1.75rem;
      font-weight: 600;
      color: #00f;
  };
  strong {
    font-size: 2.25rem;
    color: #faf;
    margin-bottom:3.5rem;
  };
  p {
      font-size: 1.25rem;
      color: #faf;
      margin-top: 0.25rem;
  };
`;


export const Button = styled.button`
width: 5rem;
height: 2rem;
color:#000;
border-radius:0.5rem;
border:none;
font-size: 1.2rem;
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
 `;