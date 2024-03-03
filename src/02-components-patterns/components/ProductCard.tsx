import { useProduct } from "../hooks/useProduct"
import { CSSProperties, ReactElement, createContext, useEffect } from "react";
import { InitialValues, ProducCardHandlers, Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

import styles from "../styles/styles.module.css";



export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children:  (args: ProducCardHandlers) => JSX.Element
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

  const { counter, increaseBy, maxCount , isMaxCountReached, reset} = useProduct({ onChange, product, value, initialValues });
  

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount,
      isMaxCountReached,
      value
    }}>
      <div 
        className={`${ styles.productCard } ${ className } `}
        style={ style }
      >
        { children({
          counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,

          increaseBy, 
          reset
        }) }
      </div>
    </Provider>
  );
};

