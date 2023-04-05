import Swal from 'sweetalert2'

const successAlert = (msg) => {
    Swal.fire({
        icon: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1500
      })
}

export default successAlert;
