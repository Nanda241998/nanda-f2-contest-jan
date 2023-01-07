let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  // second array
let arr2 = [
    { id: 4, name: "alpha", age: "18", profession: "developer" },
    { id: 5, name: "jane", age: "20", profession: "admin" },
    { id: 6, name: "jill", age: "19", profession: "admin" }
];


// ******* spread operator ********
 let arr3 = [{all values of a}, {all the values of b}] 
// eg arr = [1,2,3,  4,5,6] 
arr = [...arr, ...arr2];
arr = arr.concat(arr2);



// below both are does the same thing
 for(let i = 0; i < arr.length; i++){
/   console.log(arr[i]);
 }

arr.forEach((item) => {
    console.log(item);
 })
 let removeAdmin = document.getElementById("removeAdmin");
 let concatenateArray = document.getElementById("concatenateArray");

let addData = document.getElementById("addData");
 let nameInput = document.getElementById("nameInput");
 let professionInput = document.getElementById("professionInput");
 let ageInput = document.getElementById("ageInput");

// this function must have changed the age type from string to number
function PrintDeveloperswithMap(function (item) {
    item.age = Number(item.age);
})

// to change the age of john to 19
function PrintDeveloperbyForEach((item) => {
    if (item.name === "john") {
        item.age = 19;
    }
})
  
  
  
  function addData() {
    //Write your code here
    let name = nameInput.value;
    let profession = professionInput.value;
    let age = ageInput.value;

    if (name != "" && profession != "" && age != "") {

        // create a new obj from the received value and
        let newObj = {
            id:4,name:"susan",age:"20",profession:"intern"
        }

        //  then add it to the existing userData array
        userData.push(newObj);
        console.log(userData)
        listOnPage.innerHTML = "";
        userData.forEach((item) => {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `${item.id} &nbsp;&nbsp; Name: ${item.name} &nbsp; Age: ${item.age}  &nbsp; Profession: ${item.profession}`;
            listOnPage.append(newDiv);
        })
    }
  }
  
  function removeAdmin() {
    //Write your code here
  }
  
  function concatenateArray() {
    //Write your code here
  }
  
