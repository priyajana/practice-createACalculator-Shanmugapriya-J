const prompt = require("prompt-sync")();
// returns the absolute value of a number.
function getAbsoluteValue(number)
{
    if(isNaN(number))
        {
            throw new Error("Invalid input!");
        }
    
    return Math.abs(number);
}

//  Calculate and return the value of a base raised to a specific power.
function calculatePower(number,power)
{
        
        return Math.pow(number,power);
}

//Calculate the square root of a number.
function getSQRT(n)
{
    if(isNaN(n))
        {
            throw new Error("Invalid input!");
        }
    return Math.sqrt(n);
}

//From a given set of numbers, determine the largest and smallest values.
function findMinMax(arr)
{

    if(arr.length==0)
        {
            throw new Error("Array is empty!!");
        }
    
    //The spread syntax expands the array elements into individual arguments, which Math.max() can then process.
    return [Math.max(...arr),Math.min(...arr)];
}

//Generate a random integer within a specified range.
function getRandomNumber(low = 0,high)
{
    if(isNaN(high) || isNaN(low))
        {
            throw new Error("Invalid input!");
        }
    let randNum = Math.random();
    
    return Math.floor(randNum * (high - low)) + low ;
}

//Round a number to a specified number of decimal places.
function customRounding(num,decimals)
{
    if(isNaN(num) || isNaN(decimals))
        {
            throw new Error("Invalid input!");
        }
    return num.toFixed(decimals);
}

// TEST
/*
console.log(getAbsoluteValue(-45.67)); // OUTPUT : 45.67
console.log(calculatePower(5,3)); // OUTPUT : 125
console.log(getSQRT(144)); //OUTPUT : 12
console.log(findMinMax([3, 78, -12,0.5, 27])); //OUTPUT : [78,-12]
console.log(getRandomNumber(50)); //OUTPUT : 7
console.log(customRounding(23.67891,2)); // OUTPUT: 23.68
*/

while(true)
    {
        try
        {
            let option = prompt(`Choose an operation to perform :  abs, power, squareroot, minmax, random, round or exit :`);
            if(option === "exit")
                {
                    console.log("Bye!");
                    break;
                }
            if(option == "abs")
                {
                    let num = prompt("Enter the digit :");
                    try
                    {
                        let result = getAbsoluteValue(Number(num));
                        console.log(`The answer is ${result}`);
                    }
                    catch(err)
                    {
                        console.error("Error finding the absolute value:",err.message);
                    }     
                }
            if(option == "power")
                {
                    let values = prompt("Enter the  digits separated by commas: ");
                    
                    let nums = values.split(",");
                    
                    try
                    {
                        if(isNaN(nums[0])|| isNaN(nums[1]))
                            {
                                throw new Error("Invalid input!");
                            }
                        let result = calculatePower(Number(nums[0]),Number(nums[1]));
                        console.log(`The answer is ${result}`);
                    }
                    catch(err)
                    {
                        console.error("Error finding the Power:",err.message);
                    }     
                }
            if(option == "squareroot")
                {
                    let num = prompt("Enter the digit :");
                    try
                    {
                        let result = getSQRT(Number(num));
                        console.log(`The answer is ${result}`);
                    }
                    catch(err)
                    {
                        console.error("Error finding the square root:",err.message);
                    }    
                }
            if(option == "minmax")
            {
                let string_nums = prompt("Enter a set of values separated by commas :");
                
                    try
                    {
                        let nums_arr = string_nums.split(",");
                        // converting all the numbers from string to number datatype.
                        let min_max = findMinMax(nums_arr.map(num=>Number(num)));
                        console.log(`The answer is ${min_max}`);
                    }
                    catch(err)
                    {
                        console.error("Error finding the minimum and maximum:",err.message);
                    }  

            }
            if(option == "random")
                {
                    let string_nums = prompt("Enter the range separated by commas :");
                    let nums = string_nums.split(',');
                    try
                    {
                        let result = getRandomNumber(Number(nums[0]),Number(nums[1]));
                        console.log(`A random number from ${nums[0]} to ${nums[1]} :  ${result}`);
                    }
                    catch(err)
                    {
                        console.error("Error finding a random number:",err.message);
                    }    

            }
            if(option == "round")
                {
                let num_str  = prompt("Enter the decimal digit and the number of places to round separated by comma :");
                let num_arr  = num_str.split(",");
                    try
                    {
                        let result = customRounding(Number(num_arr[0]),Number(num_arr[1]));
                        console.log(`Number ${num_arr[0]} rounded to ${num_arr[1]} digits is:  ${result}`);
                    }
                    catch(err)
                    {
                        console.error("Error rounding number:",err.message);
                    }    

            }
        }
        catch(e)
        {
            console.log(`Unexpected error: ${e.message}`);
        }
    }
