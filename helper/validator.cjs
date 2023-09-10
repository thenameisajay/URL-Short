function validator(url) {
    const regex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*)?$/;
    return regex.test(url);
  }
  
// Test the function with example URLs
//   console.log(validator("https://www.ajay.com")); 
//   console.log(validator("www.ajay.com")); 
//   console.log(validator("http://ajay.com")); 
//   console.log(validator("http://www.ajay.com")); 
//   console.log(validator("https://ajay.com"));
//   console.log(validator("ajay"));
//   console.log(validator("ajay.com"));
module.exports = validator;