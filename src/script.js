let comm = () =>
{
    console.log('Script loaded');
    let f = document.getElementById('contact_form');
    let msg = document.getElementById('txt_msg');
    msg.value="";
    
    f.addEventListener('submit',function(event){
        let name = document.getElementById('txt_name').value.trim();
        let msg = document.getElementById('txt_msg').value.trim();
        let subj = document.getElementById('txt_subj').value.trim();
        let msg_div = document.getElementById('notify_div');
        msg_div.innerHTML="";
        if(name == "")
        {
            msg_div.innerHTML+="Please enter yor name. "
        }
        if(subj == "")
        {
            msg_div.innerHTML+="<p>Please enter the subject.</p> "
        }
        if(msg == "")
        {
            msg_div.innerHTML+="<p>Please enter the message. </p>"
        }
        if(msg_div.innerHTML=="")
        {
            msg_div.innerHTML="Thank you "+name+". Your responce has been recorded";
            document.getElementById('txt_name').value="";
            document.getElementById('txt_msg').value="";
            document.getElementById('txt_subj').value="";
        }
        event.preventDefault();
    });
}

let  startTimer = (duration, display) => {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds + ' Minutes';

        if (--timer < 0) {
            timer = 0;
            display.textContent = ''
        }
    }, 1000);
}

export{comm,startTimer}