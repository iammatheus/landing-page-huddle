function sendEmail(email){
   let txtEmail = document.getElementById('email')

   const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

   const isValid = expReg.test(email)

   if(isValid == true) {
      alert('Email successfully sent!')
   }else {
      txtEmail.classList.add('error')
   }
   
}