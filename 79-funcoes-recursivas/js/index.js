function recursiva(max) {
  if (max >= 10) return;
  max++;
  console.log('Primeira vez ' + max);
  recursiva(max);
}

recursiva(0);
