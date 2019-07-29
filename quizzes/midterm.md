# Midterm Study Guide
> Due: 07/31/2019 at 11:59 PM


## Information

The Midterm contains both a Repl.it portion worth 20 pts. that is open notes and a 
Canvas, multiple choice portion worth 30 pts. The Canvas portion is closed book.

## Preparation Notes

Use this as your guide in addition to Chapters 1 through 4 of Eloquent JavaScript.

## Types

JavaScript supports a number of data types, including Numbers, Strings, and Boolean values. You don't ever need to declare the type in JavaScript. It will be inferred during assignment.

<dl>
    <dt>Numbers</dt>
    <dd>Used to store numerical values (both integers and floating point numbers), such as 7 and 7.42</dd>
    <dt>Strings</dt>
    <dd>Strings are used to represent text, such as "Hello World". Strings are composed of a sequence of characters.</dd>
    <dt>Boolean</dt>
    <dd>Boolean values distinguish between two possibilities, true and false.</dd>
    <dt>Undefined</dt>
    <dd>Undefined is a special value used to represent the absence of any meaningful value.</dd>
</dl>

JavaScript will attempt operations on two different types. If the operation is supported by the first value, then JavaScript will attempt to convert the second value to a type compatible with the first value. For example:

```javascript
let result = "Cat" + 42
// result: "Cat42"
```

Since the first operation supports the "+" operator, in this case a concatenation operator, JavaScript converts the number to a string and then concatenates it. 

## Variables

<dl>
    <dt>Variables</dt>
    <dd>In JavaScript, a variable can be constructed using the keyword, `var` or `let`</dd>
    <dt>Constants</dt>
    <dd>For value bindings that are *not* meant to be changed, use the keyword `const`</dd>
</dl>


## Arrays

Arrays are a type of object specialized for storing an ordered sequence of values.

Here is the syntax for create an array of numbers and strings.

```javascript
let myArray = [ 1, 'a', 2, 'b', 3, 'c' ]
```

Arrays have special helper methods to help manage the data. Arrays also have a .length property that returns the number of items stored in the array.

<dl>
    <dt>.push()</dt>
    <dd>Adds an item to the end of an array</dd>
    <dt>.pop()</dt>
    <dd>Removes an item from the end of the array and returns it.</dd>
    <dt>.unshift()</dt>
    <dd>Adds an item to the beginning of an array</dd>
    <dt>.shift()</dt>
    <dd>Removes an item from the beginning of the array and returns it.</dd>
</dl>
 
## Functions
 
Functions are often used to combine multiple statements together that solve a commone problem. A function can optionally accept parameters and/or a return a value.

There are multiple ways to define a function in JavaScript. Two of the most common methods require the use of the keyword `function`. Example:

```javascript
var myFunction = function() {
    console.log('do something here')
}

// You can also create "arrow" functions using the arrow syntax.
var myFunction = () => {
    console.log('do something here')
}
```

<dl>
    <dt>Function Effects</dt>
    <dd>A JavaScript function can create side effects by manipulating the DOM or communicating with a server. It can also return information, or "send a value back" to the calling environment using the `return` statement.</dd>
    <dt>For loops</dt>
    <dd>For loops are a great way to automate a repetitive task. Here is an example of counting from 1 to 100.</dd>
</dl>

```javascript
for (let i = 1; i <= 100; i++) {
    console.log(i)
}
```

<dl>
    <dt>Scoping</dt>
    <dd>Variable definitions in JavaScript follow distinct access rules. A variable defined within a function using the keywords `var` or `let` cannot be directly accessed outside of the function. You can have more than one variable with the same name in a JavaScript file as long as they exist in different scopes. For example:
    </dd>
</dl>

```javascript
var myValue = 3
var printMyValueFunction = function() {
    var myValue = 7
    console.log(myValue)
}
printMyValueFunction()
// will print the value `7` to the console because within the function's scope, myValue is set to 7.
```
