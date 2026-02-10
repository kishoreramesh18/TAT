/* 🔐 AUTH PROTECTION */
if (sessionStorage.getItem("isAdminLoggedIn") !== "true") {
  window.location.replace("signin.html");
}

/* 🚫 BLOCK BACK BUTTON */
history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.pushState(null, null, location.href);
};

/* 🚪 LOGOUT */
function logout() {
  sessionStorage.removeItem("isAdminLoggedIn");
  window.location.replace("signin.html");
}

/* 📊 SHOW DASHBOARD */
function showDashboard() {
  setActiveMenu(0);
  document.getElementById("dashboardContent").style.display = "block";
  document.getElementById("iframeSection").style.display = "none";
}


/* 🧾 LOAD ZOHO FORM */
function loadForm() {
  setActiveMenu(1);
  document.getElementById("dashboardContent").style.display = "none";
  document.getElementById("iframeSection").style.display = "block";

  document.getElementById("contentFrame").src =
    "https://forms.zohopublic.in/otasports/report/TAT/reportperma/_3NWVpBnHcoPdoslPtcIaIvejr0y8lcszdkDLBy_748";
}

function setActiveMenu(index) {
  const links = document.querySelectorAll(".sidebar nav a");
  links.forEach(link => link.classList.remove("active"));
  links[index].classList.add("active");
}
