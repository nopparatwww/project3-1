let input = document.getElementById('input');

function checkInfo(){
    if(input.value != 'abc'){
        Swal.fire({
            icon: "error",
            title: "Some text is missing!",
            text: "Make sure that you fill all of the infomation",
            backdrop: `rgba(255, 0, 0, 0.3)`
          });
        input.innerHTML = 'password incorrect'
    }
    else {
        Swal.fire({
            icon: "success",
            title: "Login successful!",
            width: 600,
            padding: "3em",
            backdrop: `
              green
              no-repeat
            `
          }).then(()=>{
            window.location.href = 'index.html';
          });
    }
}