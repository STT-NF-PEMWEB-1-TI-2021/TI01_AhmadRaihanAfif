const room = document.getElementById("chat");
const inp_chat = document.getElementById("inp")

function sendChat(){
    const chat= inp_chat.value;

    if(chat.trim() != ""){
        room.innerHTML += `<div class = "bubble">
            <p>` + chat.trim() + `</p>
        </div>`
    }

    inp_chat.value = "";
    inp_chat.focus();
}