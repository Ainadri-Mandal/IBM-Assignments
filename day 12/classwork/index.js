let form=document.getElementById("userForm");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    //console.log(e)
    let FullNAme=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let number=document.getElementById("number").value;
    let password=document.getElementById("password").value;
    let confirmpassword=document.getElementById("confirmpassword").value;

    let obj={
        FullNAme,email,number,password,confirmpassword
    }

    

    if(obj.password!==obj.confirmpassword){
        return alert("password don't match")
    }

    let tr=document.createElement("tr")

    let td1=document.createElement("td")
    td1.innerText=obj.FullNAme;

    let td2=document.createElement("td")
    td2.innerText=obj.email;

    let td3=document.createElement("td")
    td3.innerText=obj.number;

    let td4=document.createElement("td")
    td4.innerText=obj.password;

    let td5=document.createElement("td")
    td5.innerText=obj.confirmpassword;

    tr.append(td1, td2, td3, td4, td5);
    document.getElementById("tbody").append(tr);

    //console.log(obj)
    // console.log(FullNAme,email,number,password,confirmpassword);
})