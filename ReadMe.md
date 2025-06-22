
# 🧮 Node Calculator

A simple, terminal-based calculator built using Node.js. This project allows users to perform basic arithmetic operations interactively via the command line.

---

## 📦 Getting Started

To begin, make sure you have [Node.js](https://nodejs.org/) installed on your machine. Then, download the necessary dependency:

```bash
npm install readline-sync
````

---

## 🛠 Features & Requirements

* Prompt the user:
  `"What operation would you like to perform?"`

* Accept the following operations:
  `+`, `-`, `*`, `/`

* If the user enters an invalid operation:
  Print `"That is not a valid operation"` and **restart the program**

* Once a valid operation is entered:

  1. Ask: `"Please enter the first number"`

     * If input is invalid, print: `"This is not a number"` and **re-ask**
  2. Ask: `"Please enter the second number"`

     * Handle errors the same way

* Perform the calculation and display:
  `"The result is: X"`
  (e.g., `"The result is: 7"`)

> ❗ **Note:** Do **not** use the `eval()` method. It is insecure and should be avoided.

---

## 💡 Development Tips

Break the project into small, manageable pieces. Consider:

* How will you store the user’s input?
* What validation logic will you use for operations and numbers?
* How should the result be formatted?

---

## 🏆 Bonus Features (Optional)

* Handle **remainders** properly (e.g., `9 / 4` → `2.25`)
* Allow users to enter operations as a single line string, such as:
  `"5 * 3"` or `"6 / 6"`
  (Hint: Use command-line arguments or split strings to process this)

---

## 📚 Resources

* [Node.js Readline Documentation](https://www.w3schools.com/nodejs/ref_readline.asp)
* [Node.js: Accept Input from the Command Line](https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs)
* [Codecademy: Getting User Input in Node.js](https://www.codecademy.com/articles/getting-user-input-in-node-js)

---

## ✅ Example Usage

```
What operation would you like to perform? +
Please enter the first number: 3
Please enter the second number: 4
The result is: 7
```

---

## 🔧 Technologies

* Node.js
* readline-sync npm package

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

