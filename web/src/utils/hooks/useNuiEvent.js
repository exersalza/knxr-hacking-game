import { useEffect, useRef } from 'preact/hooks';

export const useNuiEvent = (action, handler) => {
  const savedHandler = useRef(() => {});

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => {
      const { eventAction, data } = event.data;
      if (savedHandler.current) {
        if (eventAction === action) {
          savedHandler.current(data);
        }
      }
    };

    window.addEventListener('message', eventListener);

    return () => window.removeEventListener('message', eventListener);
  }, [action]);
};