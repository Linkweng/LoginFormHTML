var UserName = document.getElementById('Name');
var PassWord = document.getElementById('Ann');
var StrengthUse = document.getElementById('UserName');
var StrengthPass = document.getElementById('Pass');

UserName.addEventListener('input', () => {

    if(UserName.value.length > 0){
        StrengthUse.style.display = "block";
    }else{
        StrengthUse.style.display = "block";
    }
})
