import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void
  value?: number;
  initialValues?: InitialValues; 
}

export const useProduct = ( {onChange, product, value = 0, initialValues }: useProductArgs ) => {
  const [counter, setCounter] = useState( initialValues?.count || value );
  const isMounted = useRef(false);
  
  const increaseBy = (value: number) => {
    const newValue = Math.max( counter + value);
    if(initialValues?.maxCount && newValue > initialValues?.maxCount) return;
    setCounter( newValue );
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || 0)
  }

  useEffect(() => {
    isMounted.current = true;
  }, [])

  useEffect(() => {
    if( !isMounted.current ) return;
    setCounter(  initialValues?.count || value )
  }, [value, initialValues])
  

  return {
    counter,
    increaseBy,
    isMaxCountReached : !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  }
}
