/*--------------------------code--------

 const car1 = {
model:'BMW',
brand:'Z4',
 years:2024
 };

 const car2 = car1;
 console.log(car2);

 car1.model = 'Audi';
 console.log(car2);

Cloning the Object with Spread Operator
const car2 = { ...car1 };
 console.log(car2);
*/

//----------------------------------------JSON.parse()----------------------//
/*
const userDetails = {
    name: "Satyam",
    age: 24,
    status: {
      verified: false
    }
  };
  

  let cloneUser = JSON.parse(JSON.stringify(userDetails));
  
 
  cloneUser.status.verified = true;
  
  console.log(cloneUser); 
  console.log(userDetails); 
*/
  //---------------------------------------------- deep object--------------------------------------------
/*
  const userDetails = {
    name: "Satyam Tiwari",
    age: 24,
    status: {
      verified: false
    }
  };
  
  // Cloning the Object with Spread Operator
  let cloneUser = { ...userDetails };
  
  // Changing the value of cloneUser
  cloneUser.status.verified = true;
  
  console.log(cloneUser);
  console.log(userDetails); 
  */

  

  let student = {  
    name: 'Satyam',  
    department: 'Computer Application',  
            enroll_no: '24',  
    permanent_address: {  
        house_no: '20',  
        locality: 'Vasai',  
        city: 'Palghar',  
        country: 'India'  
    }  
};  
console.log("Before applying Shallow Copy");  // before apply shallow copy 
console.log(student);  // print my information object 
let createcopy = Object.assign({}, student);  // edit my information object 
createcopy.name = 'Shubham';  
createcopy.enroll_no = '60';  
createcopy.permanent_address.house_no = '321';  
createcopy.permanent_address.locality = 'Andheri';  
createcopy.permanent_address.city = 'Mumbai';  
console.log("After applying Shallow Copy");  
console.log(createcopy);  
  