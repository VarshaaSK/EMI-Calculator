function calculate(){
    const amount = document.querySelector("#amount").value;
    const rate = document.querySelector("#rate").value;
    const month = document.querySelector("#months").value;

    const interest = (amount * (rate * 0.01)) / month;

    const total = ((amount / month) + interest).toFixed(2);

    document.querySelector("#totalvalue").innerHTML = "EMI : (₹)" + total;
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};