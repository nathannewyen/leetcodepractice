const nums = [1,1,2];

function removeDuplicates(nums) {
    let uniqueArray = [];
    for(let i = 0; i < nums.length; i++) {
        if(!uniqueArray.includes(nums[i])) {
            uniqueArray.push(nums[i])
        }
    }
    return uniqueArray;
}
console.log(removeDuplicates(nums));