let saloon={
    name:"The Fashion Pet", 
    address:{
        street:"Av. Palm", 
        number:"262", 
        zip:"23456", 
        city:"San Diego", 
        state:"California"
    },
    hours:{
        open:"9:00am", 
        close:"5:00pm"
    },
    pets:[
        //{
            //name:"Scooby", 
            //age:50, 
            //gender:"male", 
            //breed:"Dane", 
            //service:"Grooming", 
            //ownerName:"Shaggy", 
            //contactPhone:"555-555-5555"
        //},
    ]
}

function displayInfo(){
    document.getElementById("footer-info").innerHTML=`
    <p>${saloon.address.number} ${saloon.address.street}, </p>
    <p>${saloon.address.city}, ${saloon.address.state} ${saloon.address.zip}</p>`; 
}
displayInfo(); 

let x=0; 
//constructor
// <--Local variables--->
function Pet(petName, age, gender, breed, service, owner, phone){
    this.name = petName; 
    this.age = age; 
    this.gender = gender; 
    this.breed = breed;
    this.service = service; 
    this.owner = owner;
    this.phone = phone; 
    this.id=x++;
}
function checkInput(variable, id){
    if(variable.length<1)
    {
        document.getElementById(id).classList.add("error"); 
        return false; 
    }
    else
    {
        document.getElementById(id).classList.remove("error"); 
        return true; 
    }
}

function getInfo(){
    let isValid = true; 

    let petName=document.getElementById("petName").value;
    isValid = checkInput(petName, "petName"); 

    let age=document.getElementById("petAge").value;
    isValid = checkInput(petAge, "petAge"); 
    
    let gender=document.getElementById("petGender").value;
    isValid = checkInput(gender, "petGender"); 
    
    let breed=document.getElementById("petBreed").value;
    isValid = checkInput(breed, "petBreed"); 
    
    let service=document.getElementById("petService").checked;
    isValid = checkInput(service, "petService");
    
    let owner=document.getElementById("ownerName").value;
    isValid = checkInput(owner, "ownerName"); 
    
    let phone=document.getElementById("phone").value;
    isValid = checkInput(phone, "phone"); 

    //console.log(pet);    
    
    //for(let i=0; i<saloon.pets.length; i++){
    //    console.log(saloon.pets[i]); 
    //}
    if(isValid == true)
    {
        let pet = new Pet(petName, age, gender, breed, service, owner, phone); 

        saloon.pets.push(pet);  
        console.log(pet); 
        document.getElementById("petInfo").reset();
        showPetCards(); 
    };

    //console.log(`${petName} ${age} ${gender} ${breed} ${service1} ${service2} ${service3} ${owner} ${phone}`); 
}
function displayPetNames(){

}
function createCard(pet){
    return`
    <div id="${pet.id}" class="card my-card">
          <h3>${pet.name}</h3>
          <label>${pet.age}</label>
          <label>${pet.gender}</label>
          <label>${pet.breed}</label>
          <label>${pet.service}</label>
          <label>${pet.owner}</label>
          <label>${pet.phone}</label>
          <button class="btn btn-danger btn-sm" onclick="removePet(${pet.id})">Delete</button>
        </div>`;
}
//add button at bottom to remove a specific card
function showPetCards(){
    document.getElementById("petList").innerHTML = ' '; 
    for(let i = 0; i<saloon.pets.length; i++)
    {
        document.getElementById("petList").innerHTML+=createCard(saloon.pets[i]); 
    }
}
function removePet (index){
    //search the pet
    saloon.pets.forEach(function callBack (pet, value) {
        if(index===pet.id){
            console.log("I found it in the position",value);
            saloon.pets.splice(value,1);    //remove the pet from array
        }
    });
    console.log("Removing pet ",index);
    document.getElementById(index).remove(); //remove the pet from html
}
function searchPet(){
    let searchString = document.getElementById("gsearch").value;

    saloon.pets.forEach(function callBack(pet,value) {
        if(searchString.toLowerCase()===pet.name.toLowerCase()){
            document.getElementById(pet.id).classList.add("highlight");   
        }
    });
}
function registeredPets(){
    alert("Total number of registered pets is:",saloon.pets.length); 
}
function init(){
    displayInfo(); 
    let scooby= new Pet("Scooby",15, "Male","Great Dane","Basic Service 3","Frankie","555-555-5555");
    saloon.pets.push(scooby); 
    let mayson= new Pet("Mayson",7, "Male","Husky","Premium Service","Daniel","000-000-0000");
    saloon.pets.push(mayson); 
    let duke= new Pet("Duke",3, "Male","Belgian Malinois","Basic Service 4","Erick","915-123-4567");
    saloon.pets.push(duke); 
    showPetCards();
}
window.onload=init;