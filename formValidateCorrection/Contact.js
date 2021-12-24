export default class Contact
{#name
#email
#age
 constructor(name,email,age)
 {
  this.#name=name
  this.#age=age
  this.#email=email

 }
 set name(name)
 {
     this.#name=name
     
 }
 set age(age)
 {
     this.#age=age
     
 }
 set email(email)
 {
     this.#email=email}
  get name()
 {
     return this.#name
     
 }
 get age()
 {
    return this.#age
     
 }
 get email()
 {
    return this.#email}   
 

}