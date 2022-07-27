///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

let arr = [9.99, 8.99, 7.99]

const summedPrice = arr.reduce((acc,curr) => acc + curr)

console.log(summedPrice)

console.log(cart)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => 
{
   let finalPrice = cartTotal + cartTotal * tax - couponValue

return finalPrice}


console.log(calcFinalPrice(50, 10, .6))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

// Customer Object: 
// The properties I want my restaurant object to have are name, size, time, and location. This will be used to manage customer/parties checking into a restaurant.

// I chose this properties because I think restaurants would like to track the name of the party (name), the size of the party (size), the time of check-in (time) 
// and the location of where the party would like to size (location) in reference to eating inside of outside. 

// name should be a string to take in the name given for the party
// size should be a number allows for additions or subtractions to the party size
// time should be a string to indicate exact times, using AM and PM, of when the party was checked-in
// location should be a string to choose between the two strings 'Indoor' or 'Patio'





/*
    Now, create a customer object following your own
    guidelines.
*/

const checkIn = [
    {
        name: 'Lancelot',
        size: 150,
        time: '8:00pm',
        location: 'Indoor'
    }

]
