const SERVICE_ID = 'service_sv6imxt';
const PUBLIC_KEY = 'a5mTb8aKaleHUo-oq';
const TEMPLATE_ID = 'template_tcl3mqa';

emailjs.init(PUBLIC_KEY);

// Open modal
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

// Close modal
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Form submission
// document.getElementById('massageForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Massage request sent with your preferences!');
//     this.reset();
// });

// Form submission
document.getElementById('massageForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const treatment = document.getElementById('treatment').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const addons = [...document.querySelectorAll('input[name="addons"]:checked')].map(el => el.value).join(', ');
  const scents = document.getElementById('scents').value;
  const snacks = document.getElementById('snacks').value;
  const drinks = document.getElementById('drinks').value;
  const requests = document.getElementById('requests').value;

  // Prepare email parameters
  const templateParams = {
    name: name,
    email: email,
    treatment: treatment,
    date: date,
    time: time,
    addons: addons || "None",
    scents: scents || "No preference",
    snacks: snacks || "No preference",
    drinks: drinks || "No preference",
    requests: requests || "None"
  };

  // Send email using EmailJS
  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    .then(function(response) {
       alert("Massage request sent successfully!");
       document.getElementById('massageForm').reset();
    }, function(error) {
       alert("Oops! Something went wrong.\n" + JSON.stringify(error));
    });
});