const highestProduct=(list)=>{
  const topThree = list.sort((a,b) => b-a).slice(0,3);
  // return Zero if exists on top three
  if(topThree.some(x=>x===0)) return 0;
  else return topThree.reduce((a, b) => a * b);
}
  
const input = [1, 10, 2, 6, 5, 3];
  
console.log(highestProduct(input));