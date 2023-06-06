import Swal from 'sweetalert2'

const successAlert = (msg) => {
    Swal.fire({
        icon: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 2000
      })
}

export default successAlert;
