function calculateShift() {
    const startDate = new Date('2024-08-03T00:00:00'); // Fecha de inicio con hora fija
    const inputDate = new Date(document.getElementById('date').value + 'T00:00:00'); // Fecha seleccionada con hora fija
    
    if (isNaN(inputDate.getTime())) {
        document.getElementById('result').textContent = 'Por favor, selecciona una fecha válida.';
        return;
    }

    // Asegurarse de que inputDate sea después o igual a startDate
    if (inputDate < startDate) {
        document.getElementById('result').textContent = 'La fecha seleccionada debe ser igual o posterior a la fecha de inicio (03/08/2024).';
        return;
    }

    // Diferencia en días entre la fecha seleccionada y la fecha de inicio
    const diffDays = Math.floor((inputDate - startDate) / (1000 * 60 * 60 * 24));

    // Calcular el turno
    const shifts = ['Mañana', 'Tarde', 'Noche', 'Descanso'];
    const shiftIndex = diffDays % shifts.length;
    const shift = shifts[shiftIndex];

    // Formatear la fecha de entrada
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = inputDate.toLocaleDateString('es-ES', options);

    document.getElementById('result').textContent = `El turno para el ${formattedDate} es: ${shift}`;
}
