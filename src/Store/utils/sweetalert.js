import Swal from 'sweetalert2';

export function showSweetAlert(icon, title, showConfirmButton, timer) {
    Swal.fire({
      position: 'center',
      icon,
      title,
      showConfirmButton,
      timer,
      customClass:{
        container: 'my-swal'
      }
    });
  }