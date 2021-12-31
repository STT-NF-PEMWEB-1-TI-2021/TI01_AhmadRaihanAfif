function jalankanAlert() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

     if (username == "ahmad2017" && password == "integrity") {
         Swal.fire(
             'Login Berhasil!',
             'Terima',
             'success'
         )
     } else{
         Swal.fire({
             icon: 'error',
             title: 'Oops...',
             text: 'Username atau password salah!',
         })
     }
}