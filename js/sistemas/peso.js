$(function () { 
    $("#peso-form").submit(function (e) {
        e.preventDefault();
    }).validate({
        rules: {
            peso: {
                required: true,
                number: true
            },
            altura: {
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