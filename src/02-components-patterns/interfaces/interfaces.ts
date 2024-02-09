import { ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProducTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps} from "../components/ProductImage";
import { Props as ProductButtonProps } from "../components/ProductButtons";


export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps) : JSX.Element
    Title: (Props: ProducTitleProps) => JSX.Element;
    Image: ({ img }: ProductImageProps) => JSX.Element
    Buttons: ({ className }: ProductButtonProps) => JSX.Element;
}