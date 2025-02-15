# Regex Data Extraction Project

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![RegEx](https://img.shields.io/badge/RegEx-2C2255?style=for-the-badge&logo=regex&logoColor=white)

## Project Overview
This project implements various regular expressions (regex) patterns to extract and validate different types of data including email addresses, URLs, phone numbers, and credit card numbers.

## Features
- Email validation
- URL pattern matching
- Phone number format verification
- Credit card number validation
- Time validation
- HTML tag validation
- Hashtag validation
- Currency validation

## Test Cases

node script.js

### Email Pattern Testing
- ✅ test@example.com
- ❌ invalid.email@
- ❌ @invalid.com
- ✅ test.email@domain.com
- ✅ test@sub.domain.com
- ❌ invalid email@domain.com

### URL Pattern Testing
- ✅ https://www.example.com
- ✅ http://example.com
- ✅ https://sub.domain.com/path?param=value
- ❌ invalid-url
- ❌ ftp://invalid.com
- ❌ https://.com

### Phone Pattern Testing
- ✅ (123) 456-7890
- ✅ 123-456-7890
- ✅ 1234567890
- ✅ +1 (123) 456-7890
- ❌ 123-456-789
- ❌ 12345

### Credit Card Pattern Testing
- ✅ 1234 5678 9012 3456
- ✅ 1234567890123456
- ✅ 1234-5678-9012-3456
- ❌ 123456789012
- ❌ 1234 5678 9012
- ❌ abcd efgh ijkl mnop

## Installation & Usage
1. Clone the repository
2. Open the `index.html` file in your browser
3. Enter the data you want to validate in the input fields
4. Click the "Validate" button to see the results

## Contributing
1. Fork the repository
2. Create a new branch
3. Make your changes and commit them
4. Push your changes to your fork
5. Create a pull request

