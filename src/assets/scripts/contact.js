
  
export async function contactJS() {

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Form Contact", event);
      
        const myForm = event.target;
        const formData = new FormData(myForm);
    
        const toastLiveExample = document.getElementById('liveToast');
      
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        })
          .then(() => {
            alert("Thank you for your submission")       
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastBootstrap.show();                        
          })
          .catch(error => {
            alert(error)
          });
    };

    const form = document.querySelectorAll("form");
    console.log("Contact JS", form);
    form.addEventListener("click", handleSubmit);
}
  

