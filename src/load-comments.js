
let load_messages = (messages) =>
{
    let message_section = document.getElementById('msg_sec');
    message_section.innerHTML="";
    for (let n_m of messages)
    {
        console.log(messages);
        message_section.innerHTML+=" <div class='.message'> <p>"+ n_m.name +" wrote, </p> <p>" + n_m.message +" </p> </div> ";
        console.log(n_m);
    }  
}

let blog_com =(blogNum) =>{
    localStorage.setItem('dispPage',blogNum);
    let messages=JSON.parse(localStorage.getItem(blogNum));
    if (messages)
    {
        console.log("Present");
        load_messages(messages);
    }
    else
    {
        localStorage.setItem(blogNum, JSON.stringify([]));
        messages=[]
        console.log("Created");    
    }
    let msg_form = document.getElementById('msg_form');
    msg_form.addEventListener("submit", function(event){
        let name = document.getElementById('txt_name');
        let msg = document.getElementById('txt_message');
        
        let messages=JSON.parse(localStorage.getItem(localStorage.getItem('dispPage')));
        console.log(messages);    
        if( ! messages)
        {
            messages = [];
            console.log('Abs')        
        }
        messages.push({'name':name.value, 'message':msg.value});
        localStorage.setItem(blogNum,JSON.stringify(messages));
        // console.log(messages);
        load_messages(messages);
        event.preventDefault();
    });
    
}

export{blog_com,load_messages}