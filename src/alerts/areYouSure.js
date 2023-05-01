import Swal from 'sweetalert2'

const areYouSure = (action,parametro) => {
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
            action(parametro)
                .then( answer=>{
                    Swal.fire(
                        'Eliminado!',
                        'Tu petición fue aceptada.',
                        'success'
                    )
                    setTimeout(()=>{
                        window.location.reload()
                    },2000)
                })
                .catch(e=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: e,
                        footer: 'Algo salió mal!'
                      })
                })            
        }
    })

}

export default areYouSure;
