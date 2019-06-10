function Cell() {
  const instance = {
    strength: Math.random(),

    getColour() {
      const c = Math.floor(instance.strength * 256);
      return `rgb(${c}, ${c}, ${c})`;
    }
  };
  return instance;
}
