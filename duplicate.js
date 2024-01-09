const nums = [1,1,2];

function removeDuplicates(nums) {
    const unique = {};
    for (let i = 0; i < nums.length; i++) {
        if(!unique[nums[i]]) {
            unique[nums[i]] = true;
        }
    }
    let newArr = Object.keys(unique).map(Number);
    return newArr;
}
console.log(removeDuplicates(nums));