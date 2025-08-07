let txnData = [];
let totalAmount = 0;

const ctx = document.getElementById('txnChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Transaction Amount (₹)',
      data: [],
      borderColor: '#38bdf8',
      borderWidth: 2,
      fill: false,
    }]
  },
  options: {
    responsive: true,
    animation: false,
    scales: {
      x: { display: true, title: { display: true, text: 'Time' }},
      y: { display: true, title: { display: true, text: 'Amount' }}
    }
  }
});

function updateDashboard(newTxn) {
  txnData.push(newTxn);
  if (txnData.length > 20) txnData.shift(); // keep chart compact

  totalAmount += newTxn.amount;

  document.getElementById('total-txns').innerText = `Total Transactions: ${txnData.length}`;
  document.getElementById('total-amount').innerText = `Total Amount: ₹${totalAmount.toFixed(2)}`;

  chart.data.labels.push(newTxn.time);
  chart.data.datasets[0].data.push(newTxn.amount);
  if (chart.data.labels.length > 20) {
    chart.data.labels.shift();
    chart.data.datasets[0].data.shift();
  }

  chart.update();
}
