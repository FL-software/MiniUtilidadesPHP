$(function () { 
    $("#pressao-form").submit(function (e) {
        e.preventDefault();
    }).validate({
        rules: {
            pressao: {
                required: true,
                number: true
            },            
            data: {
                required: true,
                number: true
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