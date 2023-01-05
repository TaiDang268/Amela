import React from "react";
import { images } from "../../assets/images";
import {
  Container,
  Wrapper,
  BackSide,
  FrontSide,
  FrontSideWrapper,
  CardValue,
  CardSuit,
  MiniCardSuit,
} from "./Card.styled";
import { ICard } from "components/types/card.type";
interface ICardUser {
  belongTo?: string;
  isFlip?: boolean;
  card?: ICard;
}
const Card = React.forwardRef(
  ({ belongTo, isFlip = false, card = {} }: ICardUser, ref) => {
    const { value, suit } = card;
    const suitCardImg =
      suit === "clubs"
        ? images.clubs
        : suit === "diamonds"
        ? images.diamonds
        : suit === "hearts"
        ? images.hearts
        : images.spades;
    const color: string =
      suit === "hearts" || suit === "diamonds" ? "red" : "black";
    return (
      <Container ref={ref}>
        <Wrapper>
          <FrontSide>
            <FrontSideWrapper color={color}>
              <CardValue>{value}</CardValue>
              <MiniCardSuit src={suitCardImg || ""} />
              <CardSuit src={suitCardImg || ""} />
            </FrontSideWrapper>
          </FrontSide>
          <BackSide></BackSide>
        </Wrapper>
      </Container>
    );
  }
);

export default Card;
