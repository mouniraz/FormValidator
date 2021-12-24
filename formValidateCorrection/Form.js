import Contact from './Contact.js'
export default class Form
{
  constructor()
  {
 this.contact=new Contact()
 this.isValid=true
  }
   
  isValidEmail(email)
  {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase())
  }
  isValidName(name){
    if(name.length<4)
    return false
    
    return true

  }
  isValidAge(age)
  { if(isNaN(parseInt(age)) || age<=0 || age >150)
    return false
    return true

  }

  isValidForm(inputs)
  {
    inputs.forEach(input => {
            if(input.name=='name' )
              { if(this.isValidName(input.value))
                this.contact.name=input.value
                else
              {
                this.isValid=false
              this.affiche_error('name')
              }
              }
              

              if(input.name=='email' )
              {if(this.isValidEmail(input.value))
                this.contact.email=input.value
                else
                {
                  this.isValid=false
                this.affiche_error('email')
                }
              }
             
            
            
              if(input.name=='age' )
              {if(this.isValidAge(input.value))
                this.contact.age=input.value
                else
              {
                this.isValid=false
              this.affiche_error('age')
              }
              }
              
        
    });
 console.log(this.contact)
  }
  affiche_error(field)
  {
      console.log(field + "is inValid field")
  }
  postToStorage() {

    let contacts = JSON.parse(localStorage.getItem('valid-contact')) || [];
    
    let contact={name:this.contact.name,
                email:this.contact.email,
                age:this.contact.age
                }
             
    contacts.push(contact)
   

    localStorage.removeItem('valid-contact')
    localStorage.setItem('valid-contact', JSON.stringify(contacts));
}

}