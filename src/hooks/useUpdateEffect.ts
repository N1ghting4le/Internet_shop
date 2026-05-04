import {
  useEffect,
  useRef,
  type EffectCallback,
  type DependencyList,
} from "react";

export const useUpdateEffect = (
  effect: EffectCallback,
  dependencies: DependencyList,
) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      return effect();
    }
  }, dependencies);
};
