//validação simples
$(document).ready(function(){
    $("#frmCadastro").validate({
        rules:{
            nome:{
                required: true,
                minlength: 3
            }
        }
    })
})