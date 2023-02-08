
var nums[5,21,0,7,1];
for (var i=1 ; i< nums.length; i++) {

var j=i-1 ;
var aux ;
while (nums[j]>nums[j+1]&& j>=0){
    aux=nums[j];
    nums[j] = nums[j+1] ;
    nums[j-1] = aux ;
    j-- ;
}

}
console.log(nums); 
