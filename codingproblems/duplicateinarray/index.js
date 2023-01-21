export default function duplicateInArray(nums){
    // Brute force - Time: O(n2), Space: O(1)
    // for(let i=0;i<nums.length-1;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]===nums[j]){
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // Hash map - Time: O(n), Space: O(n)
    // const map = new Map();
    // for(let i=0;i<nums.length;i++){
    //     if(map.has(nums[i])){
    //         return true;
    //     }
    //     map.set(nums[i],0);
    // }
    // return false;

    //sort and check - Time: O(n)+O(n*logn), Space: O(1)
    // nums.sort((a,b)=>a-b);
    // for(let i=0;i<nums.length-1;i++){
    //     if(nums[i]===nums[i+1]){
    //         return true;
    //     }
    // }
    // return false;
}