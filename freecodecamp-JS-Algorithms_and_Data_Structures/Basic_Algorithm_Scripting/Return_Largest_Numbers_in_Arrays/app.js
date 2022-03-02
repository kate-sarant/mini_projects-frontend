function largestOfFour(arr) {
    let myarr=[];

    for (i in arr){
      myarr.push( Math.max(...arr[i]))
    }
  return myarr;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// let k = [5,27,39,1001];
