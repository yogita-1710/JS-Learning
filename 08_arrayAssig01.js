var fruits_seasonal= ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`step 1: Log the first and last element on console`);
console.log(`Current Elements in array fruit_seasonal=[${fruits_seasonal}]`);
firstElement=fruits_seasonal[0];
console.log(`first element is::${firstElement}`);
length=fruits_seasonal.length;
lastElement=fruits_seasonal[length-1];
console.log(`last element is::${lastElement}`);
console.log(`-------------------------------------------------------------------------------------`);
console.log(`step 2. Add element Papaya before the element 'Banana' and then log array on console `);
console.log(`Current Elements in array fruit_seasonal=[${fruits_seasonal}]`);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);
console.log(`----------------------------------------------------`);
console.log(`step 3. Remove 'Mango' from the array`);
console.log(`Current Elements in array fruit_seasonal=[${fruits_seasonal}]`);
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);
 console.log(`----------------------------------------------------`);
console.log(`step 4. Add element or insert an element 'Pineapple' at the last position`);
console.log(`Current Elements in array fruit_seasonal=[${fruits_seasonal}]`);
fruits_seasonal.push('Pineapple');
console.log(fruits_seasonal);
console.log(`-----------------------------------`);
console.log(`step 5. Insert an element - 'Dragon Fruit' before "Water Melon" `);
console.log(`Current Elements in array fruit_seasonal=[${fruits_seasonal}]`);
fruits_seasonal.splice(4,0,'Dragon Fruit');
console.log(fruits_seasonal);
console.log(`-------------------------------------------`);
console.log(`step 6. Replace an element 'Orange' with 'Kiwi' `);
console.log(`Current Elements in array fruit_seasonal=[${fruits_seasonal}]`);
fruits_seasonal.splice(2,1,'Kiwi');
console.log(fruits_seasonal);
console.log(`--------------------------------------------------------------------`);
console.log(`step 7. Log the elements starting from index 1 to 4 `);
console.log(`Current Elements in array fruit_seasonal=[${fruits_seasonal}]`);
for(i=1;i<=4;i++){
    console.log(fruits_seasonal[i]);
}
console.log(`---------------------------------------------------------`);
console.log(`step 8. Only select last 3 element and log on console: Use the length property`);
console.log(`Current Elements in array fruit_seasonal=[${fruits_seasonal}]`);
length=fruits_seasonal.length;
lastElement=fruits_seasonal[length-1];
for(i=length-3;i<length;i++){
    console.log(fruits_seasonal[i]);
}
 
 



 