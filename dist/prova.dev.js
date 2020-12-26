/* class User{
    constructor(email,name){
    this.email=email;
    this.name=name;
    }
    
}
var user=new User('aa','bbb');

User.prototype.login=function(){
    console.log(this.name);
}
user.login();

class Admin extends User{
    constructor(email,name,role){
        super(email,name);
        this.role=role;
    }
   

}

var admin= new Admin("pippo","pluto","master");
console.log(admin.role)


document.write(user.email)
console.log(user.email)

var iterable = [3, 5, 7];
iterable.macchina = 'hello';

iterable.forEach(function(item,index){
    iterable[index]+=1;
    console.log(iterable);
});
for(let i of iterable){
   
    console.log(i);
}

 */
"use strict";