document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');   
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((element, index) => {
            element.style.display = (index === step) ? 'block' : 'none';
        });
    }

    //evento clic en el boton siguiente
    document.querySelector('.next').forEach(button => {
        button.addEventListener('click', function() {
            currentStep++;
            if (currentStep >= steps.length) {
                currentStep = steps.length - 1;
            }
            showStep(currentStep);
        });

    });

    //evento clic en el boton anterior
    document.querySelector('.prev').forEach(button => {
        button.addEventListener('click', function() {
            currentStep--;
            if (currentStep < 0) {
                currentStep = 0;
            }
            showStep(currentStep);
        });
    });


    //mostrar el primer paso
    showStep(currentStep);


    

});