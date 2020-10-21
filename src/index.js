module.exports = function reverse (n) {
    if(n > 0){
        let reverse = (String(n).split("").reverse().join(""));
        console.log(Number(reverse));
        return Number(reverse);
    } else if (n < 0){
        n = n * -1;
        let reverse = (String(n).split("").reverse().join(""));
        console.log(Number(reverse));
        return Number(reverse);
    }


}
