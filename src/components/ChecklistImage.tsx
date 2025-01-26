import { Image } from "@/types";
import styled from "styled-components";

const ImageContainer = styled.img``;

export type ChecklistImageProps = {
  image: Image;
};

const ChecklistImage = ({ image }: ChecklistImageProps) => {
  return <ImageContainer src={image.src} />;
};

export default ChecklistImage;
