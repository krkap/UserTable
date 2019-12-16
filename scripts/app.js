//$(document).ready(function () {
//$('#example').DataTable({
//"ordering": [[ 0, "desc" ]]
//});
//});
 
    
const apiURL = `https://randomuser.me/api/?results=20&nat=us,ca&inc=name,gender, nat, dob`;
const directoryContainer = document.querySelector('.directory-container');

// FETCH DATA FROM API

fetch(apiURL)
  .then(response => response.json())
  .then(response => response.results)
  .then(displayUsers)  
  .catch(
    error =>
      (directoryContainer.innerHTML = `Sorry, there has been an error pulling data from the API`)
  );

// DISPLAY USERS INFORMATION

function displayUsers(userData) {
    
  var tbody = document.getElementById('tbody');
  // LOOP THROUGH EACH USER AND CPOPULATE TABLE
  userData.forEach((user, i) => {
    let name = user.name;    
    let gender = user.gender;
    let country = user.nat;
    let dob = user.dob.date.substring(0, 10); 
    
    let birthday = user.dob.date.substring(5, 7) + user.dob.date.substring(8, 10) ;     
    let birthdayString = getBirthday(birthday);    
       
        var row = tbody.insertRow();
        var cellLastName = row.insertCell();
        cellLastName.innerHTML = name.last;
        var cellFirstName = row.insertCell();
        cellFirstName.innerHTML = name.first;
        var cellGender = row.insertCell();
        cellGender.innerHTML = gender;
        var cellCountry = row.insertCell();
        cellCountry.innerHTML = country;
        var cellDOB= row.insertCell();
        cellDOB.innerHTML = dob;
        var cellBirthday= row.insertCell();
        cellBirthday.innerHTML =  birthdayString;   
  });
  
  }
  
  function getBirthday(birthday){
  
   var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 

today =  mm + dd;
  var birthdayString ="";
  
  if( birthday == today) {
    birthdayString = "Birthday is today!"; 
  } else if ( birthday > today){
    birthdayString = "Birthday has yet to occur";  
  } else {
    birthdayString = "Birthday already happened";  
  }
  return birthdayString;    
 } 
    
      
  

