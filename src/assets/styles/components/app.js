import styled from "styled-components";
import { keyframes } from "styled-components";
import { red, white } from "../colors";

export const Container = styled.div`
  padding: 2rem 2.6rem;
  height: calc(100vh - 177px);
`;

export const InputStyled = styled.input`
  width: 250px;
  height: 50px;
  margin-right: 10px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-style: solid;
  border-width: 1px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background-color: #131313;
  -webkit-transition: all 400ms ease;
  transition: all 400ms ease;
  font-family: Inter, sans-serif;
  color: ${white};
  font-size: 14px;
  text-align: left;
  text-indent: 10px;
  color-scheme: dark;
  outline: none;
  margin-bottom: 0.8rem;
  &::focus {
    border-style: solid;
    box-shadow: 1px 1px 40px 0 hsl(0deg 0% 100% / 10%);
  }
  &::placeholder {
    color: plum;
  }
  ::-webkit-calendar-picker-indicator {
    /* filter: invert(1); */
    margin-right: 0.25rem;
  }
`;

export const InputContainer = styled.div`
  display: block;
  text-align: center;

  margin-bottom: 2rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 550px;
`;
export const ImageContainer = styled.div`
  flex: 1;
  border-radius: 10px;
  background-color: rgba(250, 251, 255, 0.07);
  padding: 2.2rem;
  align-self: stretch;
  margin-right: 0.8rem;

  /* background-image: linear-gradient(180deg, #20212a, #0e0e0f); */
`;
export const TextContainer = styled(ImageContainer)`
  margin-left: 0.8rem;
`;
export const ImageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.6rem;
`;
export const ImageTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 0.3rem;
`;
export const ImageDate = styled.span`
  align-self: flex-end;
`;
const shimmer = keyframes`
  from {
   background-position: 100% 100%;
  }

  to {
    background-position: 0% 0%

  }
`;

export const ImageLoader = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background-image: linear-gradient(
    90deg,
    #2f2f2f 0%,
    #2f2f2f 40%,
    #222222 50%,
    #222222 55%,
    #2f2f2f 65%,
    #2f2f2f 100%
  );
  background-size: 400%;
  animation: ${shimmer} 1200ms infinite;
`;

export const TitleLoader = styled.div`
  width: 200px;
  height: 32px;
  border-radius: 3px;
  margin-bottom: 0.3rem;
  background-image: linear-gradient(
    90deg,
    #2f2f2f 0%,
    #2f2f2f 40%,
    #222222 50%,
    #222222 55%,
    #2f2f2f 65%,
    #2f2f2f 100%
  );
  background-size: 400%;
  animation: ${shimmer} 1200ms infinite;
`;
export const DateLoader = styled.div`
  align-self: flex-end;
  width: 120px;
  height: 20px;
  border-radius: 3px;
  background-image: linear-gradient(
    90deg,
    #2f2f2f 0%,
    #2f2f2f 40%,
    #222222 50%,
    #222222 55%,
    #2f2f2f 65%,
    #2f2f2f 100%
  );
  background-size: 400%;
  animation: ${shimmer} 1200ms infinite;
`;

export const ImageStyled = styled.img`
  height: 400px;
  width: 100%;
  object-fit: contain;
`;
export const TextStyled = styled.p`
  text-align: justify;
`;
export const ErrorMessage = styled.span`
  display: block;
  text-align: center;
  color: ${red};
  font-size: 14px;
`;
