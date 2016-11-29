const logTime = () => console.log(new Date().toLocaleTimeString());
const timer = setInterval(logTime, 1000);
setTimeout(() => clearInterval(timer), 3000);
