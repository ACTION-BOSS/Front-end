export const useDebouncedCallback = (callback: Function, duration: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), duration);
  };
};
