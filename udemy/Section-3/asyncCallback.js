const main = () => {
  console.log("🐍 finished"); //1st
  setTimeout(() => console.log("🐍🐍🐍🐍 finished"), 1);//4th
  console.log("🐍🐍 finished");//2nd
}
main();
console.log("🐍🐍🐍 finished");//3rd
setTimeout(() => console.log("🐍🐍🐍🐍🐍 finished"), 0);//5th because setTimeout in main function starts countdown before this setTimeout and two next 2 actions of printing results on console took more time than 1 ms

