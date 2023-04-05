import Swal from 'sweetalert2'

const errorAlert = (msg) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal!',
        footer: msg
      })
}

export default errorAlert;
