function Submit()
        {
            var email = document.getElementById("txtEmail").value;
            var patEmail = /^(\w)+@(\w)+\.(\w){2,3}$/;
            
            var comment = document.getElementById("txtComment").value;

            if(email.length == 0)
            {
                alert("Email cannot be blank");
                txtEmail.focus();
                return;
            }
            else
            {
                if(!patEmail.test(email))
                {
                    alert("The Email must be in format xxxx@xxx.com");
                    document.getElementById("txtEmail").value = "";
                    txtEmail.focus();
                    return;
                }
            } 
          
        
        if(comment.length == 0)
            {
                alert("Comment cannot be blank");
                txtComment.focus();
                return;
            }
        } 