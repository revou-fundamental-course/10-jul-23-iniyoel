function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const gender = document.getElementById('gender').value;

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert('Masukkan angka yang valid untuk tinggi dan berat!');
      return;
  }

  const heightMeter = height / 100;
  const bmi = weight / (heightMeter * heightMeter);
  const bmiCategory = getBMICategory(bmi);

  let message = `BMI: ${bmi.toFixed(2)}<br>`;
  message += `Kategori: ${bmiCategory}<br>`;

  if (gender === 'male') {
      message += 'Catatan: BMI untuk laki-laki adalah lebih tinggi dibandingkan perempuan dalam kategori yang sama.';
  } else {
      message += 'Catatan: BMI untuk perempuan adalah lebih rendah dibandingkan laki-laki dalam kategori yang sama.';
  }

  document.getElementById('result').innerHTML = message;
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
      return 'Berat Badan Kurang';
  } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Berat Badan Normal';
  } else if (bmi >= 25 && bmi < 29.9) {
      return 'Kelebihan Berat Badan';
  } else {
      return 'Obesitas';
  }
}