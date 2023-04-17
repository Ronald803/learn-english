import Swal from 'sweetalert2'

const errorAlert = (msg) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: msg,
        footer: 'Algo salió mal!'
      })
}

export default errorAlert;
