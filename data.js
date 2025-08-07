function simulateTransaction() {
  const isSuccess = Math.random() > 0.25; // 75% chance of success
  const txn = {
    time: new Date().toLocaleTimeString(),
    amount: isSuccess ? parseFloat((Math.random() * 1000 + 100).toFixed(2)) : 0,
    status: isSuccess ? 'success' : 'failed'
  };
  updateDashboard(txn);
}

setInterval(simulateTransaction, 3000);
