const validateWithLuhn = (digits) =>{
        const arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
        let len = digits.length;
        let bit = 1;
        let sum = 0;
        let val;
        while(len){
          val = parseInt(digits.charAt(--len), 10);
          sum += (bit ^= 1) ? arr[val] : val;
        }
        return sum && sum % 10 === 0;
};
console.log(validateWithLuhn(4475472096160485));


const validateWithLuhnGradr = (digits) =>{
        const arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
        let len = digits.length;
        let bit = 1;
        let sum = 0;
        let val;
        while(len){
          val = parseInt(digits.charAt(--len), 10);
          sum += (bit ^= 1) ? arr[val] : val;
        }
        return sum && sum % 10 === 0;
};
console.log(validateWithLuhnGradr(4475472096160485));


https://gist.github.com/Akumzy/b53f8620f3c658655e4f7ad2295aeae7
