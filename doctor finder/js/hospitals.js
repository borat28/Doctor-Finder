const hospitalData = [
  {
    name: "Brahmanbaria Sadar Hospital",
    doctors: [
      { name: "Dr. Md.Monir Hossain", specialty: "Cardiologist", availableDays: "Everyday" },
      { name: "Dr. A.B.M Musa Chowdhury", specialty: "ENT", availableDays: "Sunday, Monday" },
       { name: "Dr. Humayun Kabir Reza", specialty: "Orthopedic", availableDays: "Everyday" },
      { name: "Dr. Shamima Rahman", specialty: "Gynae & Obs", availableDays: "Sunday, Monday" }
    ]
  },
  {
    name: "Christian Mission Hospital",
    doctors: [
      { name: "Dr. Kamrunnahar", specialty: "Gynecologist", availableDays: "Everyday except Sunday" },
      { name: "Dr. Rakibul Hassan", specialty: "Child Specialist", availableDays: "Everyday except Sunday" },
      { name: "Dr. Rakiba Chowdhuri Uma", specialty: "Physiotherapist", availableDays: "Everyday except Sunday" }

    ]
  },
  {
    name: "Brahmanbaria Medical College Hospital",
    doctors: [
      { name: "Dr. Sayed A.M. Ashraful Abedin", specialty: "ENT", availableDays: "Wednesday & Thursday" },
      { name: "Dr. M.M.Sani", specialty: "Cardiologist", availableDays: "Wednesday" },
      { name: "Dr. Md. Arif Uddin Ahmed", specialty: "Dermatologist", availableDays: "Thursday & Friday" },
      { name: "Dr. Md. Safiul Islam Khaleed ", specialty: "Psychiatrist", availableDays: "Tuesday & Wednesday" },
      { name: "Dr. Didarul Hassan", specialty: "Ophthalmologist", availableDays: "Tuesday & Thursday" }
    ]
  }
];

function searchDoctor() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Clear previous results

  let found = false;

  hospitalData.forEach(hospital => {
    const matchedDoctors = hospital.doctors.filter(doc =>
      doc.specialty.toLowerCase().includes(searchTerm)
    );

    if (matchedDoctors.length > 0) {
      found = true;
      const hospitalElement = document.createElement('div');
      hospitalElement.innerHTML = `<h3>🏥 ${hospital.name}</h3>`;

      matchedDoctors.forEach(doc => {
        hospitalElement.innerHTML += `
          <p>👨‍⚕️ <strong>${doc.name}</strong><br>
          🏷️ Specialty: ${doc.specialty}<br>
          📅 Available: ${doc.availableDays}</p>
        `;
      });

      resultsDiv.appendChild(hospitalElement);
    }
  });

  if (!found) {
    resultsDiv.innerHTML = '<p>No doctors found with that specialty.</p>';
  }
}
