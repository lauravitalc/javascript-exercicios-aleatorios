/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
*/

// Só funciona para 2 numeros, ainda! Vou aprimorar em breve.

 var twoSum = function(nums, target) {
    for(var x =0; x < nums.length; x++){
        var num1 = nums[x];
        for(i = 0; i < nums.length; i++){
            var num2 = nums[i];
             resultados = num1 + num2;
             if(resultados == target){
                return [i,x]
             }
        }
    }
};

console.log(twoSum([2,7,11,15], 9));