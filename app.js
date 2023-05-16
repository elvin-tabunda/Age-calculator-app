const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
  
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Subtract 1 from month because it's zero-based in JavaScript Date object
  
    const ageInMilliseconds = today - birthDate;
    const ageDate = new Date(ageInMilliseconds); // Convert milliseconds to a Date object
  
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate();
  
    document.getElementById('yearsResult').textContent = years;
    document.getElementById('monthResult').textContent = months;
    document.getElementById('daysResult').textContent = days;
  });