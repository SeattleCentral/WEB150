# Quiz 01
> Due: 07/17/2019 at 11:59 PM


## Information

Quiz 01 contains both a Repl.it portion worth 10 pts. that is open notes and a 
Canvas, multiple choice portion worth 10 pts. The Canvas portion is closed book.

## Preparation Notes

<dl>
    <dt>Types</dt>
    <dd>JavaScript supports a number of data types, including Numbers, Strings, and Boolean values. You don't ever need to declare the type in JavaScript. It will be inferred during assignment.</dd>
    <dt>Variables</dt>
    <dd>In JavaScript, a variable can be constructed using the keyword, `var` or `let`</dd>
    <dt>Constants</dt>
    <dd>For value bindings that are *not* meant to be changed, use the keyword `const`</dd>
    <dt>Functions</dt>
    <dd>There are multiple ways to define a function in JavaScript. Two of the most common methods require the use of the keyword `function`. Example:</dd>
</dl>

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
