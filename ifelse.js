// question 7

// let mark1 = parseInt(prompt("Enter mark 1: "));
// let mark2 = parseInt(prompt("Enter mark 2: "));
// let mark3 = parseInt(prompt("Enter mark 3: "));

// if (mark1 >= 40 && mark2 >= 40 && mark3 >= 40) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }


// question 8


// let marks = 60
// if(marks >= 40){
//     console.log("Pass");
    
// }else{
//     console.log("Fail");
    
// }

// question 9


// let time = 15;
// if(time >=6 && time<=17){
//     console.log("Light mood");
    
// }else{
//     console.log("Dark mood");
    
// }

// question 10



// let time = 23;   

// if (time >= 6 && time <= 10) {
//   console.log("Breakfast");
// } else if (time >= 12 && time <= 14) {
//   console.log("Lunch");
// } else if (time >= 18 && time <= 21) {
//   console.log("Dinner");
// } else {
//   console.log("Snack");
// }


// 🔸 JavaScript Beginner Practice: If-Else Statements

// 1. Ask the user for their age. If the age is 18 or more, show an alert: "You are an
// adult.", else show: "You are a minor."

// let age = prompt('What is your age :')
// if (age >= 18) {
//     alert('You are an Adult.')
// }else {console.log('You are a Minor.');
// }
// 2. Ask the user to enter a number. If it's positive, log: "Positive number"; else log:
// "Not positive".

// let number = prompt('Enter a positive or Negative Number :');
// if (number >= 0) {
//     alert('Positive.')
// }else if  (number < 0) {alert('Negative');
// } else {alert('Invalid value entered.');}


// 3. Ask the user for a number. If it's even, alert: "Even number"; else alert: "Odd
// number".
// let number = prompt('Enter a number to check if it is odd or even :');
// if (number % 2 === 0) {
//     alert('Even.')
// }else if  (number % 2 === 1) {alert('Odd');
// } else {alert('Invalid value entered.');}

// 4. Ask for a username. If the username is "admin", display "Welcome, admin!"; else
// display "Access denied."
// let username = prompt('Enter Username : ');
// if (uername === 'admin'){
//     alert('Welcome Admin!');
// }else{alert('Access Denied')}

// 5. Ask for two numbers. If they are equal, log "Both numbers are the same";
// otherwise, log "The numbers are different".
// let number1 = prompt('Enter First Number :');
// let number2 = prompt('Enter Second Number :');
// if (number1 == number2) {alert('Same Numbers');    
// } else{alert('Different Numbers Entered.');}


// 6. Ask the user to enter two numbers. Check which one is larger and alert: "First is
// larger" or "Second is larger".
// let number1 = prompt('Enter First Number :');
// let number2 = prompt('Enter Second Number :');
// if (number1 == number2) {alert('Same Numbers');    
// } else if (number1 > number2 ){
//     alert(`${number1} is greater than ${number2}`);
// } else if (number2 > number1){
//     alert(`${number2} is greater than ${number2}`);
// }
// else{alert('Please Enter Number Value.');}

// 7. Ask for a number. If it's greater than 100, alert "Too big!", else alert "Within
// range".

// let number = prompt('Enter a Number : ');
// if (number >= 100) {alert('Too big');
// }else{alert('In Range.');}


// 8. Ask for a score. If it's 50 or higher, log "You passed!", else log "You failed."
// let score = prompt('Enter Score : ');
// if (score >= 50) {alert('You Passed');
// }else{alert('You Failed');}


// 9. Ask the user to enter a temperature. If it's over 30, alert "It's hot!"; else alert "It's
// not hot."
// let temperature = prompt('Enter Temperature : ');
// if (temperature > 30) {alert('Its Hot.');
// }else{alert('Its not Hot');}

// 10. Ask the user to enter a number. If it's 0, alert "Zero"; if it's not zero, alert "Not zero".
// let number = prompt('Enter a Number : ');
// if (number === 0) {alert('Its Zero');
// }else{alert('Its not Zero');}



// 11. Ask the user for their age. If it's 60 or more, log "You are a senior citizen.",
// else log "You are not a senior."
// let age = prompt('Enter ur age : ');
// if (age >= 60) {alert('You are a senior citizen');
// }else{alert('You are not a senior citizen.');}


// 12. Ask the user for their name. If the name is "Alice", alert "Hi, Alice!"; else alert
// "You're not Alice!"
// let name = prompt('Enter ur name : ');
// if (name === 'Alice') {alert(`Hi ${Alice}`);
// }else{alert('You are not Alice.');}


// 13. Ask the user for a password. If it matches "12345", log "Correct password"; else
// log "Wrong password".
// let password = prompt('Enter ur Password : ');
// if (password === 12345) {alert(`Correct Password`);
// }else{alert('Incorrect Password');}




// 14. Ask the user for the current hour (0–23). If it's less than 12, alert "Good morning!";
// else alert "Good afternoon!"
// let currentHour = prompt('Enter Current Hour : ');
// if (currentHour <= 12) {alert(`Good Morning`);
// }else{alert('Good Afternoon');}


// 15. Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; else log
// "Not divisible by 5".
// let number = prompt('Enter a number : ');
// if (number % 5 == 0) {console.log('Divisible by  5');
// } else {console.log('Not Divisible by 5');
// }



// 16. Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's
// play!"; else alert "Maybe next time!"
// let playGame = prompt('Do you wanna play a game ? y/n : ');
// if (playGame === 'y') {alert('Lets Play');}
// else if (playGame === 'n') {alert('Maybe Next Time');}
// else{alert('Invalid Value');}


// 17. Ask the user for a color. If the color is "blue", log "Cool choice!"; else log
// "Interesting color!"
// let color = prompt('Please Enter a color : ');
// if (color == 'blue') {
//     console.log('Cool Color');
// } else {console.log('Interesting.');
// }




// 18. Ask for the day of the week. If it's "Sunday", alert "Weekend!"; else alert "Weekday".
// let day = prompt('Enter day of the week : ');
// if (day === 'Sunday') {alert('Weekend!');
// }else{alert('Weekday');}

// 19. Ask the user to enter a fruit. If it's "banana" or "apple", alert "We have that!";
// else alert "Sorry, out of stock."
// let fruit = prompt('Enter a fruit : ');
// if (fruit === 'banana' || fruit === 'apple') {alert('We have that!');
// }else{alert('Sorry, out of stock.');}

// 20. Ask the user to type "start" to begin. If they do, alert "Game started!"; else alert
// "Waiting for input..."
// let start = prompt('Type start to begin : ');
// if (start === 'start') {alert('Game started!');
// }else{alert('Waiting for input...');}

// Here is the content formatted for a Google Doc. You can copy and paste it directly into Google
// Docs, or I can generate and export a downloadable version if you'd like.

// Title: Advanced JavaScript Conditional Logic Practice

// 🔸 Instructions:
// Write JavaScript if - else if - else conditions to solve the following problems. Use
// logical operators like && and || where applicable. Do not write solutions here—just practice
// writing the condition blocks.

// 1. Age-Based Grade Check
// Check a student's marks and display:
// ● "Distinction" if marks ≥ 80
// ● "Pass" if marks ≥ 50 and < 80
// ● "Fail" if marks < 50
// ● "Invalid Marks" if marks are not between 0 and 100

// 2. Discount Eligibility Based on Age and Membership
// Given a person's age and membership status, show:
// ● "Senior Premium Discount" if age ≥ 60 and is a premium member
// ● "Senior Discount" if age ≥ 60
// ● "Premium Discount" if a premium member
// ● "No Discount" otherwise

// 3. Login and Email Verification
// ● If user is logged in and email is verified → "Access granted"
// ● If user is logged in but not verified → "Please verify your email"
// ● If not logged in → "Please log in"

// 4. Contest Eligibility
// Check if a person is eligible to enter a contest:

// ● Must be between ages 18–35
// ● Must be from Pakistan or India
// ● Must not be banned

// Display appropriate messages for age, region, or ban issues.

// 5. Subscription Access Check
// Given the subscription plan and login status:
// ● "Welcome Premium User" if plan is "premium" and logged in
// ● "Welcome Free User" if plan is "free" and logged in
// ● "Please log in to continue" if not logged in
// ● "Invalid subscription" otherwise

// 6. Product Purchase Validation
// Check product conditions:
// ● "Buy now with discount" if price > 1000, in stock, and user is a member
// ● "Buy now" if in stock
// ● "Out of stock" if stock === 0
// ● "Invalid product" otherwise

// 7. Work Hours Check
// Check based on hoursWorked and isWeekend:

// ● "Overtime" if hours > 40 and not a weekend
// ● "Weekend work" if hours > 0 and is weekend
// ● "Regular hours" if ≤ 40
// ● "No work" if hours === 0

// 8. Age and Gender Classification
// Given a user's age and gender:
// ● "Teen Male" if age 13–19 and gender is "male"
// ● "Teen Female" if age 13–19 and gender is "female"
// ● "Adult" if age ≥ 20
// ● "Child" if age < 13

// 9. Weather Warning System
// Based on temperature and humidity:
// ● "Heatwave Alert" if temp ≥ 40 and humidity ≥ 60
// ● "Hot and Dry" if temp ≥ 40 and humidity < 60
// ● "Cool Weather" if temp ≤ 20
// ● "Moderate" otherwise

// 10. Score Grading System
// Given a score between 0–100:

// ● "Excellent" for 90–100
// ● "Good" for 70–89
// ● "Average" for 50–69
// ● "Poor" for 30–49
// ● "Fail" below 30
// ● "Invalid Score" if out of range

// 11. Course Access Control
// To access a course:
// ● Must be logged in
// ● Must be enrolled
// ● Must not be banned

// Show: "Access granted", "Enroll in course first", "User is banned", or "Please log in"

// 12. Driving Conditions
// Given a user's speed and license status:
// ● "License suspended" if speed > 120
// ● "Warning" if speed between 100–120
// ● "Normal driving" if speed ≤ 100 and has license
// ● "Driving without license" otherwise

// 13. Order Processing Status

// For an online order:
// ● "Order on the way" if payment is complete and shipped
// ● "Preparing your order" if payment is complete and not shipped
// ● "Awaiting payment" if payment is pending
// ● "Payment failed" if transaction failed

// 14. Battery Status Checker
// Given battery level and charging state:
// ● "Fully Charged" if level === 100
// ● "Charging..." if level < 100 and charging
// ● "Low Battery" if level < 20 and not charging
// ● "Battery OK" otherwise

// 15. Browser and Device Compatibility Check
// Based on user's browser and device:
// ● "Full features enabled" if browser is Chrome and device is Desktop
// ● "Limited mobile features" if browser is Chrome and device is Mobile
// ● "Please switch to Chrome" for all other browsers

// 1. Age-Based Grade Check
// Check a student's marks and display:
// ● "Distinction" if marks ≥ 80
// ● "Pass" if marks ≥ 50 and < 80
// ● "Fail" if marks < 50
// ● "Invalid Marks" if marks are not between 0 and 100
// let marks = prompt('Enter marks : ');
// if (marks >= 80) {alert('Distinction');
// }else if (marks >= 50) {alert('Pass');
// }else if (marks >= 0) {alert('Fail');
// }else{alert('Invalid Marks');}

// 2. Discount Eligibility Based on Age and Membership
// Given a person's age and membership status, show:
// ● "Senior Premium Discount" if age ≥ 60 and is a premium member
// ● "Senior Discount" if age ≥ 60
// ● "Premium Discount" if a premium member
// ● "No Discount" otherwise
// let age = prompt('Enter age : ');
// let isPremium = prompt('Are you premium member? (y/n) : ');
// if (age >= 60 && isPremium === 'y') {alert('Senior Premium Discount');
// }else if (age >= 60) {alert('Senior Discount');
// }else if (isPremium === 'y') {alert('Premium Discount');
// }else{alert('No Discount');}

// 3. Login and Email Verification
// ● If user is logged in and email is verified → "Access granted"
// ● If user is logged in but not verified → "Please verify your email"
// ● If not logged in → "Please log in"
// let isLoggedIn = prompt('Are you logged in? (y/n) : ');
// let isVerified = prompt('Is email verified? (y/n) : ');
// if (isLoggedIn === 'y' && isVerified === 'y') {alert('Access granted');
// }else if (isLoggedIn === 'y' && isVerified === 'n') {alert('Please verify your email');
// }else{alert('Please log in');}

// 4. Contest Eligibility
// Check if a person is eligible to enter a contest:
// ● Must be between ages 18–35
// ● Must be from Pakistan or India
// ● Must not be banned
// Display appropriate messages for age, region, or ban issues.
// let contestAge = prompt('Enter age : ');
// let country = prompt('Enter country : ');
// let isBanned = prompt('Are you banned? (y/n) : ');
// if (contestAge >= 18 && contestAge <= 35 && (country === 'Pakistan' || country === 'India') && isBanned === 'n') {alert('Contest eligible');
// }else if (contestAge < 18 || contestAge > 35) {alert('Age not eligible');
// }else if (country !== 'Pakistan' && country !== 'India') {alert('Region not eligible');
// }else if (isBanned === 'y') {alert('User is banned');
// }

// 5. Subscription Access Check
// Given the subscription plan and login status:
// ● "Welcome Premium User" if plan is "premium" and logged in
// ● "Welcome Free User" if plan is "free" and logged in
// ● "Please log in to continue" if not logged in
// ● "Invalid subscription" otherwise
// let plan = prompt('Enter subscription plan : ');
// let userLoggedIn = prompt('Are you logged in? (y/n) : ');
// if (plan === 'premium' && userLoggedIn === 'y') {alert('Welcome Premium User');
// }else if (plan === 'free' && userLoggedIn === 'y') {alert('Welcome Free User');
// }else if (userLoggedIn === 'n') {alert('Please log in to continue');
// }else{alert('Invalid subscription');}

// 6. Product Purchase Validation
// Check product conditions:
// ● "Buy now with discount" if price > 1000, in stock, and user is a member
// ● "Buy now" if in stock
// ● "Out of stock" if stock === 0
// ● "Invalid product" otherwise
// let price = prompt('Enter product price : ');
// let stock = prompt('Enter stock quantity : ');
// let isMember = prompt('Are you a member? (y/n) : ');
// if (price > 1000 && stock > 0 && isMember === 'y') {alert('Buy now with discount');
// }else if (stock > 0) {alert('Buy now');
// }else if (stock == 0) {alert('Out of stock');
// }else{alert('Invalid product');}

// 7. Work Hours Check
// Check based on hoursWorked and isWeekend:
// ● "Overtime" if hours > 40 and not a weekend
// ● "Weekend work" if hours > 0 and is weekend
// ● "Regular hours" if ≤ 40
// ● "No work" if hours === 0
// let hoursWorked = prompt('Enter hours worked : ');
// let isWeekend = prompt('Is it weekend? (y/n) : ');
// if (hoursWorked > 40 && isWeekend === 'n') {alert('Overtime');
// }else if (hoursWorked > 0 && isWeekend === 'y') {alert('Weekend work');
// }else if (hoursWorked <= 40 && hoursWorked > 0) {alert('Regular hours');
// }else if (hoursWorked == 0) {alert('No work');
// }

// 8. Age and Gender Classification
// Given a user's age and gender:
// ● "Teen Male" if age 13–19 and gender is "male"
// ● "Teen Female" if age 13–19 and gender is "female"
// ● "Adult" if age ≥ 20
// ● "Child" if age < 13
// let userAge = prompt('Enter age : ');
// let gender = prompt('Enter gender : ');
// if (userAge >= 13 && userAge <= 19 && gender === 'male') {alert('Teen Male');
// }else if (userAge >= 13 && userAge <= 19 && gender === 'female') {alert('Teen Female');
// }else if (userAge >= 20) {alert('Adult');
// }else if (userAge < 13) {alert('Child');
// }

// 9. Weather Warning System
// Based on temperature and humidity:
// ● "Heatwave Alert" if temp ≥ 40 and humidity ≥ 60
// ● "Hot and Dry" if temp ≥ 40 and humidity < 60
// ● "Cool Weather" if temp ≤ 20
// ● "Moderate" otherwise
// let temp = prompt('Enter temperature : ');
// let humidity = prompt('Enter humidity : ');
// if (temp >= 40 && humidity >= 60) {alert('Heatwave Alert');
// }else if (temp >= 40 && humidity < 60) {alert('Hot and Dry');
// }else if (temp <= 20) {alert('Cool Weather');
// }else{alert('Moderate');}

// 10. Score Grading System
// Given a score between 0–100:
// ● "Excellent" for 90–100
// ● "Good" for 70–89
// ● "Average" for 50–69
// ● "Poor" for 30–49
// ● "Fail" below 30
// ● "Invalid Score" if out of range
// let score = prompt('Enter score : ');
// if (score >= 90 && score <= 100) {alert('Excellent');
// }else if (score >= 70 && score <= 89) {alert('Good');
// }else if (score >= 50 && score <= 69) {alert('Average');
// }else if (score >= 30 && score <= 49) {alert('Poor');
// }else if (score >= 0 && score < 30) {alert('Fail');
// }else{alert('Invalid Score');}

// 11. Course Access Control
// To access a course:
// ● Must be logged in
// ● Must be enrolled
// ● Must not be banned
// Show: "Access granted", "Enroll in course first", "User is banned", or "Please log in"
// let loggedIn = prompt('Are you logged in? (y/n) : ');
// let enrolled = prompt('Are you enrolled? (y/n) : ');
// let userBanned = prompt('Are you banned? (y/n) : ');
// if (loggedIn === 'y' && enrolled === 'y' && userBanned === 'n') {alert('Access granted');
// }else if (loggedIn === 'y' && enrolled === 'n') {alert('Enroll in course first');
// }else if (userBanned === 'y') {alert('User is banned');
// }else if (loggedIn === 'n') {alert('Please log in');
// }

// 12. Driving Conditions
// Given a user's speed and license status:
// ● "License suspended" if speed > 120
// ● "Warning" if speed between 100–120
// ● "Normal driving" if speed ≤ 100 and has license
// ● "Driving without license" otherwise
// let speed = prompt('Enter speed : ');
// let hasLicense = prompt('Do you have license? (y/n) : ');
// if (speed > 120) {alert('License suspended');
// }else if (speed >= 100 && speed <= 120) {alert('Warning');
// }else if (speed <= 100 && hasLicense === 'y') {alert('Normal driving');
// }else{alert('Driving without license');}

// 13. Order Processing Status
// For an online order:
// ● "Order on the way" if payment is complete and shipped
// ● "Preparing your order" if payment is complete and not shipped
// ● "Awaiting payment" if payment is pending
// ● "Payment failed" if transaction failed
// let payment = prompt('Is payment complete? (y/n) : ');
// let shipped = prompt('Is order shipped? (y/n) : ');
// let pending = prompt('Is payment pending? (y/n) : ');
// let failed = prompt('Did transaction fail? (y/n) : ');
// if (payment === 'y' && shipped === 'y') {alert('Order on the way');
// }else if (payment === 'y' && shipped === 'n') {alert('Preparing your order');
// }else if (pending === 'y') {alert('Awaiting payment');
// }else if (failed === 'y') {alert('Payment failed');
// }

// 14. Battery Status Checker
// Given battery level and charging state:
// ● "Fully Charged" if level === 100
// ● "Charging..." if level < 100 and charging
// ● "Low Battery" if level < 20 and not charging
// ● "Battery OK" otherwise
// let batteryLevel = prompt('Enter battery level : ');
// let charging = prompt('Is charging? (y/n) : ');
// if (batteryLevel == 100) {alert('Fully Charged');
// }else if (batteryLevel < 100 && charging === 'y') {alert('Charging...');
// }else if (batteryLevel < 20 && charging === 'n') {alert('Low Battery');
// }else{alert('Battery OK');}

// 15. Browser and Device Compatibility Check
// Based on user's browser and device:
// ● "Full features enabled" if browser is Chrome and device is Desktop
// ● "Limited mobile features" if browser is Chrome and device is Mobile
// ● "Please switch to Chrome" for all other browsers
// let browser = prompt('Enter browser : ');
// let device = prompt('Enter device : ');
// if (browser === 'Chrome' && device === 'Desktop') {alert('Full features enabled');
// }else if (browser === 'Chrome' && device === 'Mobile') {alert('Limited mobile features');
// }else{alert('Please switch to Chrome');}