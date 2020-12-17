import * as React from "react";

export interface CardProps {
  img: string;
  headerTxt: string;
  contentTxt: string;
  footer?: string[];
}

const Card: React.FunctionComponent<CardProps> = ({
  img,
  headerTxt,
  contentTxt,
  footer,
}) => {
  return (
    <div>
      <img src={img} alt="kotek" />
      <h2>{headerTxt}</h2>
      <p>{contentTxt}</p>
      <footer>{footer && footer[0]}</footer>
    </div>
  );
};

export default Card;
