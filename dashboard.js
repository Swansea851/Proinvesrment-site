
document.addEventListener("DOMContentLoaded", () => {
  const depositsContainer = document.getElementById("deposits");

  firebase.firestore().collection("deposits").onSnapshot(snapshot => {
    depositsContainer.innerHTML = "";
    if (snapshot.empty) {
      depositsContainer.innerHTML = "<p>No deposits found.</p>";
    } else {
      snapshot.forEach(doc => {
        const deposit = doc.data();
        const item = document.createElement("div");
        item.className = "deposit-item";
        item.innerHTML = `<strong>${deposit.user}</strong>: $${deposit.amount} <em>(${deposit.status})</em>`;
        depositsContainer.appendChild(item);
      });
    }
  });
});
