console.log("Contact page loaded");
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // منع تحويل الصفحة

        const formData = new FormData(form);
        const params = new URLSearchParams();

        for (const [key, value] of formData.entries()) {
            params.append(key, value);
        }

        // تأكد من استخدام رابط `formResponse` الصحيح
        const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd0C0B6DrLTIlLpO91H-tJTPnEjJT-TwltzaAFpYdNM2EL1LA/formResponse";

        fetch(googleFormURL, {
            method: "POST",
            body: params,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            mode: "no-cors"
        }).then(() => {
            responseMessage.classList.add('show');
            setTimeout(() => {
                responseMessage.classList.remove('show');
            }, 3000);
            form.reset(); // تفريغ الحقول
        }).catch(error => {
            console.error("Error!", error);
        });
    });
});