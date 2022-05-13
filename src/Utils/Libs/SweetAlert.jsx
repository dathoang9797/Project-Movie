import Swal from 'sweetalert2';

const primaryColor = '#ff385c';
const deleteColor = '#d33';

const sweetAlertDelete = (title = '', icon = '') => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: primaryColor,
    cancelButtonColor: deleteColor,
    confirmButtonText: 'Yes, delete it!',
  });
};

const sweetAlertConfirmContinueOrNot = (title = '', icon = '') => {
  return Swal.fire({
    text: 'Bạn có muốn đặt phòng tiếp không ?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: primaryColor,
    cancelButtonColor: deleteColor,
    confirmButtonText: 'Vâng tui muốn đặt tiếp',
  });
};

const sweetAlertSuccess = (message) => {
  return Swal.fire('Deleted!', message, 'success');
};

export const sweetAlert = {
  sweetAlertDelete,
  sweetAlertSuccess,
  sweetAlertConfirmContinueOrNot,
};
