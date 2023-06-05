import React, {useLayoutEffect} from 'react';

export default function useDarkFooter() {
    useLayoutEffect(() => {
      document.body.classList.add('footer--dark');
  
      return () => {
        document.body.classList.remove('footer-dark');
      };
    }, []);
  }