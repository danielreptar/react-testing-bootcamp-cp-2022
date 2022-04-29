import React, { useEffect, useState } from "react";
import {
  Container,
  DateLoader,
  ErrorMessage,
  ImageContainer,
  ImageDate,
  ImageLoader,
  ImageStyled,
  ImageTitle,
  ImageTitleWrapper,
  InfoContainer,
  InputContainer,
  InputStyled,
  TextContainer,
  TextStyled,
  TitleLoader,
} from "../../assets/styles/components/app";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import { getImage } from "../../services/nasaServices";
import { Layout } from "../Layout";
import moment from "moment-timezone";

moment.tz("America/Mexico_City");

export const App = () => {
  const [item, setItem] = useState(null);
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const [apiError, setApiError] = useState(false);

  const fetchImage = async (date) => {
    setError(false);
    try {
      const { data } = await getImage(date);
      setItem(data);
    } catch (error) {
      console.log(error.response.data);
      setError(true);
    }
  };

  const onChangeDate = async (ev) => {
    const { value } = ev.target;
    setDate(value);
    await fetchImage(value);
  };

  useEffect(() => {
    const currentDate = new moment();
    const formatDate = currentDate.format("YYYY-MM-DD");
    setDate(formatDate);
    fetchImage(formatDate);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Container>
          <InputContainer>
            <InputStyled
              type="date"
              id="date"
              name="date"
              placeholder="dd/mm/yyyy"
              onChange={onChangeDate}
              value={date}
            />
            {error && (
              <ErrorMessage>There was an error, please try again.</ErrorMessage>
            )}
          </InputContainer>
          <InfoContainer>
            <ImageContainer>
              <ImageTitleWrapper>
                {item ? <ImageTitle>{item.title}</ImageTitle> : <TitleLoader />}
                {item ? <ImageDate>{item.date}</ImageDate> : <DateLoader />}
              </ImageTitleWrapper>
              {item ? (
                <ImageStyled src={item.url} alt="" />
              ) : (
                <ImageLoader></ImageLoader>
              )}
            </ImageContainer>
            <TextContainer>
              {item && <TextStyled>{item.explanation}</TextStyled>}
            </TextContainer>
          </InfoContainer>
        </Container>
      </Layout>
    </>
  );
};
