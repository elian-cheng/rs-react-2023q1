import { useEffect } from 'react';

export const useDisableBodyScroll = (open: boolean) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  }, [open]);
};
