$(function () {
      $("#alimentacao-form").submit(function (e) {
        e.preventDefault()
    }).validate({
        rules: {
            alimentacao: {
                required: true,            
            },
            data: {
                required: true,            
            }, 
            hora: {
                required: true,            
            }
        },
            submitHandler: function (form) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registro realizado com sucesso',
                showConfirmButton: false,
                timer: 1500
              })
        }
    });
})