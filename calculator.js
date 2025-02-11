<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        .calculator {
            width: 250px;
            margin: auto;
            padding: 20px;
            border-radius: 10px;
            background: #f4f4f4;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input {
            width: 100%;
            height: 50px;
            font-size: 1.5em;
            text-align: right;
            margin-bottom: 10px;
            padding: 5px;
        }
        .buttons button {
            width: 23%;
            height: 50px;
            font-size: 1.2em;
            margin: 5px;
            cursor: pointer;
        }
        .equal {
            width: 50%;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <div class="buttons">
            <button onclick="clearDisplay()">C</button>
            <button onclick="appendValue('/')">/</button>
            <button onclick="appendValue('*')">*</button>
            <button onclick="appendValue('-')">-</button>
            <button onclick="appendValue('7')">7</button>
            <button onclick="appendValue('8')">8</button>
            <button onclick="appendValue('9')">9</button>
            <button onclick="appendValue('+')">+</button>
            <button onclick="appendValue('4')">4</button>
            <button onclick="appendValue('5')">5</button>
            <button onclick="appendValue('6')">6</button>
            <button class="equal" onclick="calculateResult()">=</button>
            <button onclick="appendValue('1')">1</button>
            <button onclick="appendValue('2')">2</button>
            <button onclick="appendValue('3')">3</button>
            <button onclick="appendValue('0')">0</button>
            <button onclick="appendValue('.')">.</button>
        </div>
    </div>

    <script>
        function appendValue(value) {
            document.getElementById("display").value += value;
        }

        function clearDisplay() {
            document.getElementById("display").value = "";
        }

        function calculateResult() {
            try {
                document.getElementById("display").value = eval(document.getElementById("display").value);
            } catch (error) {
                document.getElementById("display").value = "Error";
            }
        }
    </script>
</body>
</html>
