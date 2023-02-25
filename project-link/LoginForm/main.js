document.getElementById('show-eye').style .visibility = "hidden"


function hide() {

  const showPasword = document.getElementById('password')

  if (showPasword.type === "password") {
    showPasword.type = "text";

  } else {
    showPasword.type = "password";
  }

  document.getElementById('show-eye').style .visibility = "visible"
  document.getElementById('hide-eye').style .visibility = "hidden"

}

function show() {


  const showPasword = document.getElementById('password')


  if (showPasword.type === "password") {
      showPasword.type = "text";
    } else {
      showPasword.type = "password";
    }

  document.getElementById('show-eye').style .visibility ='hidden'
  document.getElementById('hide-eye').style .visibility ='visible'
}