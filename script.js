const findNumbers = str => {
  let counter = 0;
  str.split('').forEach(item => {
    if (isFinite(+item)){
      counter++
    }
  });
  return counter;
}

console.log(findNumbers('abra213ergkdflg45345dkfgmdfg3544'));