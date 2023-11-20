function Arr(length, head) {
  const arr = Array.from({ length: length }).map((_, idx) => idx + head);
  return arr;
}

export default Arr;
