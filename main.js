//khai báo mảng
let numbers = [];

//thêm số vào mảng
function addNumber() {
    const num = parseInt(document.getElementById('inputNumber').value);
    //kiểm tra xem dữ liệu nhập vào có phải số hay không 
    if (!isNaN(num)) {
        numbers.push(num);
        // gán giá trị vào mảng 
        document.getElementById('arrayDisplay').textContent = JSON.stringify(numbers);
        //đưa về ô trống nhập liệu
        document.getElementById('inputNumber').value = '';
    }
}
//Reset mảng
function resetArray() {
    // Lập số num = [mảng 0] - gán lại mảng 
    numbers = [];
    document.getElementById('arrayDisplay').textContent = '[ ]';
    document.getElementById('result').textContent = '';
}

//Bài 1 -- Tổng các số dương
function sumPositiveNumbers() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    displayResult(`Tổng các số dương mảng vừa nhập là: ${sum}`);
}

//Bài 2 -- Đếm số dương
function countPositiveNumbers() {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    displayResult(`Có tổng cộng  ${count} số dương trong mảng.`);
}

//Bài 3 -- Số nhỏ nhất
function findSmallestNumber() {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    displayResult(`Số nhỏ nhất trong mảng là: ${min}`);
}

//Bài 4 -- Số dương nhỏ nhất
function findSmallestPositiveNumber() {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > 0 && numbers[i] < max) {
            max = numbers[i];
        }
    }
    displayResult(`Số dương nhỏ nhất trong mảng là: ${max}`);
}

//Bài 5 --  Số chẵn cuối cùng
function findLastEvenNumber() {
    // Nếu số chẵn cuối cùng trong mảng => duyệt mảng từ phải qua, áp dụng cho i = length -2 
    let lastEven = numbers[numbers.length - 1];
    for (let i = numbers.length - 2; i >= 0; i--) {
        if (numbers[i] % 2 === 0) {
            lastEven = numbers[i];
            break;
        }
    }
    displayResult(`Số chẵn cuối cùng trong mảng là: ${lastEven}`);
}

//Bài 6 Đổi chỗ 2 giá trị
function swapValues() {
    // Em sử dụng nhập mới của prompt 
    const post1 = parseInt(prompt("Nhập vị trí thứ nhất (bắt đầu từ 0):"));
    const post2 = parseInt(prompt("Nhập vị trí thứ hai (bắt đầu từ 0):"));
    // Xét điều kiện nhập vào thõa mãn đổi vị trí

    if (!isNaN(post1) && !isNaN(post2) && numbers[post1] !== undefined && numbers[post2] !== undefined) {
        [numbers[post1], numbers[post2]] = [numbers[post2], numbers[post1]];
        document.getElementById('arrayDisplay').textContent = JSON.stringify(numbers);
        // Đưa về mảng hiển thị mới, thay thế mảng giá trị cũ 
        displayResult(`Mảng sau khi đổi chỗ: ${JSON.stringify(numbers)}`);
    } else {
        displayResult("Vị trí không hợp lệ!");
    }
}

//Bài 7 --  Sắp xếp mảng tăng dần
function sortArray() {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]; // Hoán đổi
            }
        }
    }
    displayResult(`Mảng sau khi sắp xếp tăng dần: ${JSON.stringify(numbers)}`);
}

//Bài 8 Số nguyên tố đầu tiên
function findFirstPrime() {
    const isPrime = n => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    };
    const prime = numbers.find(isPrime) ?? -1;
    displayResult(`Số nguyên tố đầu tiên: ${prime}`);
}

//9- Đếm số nguyên trong mảng thực
function countIntegers() {
    const input = prompt("Nhập mảng số thực, cách nhau bởi dấu phẩy (,):");
    const realArray = [];
    for (const item of input.split(',')) {
        realArray.push(parseFloat(item)); // Chuyển chuỗi thành số thực
    }

    let count = 0;
    for (const num of realArray) {
        if (Number.isInteger(num)) { // Kiểm tra số nguyên
            count++;
        }
    }

    displayResult(`Số lượng số nguyên trong mảng số thực: ${count}`);

}

//Bài 10 --  So sánh số lượng số dương và số âm
function comparePosNeg() {
    const posCount = numbers.filter(n => n > 0).length;
    const negCount = numbers.filter(n => n < 0).length;
    if (posCount > negCount) {
        displayResult("Số lượng số dương nhiều hơn số âm.");
    } else if (negCount > posCount) {
        displayResult("Số lượng số âm nhiều hơn số dương.");
    } else {
        displayResult("Số lượng số dương và số âm bằng nhau.");
    }
}

//Hiển thị kết quả chung
function displayResult(message) {
    document.getElementById('result').textContent = message;
}
