const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
    phone: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    creditCard: /^(\d{4}[\s-]?){4}$/,
    time: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    htmlTag: /^<\/?[a-z][a-z0-9]*(?:\s+[a-z0-9-]+(?:=(?:".*?"|'.*?'|[\^'">\s]+))?)*\s*\/?>$/i,
    hashtag: /^#[a-zA-Z0-9_]+$/,
    currency: /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/
    
};

function validateEmail() {
    const email = document.getElementById('email');
    const error = document.getElementById('emailError');
    validateField(email, error, patterns.email, 'Please enter a valid email address');
}

function validateURL() {
    const url = document.getElementById('url');
    const error = document.getElementById('urlError');
    
    validateField(url, error, patterns.url, 'Please enter a valid URL');
    
    if (url.value.trim() !== '' && url.value.toLowerCase().startsWith('http:')) {
        error.textContent += ' (Warning: This is not a secure URL. HTTPS is recommended)';
        url.classList.add('warning');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const error = document.getElementById('phoneError');
    validateField(phone, error, patterns.phone, 'Please enter a valid phone number');
}

function validateCreditCard() {
    const creditCard = document.getElementById('creditCard');
    const error = document.getElementById('creditCardError');
    validateField(creditCard, error, patterns.creditCard, 'Please enter a valid credit card number');
}

function validateTime() {
    const timeInput = document.getElementById('time').value;
    const timeError = document.getElementById('timeError');
    const time24Pattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    const time12Pattern = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM|am|pm)$/;
    
    if (time24Pattern.test(timeInput) || time12Pattern.test(timeInput)) {
        timeError.textContent = '';
    } else {
        timeError.textContent = 'Please enter a valid time (e.g., 14:30 or 2:30 PM)';
    }
}

function validateHTMLTag() {
    const tagInput = document.getElementById('htmlTag').value;
    const tagError = document.getElementById('htmlTagError');
    const htmlTagPattern = /^<\/?[a-z][a-z0-9]*(?:\s+[a-z0-9-]+(?:=(?:".*?"|'.*?'|[\^'">\s]+))?)*\s*\/?>$/i;
    
    if (htmlTagPattern.test(tagInput)) {
        tagError.textContent = '';
    } else {
        tagError.textContent = 'Please enter a valid HTML tag (e.g., <div> or <img src="image.jpg">)';
    }
}

function validateHashtag() {
    const hashtagInput = document.getElementById('hashtag').value;
    const hashtagError = document.getElementById('hashtagError');
    const hashtagPattern = /^#[a-zA-Z0-9_]+$/;
    
    if (hashtagPattern.test(hashtagInput)) {
        hashtagError.textContent = '';
    } else {
        hashtagError.textContent = 'Please enter a valid hashtag (e.g., #example)';
    }
}

function validateCurrency() {
    const currencyInput = document.getElementById('currency').value;
    const currencyError = document.getElementById('currencyError');
    const currencyPattern = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    
    if (currencyPattern.test(currencyInput)) {
        currencyError.textContent = '';
    } else {
        currencyError.textContent = 'Please enter a valid currency amount (e.g., $19.99 or $1,234.56)';
    }
}

function validateField(input, errorElement, pattern, errorMessage) {
    if (input.value.trim() === '') {
        input.className = '';
        errorElement.textContent = '';
        return;
    }

    if (pattern.test(input.value)) {
        input.className = 'valid';
        errorElement.textContent = '';
    } else {
        input.className = 'invalid';
        errorElement.textContent = errorMessage;
    }
}

function nextStep(currentStep) {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.getElementById(`step${currentStep + 1}`).classList.add('active');
    document.querySelector(`.progress-steps .step:nth-child(${currentStep + 1})`).classList.add('active');
}

function prevStep(currentStep) {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.getElementById(`step${currentStep - 1}`).classList.add('active');
    document.querySelector(`.progress-steps .step:nth-child(${currentStep})`).classList.remove('active');
}

// const progress = document.getElementById('progress');
// const circles = document.querySelectorAll('.circle');
// const labels = document.querySelectorAll('.step-label');

function setActive(step) {
    const validatorCards = document.querySelectorAll('.validator-card');
    validatorCards.forEach(card => {
        card.style.display = 'none';
    });

    const validatorMap = {
        1: 'emailValidator',
        2: 'urlValidator',
        3: 'phoneValidator',
        4: 'creditCardValidator',
        5: 'timeValidator',
        6: 'htmlTagValidator',
        7: 'hashtagValidator',
        8: 'currencyValidator'
    };

    const validatorId = validatorMap[step];
    if (validatorId) {
        document.getElementById(validatorId).style.display = 'block';
    }

    updateProgressSteps(step);
}

function updateProgressSteps(activeStep) {
    const circles = document.querySelectorAll('.circle');
    const stepLabels = document.querySelectorAll('.step-label');
    const progress = document.getElementById('progress');

    circles.forEach((circle, idx) => {
        if (idx < activeStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    stepLabels.forEach((label, idx) => {
        if (idx < activeStep) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });

    const progressWidth = ((activeStep - 1) / (circles.length - 1)) * 100;
    progress.style.width = `${progressWidth}%`;
}

function testPatterns() {
    console.log('=== Testing Regular Expressions ===');
    
    console.log('\nTesting Email Pattern:');
    const emailTests = [
        'test@example.com',
        'invalid.email@',
        '@invalid.com',
        'test.email@domain.com',
        'test@sub.domain.com',
        'invalid email@domain.com'
    ];
    testPattern('Email', patterns.email, emailTests);

    console.log('\nTesting URL Pattern:');
    const urlTests = [
        'https://www.example.com',
        'http://example.com',
        'https://sub.domain.com/path?param=value',
        'invalid-url',
        'ftp://invalid.com',
        'https://.com'
    ];
    testPattern('URL', patterns.url, urlTests);

    console.log('\nTesting Phone Pattern:');
    const phoneTests = [
        '(123) 456-7890',
        '123-456-7890',
        '1234567890',
        '+1 (123) 456-7890',
        '123-456-789', 
        '12345' 
    ];
    testPattern('Phone', patterns.phone, phoneTests);

    console.log('\nTesting Credit Card Pattern:');
    const creditCardTests = [
        '1234 5678 9012 3456',
        '1234567890123456',
        '1234-5678-9012-3456',
        '123456789012', 
        '1234 5678 9012', 
        'abcd efgh ijkl mnop' 
    ];
    testPattern('Credit Card', patterns.creditCard, creditCardTests);

    console.log('\nTesting Time Pattern:');
    const timeTests = [
        '14:30',
        '2:30 PM',
        'invalid time',
        '1430',
        '12:00 AM',
        '12:00 PM',
        '12:00',
        '12:00 AM',
        '12:00 PM',
        '12:00',
    ]
    testPattern('Time', patterns.time, timeTests);

    console.log('\nTesting HTML Tag Pattern:');
    const htmlTagTests = [
        '<div>',
        '<img src="image.jpg">',
        '<div>',
        'invalid tag',
        '<div>',
        '<div />',
        '<div class="container">',
        '<div class="container">',
        '<div class="container">',
    ]
    testPattern('HTML Tag', patterns.htmlTag, htmlTagTests);

    console.log('\nTesting Hashtag Pattern:');
    const hashtagTests = [
        '#example',
        'invalid hashtag',
        '#example',
        'invalid hashtag',
        '#example',
        'invalid hashtag',
        '#example',
        'invalid hashtag',
        '#example',
        'invalid hashtag',
    ]
    testPattern('Hashtag', patterns.hashtag, hashtagTests);

    console.log('\nTesting Currency Pattern:');
    const currencyTests = [
        '$19.99',
        '$1,234.56',
        'invalid currency',
        '$19.99',
        '$1,234.56',
        'invalid currency',
        '$19.99',
        '$1,234.56',
        'invalid currency',
    ]
    testPattern('Currency', patterns.currency, currencyTests);
}


function testPattern(name, pattern, tests) {
    tests.forEach(test => {
        const isValid = pattern.test(test);
        console.log(`${test}: ${isValid ? '✓ Valid' : '✗ Invalid'}`);
    });
}

testPatterns(); 