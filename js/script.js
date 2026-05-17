// ============================================
// Web Dev Barangay - JavaScript Functions
// ============================================

// ========== CERTIFICATE FORM VALIDATION ==========
const certificateForm = document.getElementById('certificateForm');

if (certificateForm) {

    // Get form elements
    const fullName = document.getElementById('fullName');
    const address = document.getElementById('address');
    const email = document.getElementById('email');
    const certType = document.getElementById('certType');
    const purpose = document.getElementById('purpose');

    // Get error display elements
    const fullNameError = document.getElementById('fullNameError');
    const addressError = document.getElementById('addressError');
    const emailError = document.getElementById('emailError');
    const certTypeError = document.getElementById('certTypeError');
    const purposeError = document.getElementById('purposeError');

    // ========== THE KEY JAVASCRIPT FUNCTION ==========
    // This is the function you'll explain in your video.
    // It validates the form in real-time using DOM manipulation.
    function validateCertificateForm(event) {
        // Prevent the form from submitting and refreshing the page
        event.preventDefault();

        let isValid = true;

        // --- Validate Full Name ---
        if (fullName.value.trim() === '') {
            // DOM Manipulation: Add 'is-invalid' class to the input
            fullName.classList.add('is-invalid');
            fullName.classList.remove('is-valid');
            // DOM Manipulation: Change the error text content
            fullNameError.textContent = 'Full name is required.';
            fullNameError.style.display = 'block';
            isValid = false;
        } else if (fullName.value.trim().length < 3) {
            fullName.classList.add('is-invalid');
            fullName.classList.remove('is-valid');
            fullNameError.textContent = 'Name must be at least 3 characters.';
            fullNameError.style.display = 'block';
            isValid = false;
        } else {
            fullName.classList.remove('is-invalid');
            fullName.classList.add('is-valid');
            fullNameError.textContent = '';
            fullNameError.style.display = 'none';
        }

        // --- Validate Address ---
        if (address.value.trim() === '') {
            address.classList.add('is-invalid');
            address.classList.remove('is-valid');
            addressError.textContent = 'Address is required.';
            addressError.style.display = 'block';
            isValid = false;
        } else if (address.value.trim().length < 5) {
            address.classList.add('is-invalid');
            address.classList.remove('is-valid');
            addressError.textContent = 'Please enter a complete address.';
            addressError.style.display = 'block';
            isValid = false;
        } else {
            address.classList.remove('is-invalid');
            address.classList.add('is-valid');
            addressError.textContent = '';
            addressError.style.display = 'none';
        }

        // --- Validate Email ---
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
            emailError.textContent = 'Email address is required.';
            emailError.style.display = 'block';
            isValid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
            emailError.textContent = 'Please enter a valid email (e.g., name@example.com).';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            emailError.textContent = '';
            emailError.style.display = 'none';
        }

        // --- Validate Certificate Type ---
        if (certType.value === '') {
            certType.classList.add('is-invalid');
            certType.classList.remove('is-valid');
            certTypeError.textContent = 'Please select a certificate type.';
            certTypeError.style.display = 'block';
            isValid = false;
        } else {
            certType.classList.remove('is-invalid');
            certType.classList.add('is-valid');
            certTypeError.textContent = '';
            certTypeError.style.display = 'none';
        }

        // --- Validate Purpose ---
        if (purpose.value.trim() === '') {
            purpose.classList.add('is-invalid');
            purpose.classList.remove('is-valid');
            purposeError.textContent = 'Please state your purpose.';
            purposeError.style.display = 'block';
            isValid = false;
        } else if (purpose.value.trim().length < 10) {
            purpose.classList.add('is-invalid');
            purpose.classList.remove('is-valid');
            purposeError.textContent = 'Please provide at least 10 characters.';
            purposeError.style.display = 'block';
            isValid = false;
        } else {
            purpose.classList.remove('is-invalid');
            purpose.classList.add('is-valid');
            purposeError.textContent = '';
            purposeError.style.display = 'none';
        }

        // --- If all fields are valid, show the success modal ---
        if (isValid) {
            // DOM Manipulation: Generate and display a reference number
            const refNum = 'BRGY-' + Date.now().toString().slice(-8);
            document.getElementById('referenceNumber').textContent = refNum;

            // Show Bootstrap Modal (Bootstrap Component #3)
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();

            // Reset the form
            certificateForm.reset();
            // Remove all validation classes
            document.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
                el.classList.remove('is-valid', 'is-invalid');
            });
        }
    }

    // Attach the function to form submit
    certificateForm.addEventListener('submit', validateCertificateForm);
}


// ========== REPORT FORM VALIDATION ==========
const reportForm = document.getElementById('reportForm');

if (reportForm) {

    const reporterName = document.getElementById('reporterName');
    const contact = document.getElementById('contact');
    const issueCategory = document.getElementById('issueCategory');
    const location = document.getElementById('location');
    const description = document.getElementById('description');
    const charCount = document.getElementById('charCount');

    const reporterNameError = document.getElementById('reporterNameError');
    const contactError = document.getElementById('contactError');
    const issueCategoryError = document.getElementById('issueCategoryError');
    const locationError = document.getElementById('locationError');
    const descriptionError = document.getElementById('descriptionError');

    // Character counter for description
    description.addEventListener('input', function() {
        const count = description.value.length;
        charCount.textContent = count;
        if (count > 500) {
            charCount.style.color = 'red';
        } else {
            charCount.style.color = '';
        }
    });

    function validateReportForm(event) {
        event.preventDefault();
        let isValid = true;

        // Validate Name
        if (reporterName.value.trim() === '') {
            reporterName.classList.add('is-invalid');
            reporterNameError.textContent = 'Name is required.';
            reporterNameError.style.display = 'block';
            isValid = false;
        } else {
            reporterName.classList.remove('is-invalid');
            reporterName.classList.add('is-valid');
            reporterNameError.style.display = 'none';
        }

        // Validate Contact
        const phonePattern = /^09\d{9}$/;
        if (contact.value.trim() === '') {
            contact.classList.add('is-invalid');
            contactError.textContent = 'Contact number is required.';
            contactError.style.display = 'block';
            isValid = false;
        } else if (!phonePattern.test(contact.value.replace(/\s/g, ''))) {
            contact.classList.add('is-invalid');
            contactError.textContent = 'Enter a valid PH mobile number (e.g., 09123456789).';
            contactError.style.display = 'block';
            isValid = false;
        } else {
            contact.classList.remove('is-invalid');
            contact.classList.add('is-valid');
            contactError.style.display = 'none';
        }

        // Validate Category
        if (issueCategory.value === '') {
            issueCategory.classList.add('is-invalid');
            issueCategoryError.textContent = 'Select a category.';
            issueCategoryError.style.display = 'block';
            isValid = false;
        } else {
            issueCategory.classList.remove('is-invalid');
            issueCategory.classList.add('is-valid');
            issueCategoryError.style.display = 'none';
        }

        // Validate Location
        if (location.value.trim() === '') {
            location.classList.add('is-invalid');
            locationError.textContent = 'Location is required.';
            locationError.style.display = 'block';
            isValid = false;
        } else {
            location.classList.remove('is-invalid');
            location.classList.add('is-valid');
            locationError.style.display = 'none';
        }

        // Validate Description
        if (description.value.trim() === '') {
            description.classList.add('is-invalid');
            descriptionError.textContent = 'Please describe the issue.';
            descriptionError.style.display = 'block';
            isValid = false;
        } else if (description.value.length > 500) {
            description.classList.add('is-invalid');
            descriptionError.textContent = 'Description must be 500 characters or less.';
            descriptionError.style.display = 'block';
            isValid = false;
        } else if (description.value.trim().length < 10) {
            description.classList.add('is-invalid');
            descriptionError.textContent = 'Please provide more detail (at least 10 characters).';
            descriptionError.style.display = 'block';
            isValid = false;
        } else {
            description.classList.remove('is-invalid');
            description.classList.add('is-valid');
            descriptionError.style.display = 'none';
        }

        // Show modal on success
        if (isValid) {
            const trackNum = 'RPT-' + Date.now().toString().slice(-8);
            document.getElementById('trackingNumber').textContent = trackNum;

            const reportModal = new bootstrap.Modal(document.getElementById('reportSuccessModal'));
            reportModal.show();

            reportForm.reset();
            charCount.textContent = '0';
            document.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
                el.classList.remove('is-valid', 'is-invalid');
            });
        }
    }

    reportForm.addEventListener('submit', validateReportForm);
}