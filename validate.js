
const form=document.getElementById('form');           //The input from form
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const passwordcheak=document.getElementById('passwordcheak');


form.addEventListener('submit',function(obj)
    {
        obj.preventDefault();
       
        cheakInputs();
    });
function cheakInputs()
    {
        var usernameval=username.value;
        var emailval=email.value;
        var passwordval=password.value;
        var passwordcheakval=passwordcheak.value;
        var selector;

        if(usernameval==='')
            {
                selector="user_name";
                setError(selector,"Username can't be blank");
            }
        else
            {
                selector="user_name";
                setSuccess(selector);
            }
        if(emailval==='')
            {
                selector="e_mail";
                setError(selector,"Email can't be blank");
            }
        else
            {
                selector="e_mail";
                setSuccess(selector);
            }
        if(passwordval==='')
            {
                selector="pass_word";
                setError(selector,"Password can't be blank");
            }
        else if(passwordval.length < 6)
            {
                selector="pass_word";
                setError(selector,"Password at lease 6 charactor");
            }
        else
            {
                selector="pass_word";
                setSuccess(selector);
            }
        if(passwordcheakval==='')
            {
                selector="pass_cheak";
                setError(selector,"Password cheak can't be blank");
            }
        else if(passwordval!==passwordcheakval)
            {
                selector="pass_cheak";
                setError(selector,"Password doesn't match");
            }
        else
            {
                selector="pass_cheak";
                setSuccess(selector);
            }
    }
function setError(input,message)
    {
        const user_name=document.getElementById('username');    
        const email=document.getElementById('email');
        const password=document.getElementById('password');
        const passwordcheak=document.getElementById('passwordcheak');
          
        switch(input)                                           //wich div is call the function that parent element seelected
            {
                case "user_name":
                    var form_control=username.parentElement;
                    break;
                case "e_mail":
                    var form_control=email.parentElement;
                    break;
                case "pass_word":
                    var form_control=password.parentElement;
                    break;
                case "pass_cheak":
                    var form_control=passwordcheak.parentElement;
                    break;
            }
        
        var small=form_control.querySelector('small');      //small tag selected
        small.innerText=message;                            //message assin in small tag
        form_control.className="form_control error";        //selected div tag change the class
     
    }
function setSuccess(input)
    {
        const username=document.getElementById('username');
        const email=document.getElementById('email');
        const password=document.getElementById('password');
        const passwordcheak=document.getElementById('passwordcheak');
        
        switch(input)
        {
            case "user_name":
                var form_control=username.parentElement;
                break;
            case "e_mail":
                var form_control=email.parentElement;
                break;
            case "pass_word":
                var form_control=password.parentElement;
                break;
            case "pass_cheak":
                var form_control=passwordcheak.parentElement;
                break;
        }
        form_control.className='form_control succes'        //selected tag added succes class
    }

