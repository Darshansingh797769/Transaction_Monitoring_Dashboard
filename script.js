let txnData = [];
let totalAmount = 0;
let successCount = 0;
let failCount = 0;

const ctx = document.getElementById('txnChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Successful Transaction Amount (₹)',
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

  if (newTxn.status === 'success') {
    totalAmount += newTxn.amount;
    successCount++;
    chart.data.labels.push(newTxn.time);
    chart.data.datasets[0].data.push(newTxn.amount);
  } else {
    failCount++;
  }

  if (txnData.length > 20) {
    txnData.shift();
    if (chart.data.labels.length > 20) {
      chart.data.labels.shift();
      chart.data.datasets[0].data.shift();
    }
  }

  document.getElementById('total-txns').innerText = `Total Transactions: ${txnData.length}`;
  document.getElementById('success-txns').innerText = `Successful: ${successCount}`;
  document.getElementById('failed-txns').innerText = `Failed: ${failCount}`;
  document.getElementById('total-amount').innerText = `Total Amount: ₹${totalAmount.toFixed(2)}`;

  chart.update();
}
