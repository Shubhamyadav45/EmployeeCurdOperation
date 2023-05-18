
var obj = [

]


function answer(){
readData();
insertingdata();

}



// taging error message paragraph with element Id

let emptyMessage = document.getElementById("emptyMessage");
let age_error = document.getElementById("empAgeMessage");
let name_error = document.getElementById("emptyNameMessage");
let contact_error = document.getElementById("emptyContactMessage");
let gender_error = document.getElementById("emptyGenderMessage")


// taging update message id
let emptyIDMessage = document.getElementById("emptyIDMessage");
let emptyNameUMessage = document.getElementById("emptyNameUMessage");
let emptyAgeUMessage = document.getElementById("emptyAgeUMessage");
let emptyGenderUMessage = document.getElementById("emptyGenderUMessage")
let emptyContactUMessage = document.getElementById("emptyContactUMessage")

// update error Message 

function errorUpdateId(msg, dsp) {
    emptyIDMessage.style.display = `${dsp}`;
    emptyIDMessage.innerHTML = `${msg}`;
    emptyIDMessage.style.color = "red";
    emptyIDMessage.style.margin = "0px";
    emptyIDMessage.style.padding = "0px";
    emptyIDMessage.style.marginLeft = "30px";
    emptyIDMessage.style.fontWeight = "bold";
}


function errorUpdateName(msg, dsp) {
    emptyNameUMessage.innerHTML = `${msg}`
    emptyNameUMessage.style.color = "red"
    emptyNameUMessage.style.display = `${dsp}`
    emptyNameUMessage.style.margin = "0px";
    emptyNameUMessage.style.padding = "0px";
    emptyNameUMessage.style.marginLeft = "30px"
    emptyNameUMessage.style.fontWeight = "bold";

}

function errorUpdateAge(msg, dsp) {
    emptyAgeUMessage.innerHTML = `${msg}`
    emptyAgeUMessage.style.color = "red"
    emptyAgeUMessage.style.display = `${dsp}`
    emptyAgeUMessage.style.margin = "0px";
    emptyAgeUMessage.style.padding = "0px";
    emptyAgeUMessage.style.marginLeft = "30px"
    emptyAgeUMessage.style.fontWeight = "bold";

}

function errorUpdateContact(msg, dsp) {
    emptyContactUMessage.innerHTML = `${msg}`;
    emptyContactUMessage.style.color = "red";
    emptyContactUMessage.style.padding = "0px"
    emptyContactUMessage.style.margin = "0px"
    emptyContactUMessage.style.marginLeft = "130px"
    emptyContactUMessage.style.display = `${dsp}`
    emptyContactUMessage.style.fontWeight = "bold";

}



// Id Error Message

function errorMessage(msg, dsp) {
    emptyMessage.style.display = `${dsp}`;
    emptyMessage.innerHTML = `${msg}`;
    emptyMessage.style.color = "red";
    emptyMessage.style.margin = "0px";
    emptyMessage.style.padding = "0px";
    emptyMessage.style.marginLeft = "150px";
    emptyMessage.style.fontWeight = "bold";
}




// Name Error
function NameErrorMsg(msg, dsp) {
    name_error.innerHTML = `${msg}`
    name_error.style.color = "red"
    name_error.style.display = `${dsp}`
    name_error.style.margin = "0px";
    name_error.style.padding = "0px";
    name_error.style.marginLeft = "150px"
    name_error.style.fontWeight = "bold";

}

// Age Error 
function AgeErrorMsg(msg, dsp) {
    age_error.innerHTML = `${msg}`
    age_error.style.color = "red"
    age_error.style.display = `${dsp}`
    age_error.style.margin = "0px";
    age_error.style.padding = "0px";
    age_error.style.marginLeft = "160px"
    age_error.style.fontWeight = "bold";

}

// Contact Error 
function ContactErrorMsg(msg, dsp) {
    contact_error.innerHTML = `${msg}`;
    contact_error.style.color = "red";
    contact_error.style.padding = "0px"
    contact_error.style.margin = "0px"
    contact_error.style.marginLeft = "160px"
    contact_error.style.display = `${dsp}`
    contact_error.style.fontWeight = "bold";

}



// Adding a row in table 

function Add() {
    var e = document.getElementById("EmpId").value;
    console.log(typeof (e))
    var id_emp = Number.parseInt(e);
    var name_emp = document.getElementById("empName").value;
    var age_emp = document.getElementById("empAge").value;
    var c = document.getElementById("empContact").value;
    //  var contact_emp=Number.parseInt(c)
    var g = document.getElementById("empGender");
    var gender_emp = g.options[g.selectedIndex].text;

    var isAlpha = str => /^[a-z A-Z]*$/.test(str);
    let numPattern = /^[0-9]{10}$/
    console.log(obj);


   if(filtering(obj,id_emp)){
    console.log("I am In if bbbblllooocck")
    errorMessage("Id's alredy exist", "block");
   }
  
   else if  ((Number.isInteger((id_emp))) && (isAlpha(name_emp)) && (age_emp >= 19 && age_emp <= 65) && (numPattern.test(c)) && gender_emp) 
   {
        NameErrorMsg("", "none")
        AgeErrorMsg("", "none")
        errorMessage("", "none")
        ContactErrorMsg("", "none")

        // inserting a object into array
        obj.push({
            id: id_emp,
            name: name_emp,
            age: age_emp,
            gender: gender_emp,
            contact: c,
        });
        console.log(obj);

        let empdetails = document.getElementById("empdetails");
        empdetails.style.width = "95%";

        let table = document.getElementById("read_table");
        // let t1 = document.getElementsByTagName('table');
        table.innerHTML = '';
        for (let emp of obj) {
            let htmlTab = `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.age}</td>
        <td>${emp.contact}</td>
           <td>${emp.gender}</td>
        <td><button type="button" id="uptButton"  onclick="openUpdate(this)" style="margin:10px; font-weight:bold; padding:15px; cursor:pointer; background-color:lightcoral; font-size:18px; border-radius:10px; width:120px; ">Update</button><button  style="margin:10px;  padding:15px; font-weight:bold; cursor:pointer; width:120px;
         font-size:20px; background-color:red; border-radius:10px;" type="button"   onclick="del(this)">Delete</button> </td>
        </tr>`
            table.innerHTML += htmlTab;
        }

        document.getElementById("EmpId").value = "";
        document.getElementById("empName").value = "";
        document.getElementById("empAge").value = "";
        document.getElementById("empGender").value = "Male";
        document.getElementById("empContact").value = "";

    }
    else {
        // Id Validation 
        console.log("I am Validatio block")
        if (e.trim() == "") errorMessage("field is empty! ", "block")
        else if (Number.isInteger(id_emp)) {
            emp_id = e;
            errorMessage("", "none");
        }
        else errorMessage("Please provide Number only!", "block")


        // Name Validation 

        if (name_emp.trim() == "") NameErrorMsg("field is empty", "block")
        else if (!isAlpha(name_emp)) NameErrorMsg("The name should be in characters only!", "block")
        else NameErrorMsg("", "none");

        // age validation 

        if (age_emp.trim() == "") AgeErrorMsg("field is empty", "block")
        else if (age_emp < 19 || age_emp > 65) AgeErrorMsg("Please specify the age between 19-65", "block")
        else AgeErrorMsg("", "none")

        // contact validation 
        let numPattern = /^[0-9]{10}$/
        if (c.trim() == "") ContactErrorMsg("field is empty", "block")
        if (numPattern.test(c)) {
            ContactErrorMsg("", "none")
        }
        else {
            ContactErrorMsg("Invalid Number", "block")
        }

    }
}

function filtering(obj,id_emp){
    let copy= obj.filter((e=>e.id==id_emp));
    if(obj.length>0){
        copy.forEach((e)=>{
        if( e.id==id_emp){
            console.log("hii equality")
         return true;
        }
     })
        }
        return false;

}



let selectedRow;
function openUpdate(e) {
    let openudateform = document.getElementById("cardUpdateForm");
    openudateform.style.visibility = "visible"

    let uid = document.getElementById("updateId");
    let u = uid.toString();
    let uname = document.getElementById("updateName");
    let uage = document.getElementById("updateAge");
    let gender = document.getElementById("updateGender");
    let ugender = gender.options[gender.selectedIndex].value;
    let c = document.getElementById("updateContact");
    let ucontact = Number.parseInt(c)


    console.log("uname ", typeof (uname))
    console.log("uage ", typeof (uage))
    console.log(" contact  ", typeof (c))



    let selectedRow = e.parentElement.parentElement;


    uid.value = selectedRow.cells[0].innerHTML
    uname.value = selectedRow.cells[1].innerHTML
    uage.value = selectedRow.cells[2].innerHTML
    c.value = selectedRow.cells[3].innerHTML
    ugender.value = selectedRow.cells[4].innerHTML

    // update error message 

    let saveUpdate = document.getElementById("saveUpdate");
    saveUpdate.onclick = function () {
        console.log(selectedRow)
        let r = selectedRow.rowIndex
        console.log(r);
        let numPattern = /^[0-9]{10}$/
        var isAlpha = str => /^[a-z A-Z]*$/.test(str);

        console.log(uid);
        console.log(uname);
        console.log(uage);
        console.log(c);


 if((uid.value)  && (isAlpha(uname.value)&& uname.value.trim()!=="") && (uage.value>=19 && uage.value<=65) && (numPattern.test(c.value)) && gender ){
         errorUpdateId("","none")
         errorUpdateName("","none")
         errorUpdateAge("","none")
        errorUpdateContact("","none")

        let table = document.getElementById("read_table")
        
        selectedRow.cells[0].innerHTML=uid.value;
        selectedRow.cells[1].innerHTML=uname.value;
        selectedRow.cells[2].innerHTML=uage.value;
        selectedRow.cells[3].innerHTML=c.value;
        let pp=selectedRow.cells[4].selectedIndex
        cancel();
        pp.innerHTML=ugender.value;
        cancel();
            
    }
          else {
            var isAlpha = str => /^[a-z A-Z]*$/.test(str);
            if(uid.value.trim()=='') errorUpdateId("field is empty","block")
            else errorUpdateId("","none");

            if(uname.value.trim()=="") errorUpdateName("field is empty","block")
            else if(!isAlpha(uname)) errorUpdateName("The name should be in characters only!","block")
            else errorUpdateName("","none");

            if(uage.value.trim()=="") errorUpdateAge("field is empty","block")
            else if(uage.value<19 || uage.value>65) errorUpdateAge("Please specify the age between 19-65","block")
            else errorUpdateAge("","none")

            let numPattern = /^[0-9]{10}$/
        if(c.value.trim()=="") errorUpdateContact("field is empty","block")
          if(numPattern.test(c.value)){
            errorUpdateContact("","none")
            }
            else{
                errorUpdateContact("Invalid Number","block")
            }

          }
    }

}

function cancel() {
    let openudateform = document.getElementById("cardUpdateForm");
    openudateform.style.visibility = "hidden"
}


function del(td) {
    console.log("thisssssssssss", td);
    selectedRow = td.parentElement.parentElement;
    console.log("Delete Row ------------", selectedRow);
    let d = document.getElementById("dialog");
    d.showModal();
    let cnfrm = document.getElementById("cnfrm");
    console.log(" Raw Index ========", selectedRow.rowIndex)
    let r = selectedRow.rowIndex;
    cnfrm.addEventListener('click', function () {

        console.log(obj.splice(r, 1))
        console.log(obj)
        selectedRow.remove();
        ccancel();
        let empdetails = document.getElementById("empdetails");
        empdetails.style.width = "90%";
    })
}

function ccancel() {
    let d = document.getElementById("dialog");
    d.close();


}