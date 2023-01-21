export default function twoSum(nums,target){
    // Time: O(n2), Space: O(1)
    // for(let i=0;i<nums.length-1;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]+nums[j]===target){
    //             return[i,j];
    //         }
    //     }
    // }

    //Time: O(n), Space: O(n)
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        const other = target-nums[i];
        if(map.has(other)){
            const pos = map.get(other);
            if(pos!==i){
                return [pos,i];
            }
        } else{
            map.set(nums[i],i);
        }
    }
}