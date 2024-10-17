function twoSum(nums, target) {
    const map = {};  // Create a hash map to store indices

    return nums.reduce((result, num, i) => {
        const complement = target - num;
        if (map[complement] !== undefined && result.length === 0) {  // Check if the complement exists
            result.push(map[complement], i);  // Store the result if the complement is found
        }
        map[num] = i;  // Store the current number and its index
        return result;
    }, []);
}

// Example usage
let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));  // Output: [0, 1]
