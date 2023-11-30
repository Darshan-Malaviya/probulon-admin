import sw from "sweetalert2";

const swal = {
  success: (msg) => {
    let timerInterval;
    return sw.fire({
      html: "<b>" + msg + "</b>",
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
      background: "#BCE29E",
      position: "top-right",
      width: 300,
      backdrop: false,
      color: "white",
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  },
  error: (msg) => {
    let timerInterval;
    return sw.fire({
      html: "<b>" + msg + "</b>",
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
      background: "#FF8787",
      position: "top-right",
      width: 300,
      backdrop: false,
      color: "white",
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  },
};

export default swal