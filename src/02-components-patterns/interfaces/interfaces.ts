
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProducTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps} from "../components/ProductImage";
import { Props as ProductButtonProps } from "../components/ProductButtons";


export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    maxCount?: number;
    isMaxCountReached: boolean;
    product: Product;
    value?: number;
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps) : JSX.Element
    Buttons: ({ className }: ProductButtonProps) => JSX.Element;
    Image: ({ img }: ProductImageProps) => JSX.Element
    Title: (Props: ProducTitleProps) => JSX.Element;
}

export interface onChangeArgs {
    product: Product, count: number
}

export interface ProductInCart extends Product {
    count: number;
}
  
export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProducCardHandlers {
    counter: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: ( value: number ) => void;
    reset: () => void;
}