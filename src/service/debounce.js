let timeId; // to track the timer ids;

export const debounceFetch = () => {
  return (fn, debounce_time = 1000) => {
    clearTimeout(timeId);

    timeId = setTimeout(() => {
      console.log(" i fetched again oooh. it's God ooh ")
      fn() // function to call after 1 sec
    }, debounce_time);
  }
}