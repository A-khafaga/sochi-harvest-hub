import { useState, useEffect } from 'react';

/**
 * A simple hook to re-trigger a CSS animation by changing a key.
 * @param dependency The value that should trigger the animation reset.
 * @returns A key that can be attached to a component.
 */
export const useAnimation = (dependency: any) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // By incrementing the key, we force React to re-mount the component,
    // thus re-starting its animation.
    setAnimationKey(prevKey => prevKey + 1);
  }, [dependency]);

  return animationKey;
};