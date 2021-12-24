import Contact from './Contact.js'
import Form from './Form.js'

let f=document.querySelector('form')
f.addEventListener('submit',saveContact)

let inputs=document.querySelectorAll('input')

function saveContact(e)
{
  e.preventDefault()

  let form=new Form();

  form.isValidForm(inputs)
  if(form.isValid)
  form.postToStorage();
}