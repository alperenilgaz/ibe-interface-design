
let userForm = document.querySelector("#userForm")
const ALERT = document.querySelector("#alert")
const alertFunction = (title,message) => 
    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>${title}</strong>${message}.<button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span></button></div>`


userForm.addEventListener("submit",formHandler)

function formHandler(event)
{
    event.preventDefault()
    const EMAIL = document.querySelector("#email")
    const USER_NAME = document.querySelector("#Username")
    const SUGGESTİON = document.querySelector("#öneri")
    const EKIP = document.querySelector("#ekip")
    if(USER_NAME.value && EKIP.value)
    {
    addItem(USER_NAME.value,SUGGESTİON.value,EKIP.value)
    }
    else
    {
        ALERT.innerHTML = alertFunction(
            "Uyarı !",
            "Lutfen Boş Alanları Doldurunuz"
        )
    }
    USER_NAME.value = ""
    EKIP.value = ""
    SUGGESTİON.value = ""
    EMAIL.value = ""

}
let userDOM = document.querySelector("#userList")
const addItem = (userName,öneri,ekip) => {
let liDOM = document.createElement('li')
liDOM.classList.add(
    'list-group-item','d-flex','justify-content-between','align-items-center'
)

let counter = ekip

liDOM.innerHTML = `<strong>${userName}</strong> adlı kullanıcının önerisi <strong>${öneri}</strong> 
<span class=" btn1 badge badge-primary badge-pill">Katılımcı Sayısı: ${counter}</span><button id = "button" type="button" class = "btn btn-success">Katıl</button>`
const button = liDOM.querySelector("#button");


button.addEventListener("click",clickEvent)
function clickEvent()
{
    counter ++
    liDOM.innerHTML = `</strong> adlı kullanıcının önerisi <strong>${öneri}</strong> 
    <span class=" btn1 badge badge-primary badge-pill">Katılımcı Sayısı: ${counter}</span>`

}


userDOM.appendChild(liDOM)
}