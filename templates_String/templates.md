# 🎯 ES6 String Template Literals

Template literals are a cool feature introduced in **ES6 (ECMAScript 2015)** that make working with strings much easier! They allow you to **embed variables or expressions directly inside strings** without using `+` for concatenation.

---

## 💡 Example: Using Template Literals

```javascript
function getMessages() {
    const date = new Date().getFullYear();

    return {
        hello: `Hello from ${date}`,
        bye: `Good bye from ${date}`
    }
}

console.log(getMessages());
// Output: { hello: 'Hello from 2025', bye: 'Good bye from 2025' }
```

---

## How It Works

### 🔹 Backticks (`)

Instead of using single `'` or double `"` quotes, we use backticks.

```javascript
`Hello World!`
```

### 🔹 Interpolation with ${}

You can insert variables or expressions directly inside a string.

```javascript
const name = 'Prasiddha';
console.log(`Hi, ${name}!`); // Hi, Prasiddha!
```

### 🔹 Multi-line Strings

Template literals preserve line breaks, making multi-line strings easy!

```javascript
const poem = `Roses are red,
Violets are blue,
ES6 templates
Are awesome too!`;

console.log(poem);
```

### 🔹 Expression Evaluation

You can perform calculations and operations directly inside `${}`.

```javascript
const x = 10, y = 5;
console.log(`Sum: ${x + y}`); // Sum: 15
```

---

## 🎉 Benefits of Template Literals

✅ **Cleaner syntax** - No more string concatenation with `+`  
✅ **Multi-line support** - Write strings across multiple lines naturally  
✅ **Expression evaluation** - Embed any JavaScript expression  
✅ **Better readability** - Code is easier to read and maintain

---

## 📝 Quick Comparison

### Old Way (ES5)
```javascript
var name = 'Prasiddha';
var greeting = 'Hello, ' + name + '!';
console.log(greeting);
```

### New Way (ES6)
```javascript
const name = 'Prasiddha';
const greeting = `Hello, ${name}!`;
console.log(greeting);
```

---

**Happy coding with ES6! 🚀**