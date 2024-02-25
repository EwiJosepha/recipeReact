let timeId; // to track the timer ids;

export const debounceFetch = () => {
  return (fn, debounce_time = 1000) => {
    clearTimeout(timeId);

    timeId = setTimeout(() => {
      fn() // function to call after 1 sec
    }, debounce_time);
  }
}
