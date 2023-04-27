import Swal from 'sweetalert2'

const areYouSure = (action) => {
    Swal.fire({
        title: 'Estás seguro?',
        text: "No podrás revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, elimínalo!'
    }).then((result) => {
        if (result.isConfirmed) {
            action()
            Swal.fire(
                'Eliminado!',
                'Tu petición fue aceptada.',
                'success'
            )
        }
    })

}

export default areYouSure;
