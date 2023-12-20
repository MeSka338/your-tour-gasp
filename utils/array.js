function Arr(length, head) {
  const arr = Array.from({ length }).map((_, idx) => idx + head);
  return arr;
}

export default Arr;
