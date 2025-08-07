function simulateTransaction() {
  const txn = {
    time: new Date().toLocaleTimeString(),
    amount: parseFloat((Math.random() * 1000 + 100).toFixed(2)),
  };
  updateDashboard(txn);
}

setInterval(simulateTransaction, 3000); // Simulate every 3 seconds
