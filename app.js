// 1. Set up cơ bản
// 2. Sử dụng console
// -- Xem log của các lỗi và cảnh báo
console.error("Đây là một lỗi!"); // Log một lỗi
console.warn("Đây là một cảnh báo!"); // Log một cảnh báo
console.log("Đây là một thông báo!"); // Log một thông báo
const stundent = {
    name: 'Hoa',
    sex: 'male',
    age: 23
}
console.table(stundent)
// -- Sử dụng để debug code
document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button được click!");
});
const caculator = function (a, b) {
    console.log(a,b)
    return a+b;
}
console.log(caculator(2,3)); // expected output: 5

// 3. Variables (var, let, const) hoisting, scope
var firstName = "Tran";
let lastName = "Hoa";
const middleName = "Do";
// Cơ chế hoisting
// -- Với biến var
console.log(city)
var city = "Hue";
// -- Với biến let, const
console.log(pet, myAge)
let pet = "dog";
const myAge = 23;
// let có thể gán lại giá trị, const không thể gán lại giá trị toàn bộ biến
pet = "pig"
myAge= 24;
// Với const ta có thể thay đổi giá trị bên trong object hoặc array
const Books = ["Connan", "Doremon"]
Books[0] = "Pikachu"
console.log(Books);

const car = {type:"Fiat", model:"500", color:"white"};
car.color ="black"
console.log(car)
// Scope
// -- var chỉ support global scope và funtion scope, không sử dụng được trong block scope
function local() {
    var number = 1;
 
    console.log(number); // 1
 }
 console.log(number); // undefined

 var number = 1;
 function local() {
   console.log(number); // 1 
 }
 console.log(number); // 1 

for(var i = 0; i < 5; i++){
    console.log('inside block scope with Var >>',i)
}
console.log('outside block scope with Var >>',i); 
//  làm thay đổi biến i dẫn đến kết quả sai lệch dù chúng ta rất cẩn thận trong việc lập trình

var number = 1;   // Khai báo đầu tiên
var number = 2;   // Khai báo lại lần nữa
console.log(number); // 2 

// - let thay thể var 
    for(let i = 0; i < 3; i++){
        console.log('inside block scope with Var >>',i)
    }
    console.log('outside block scope with Var >>',i); 
// nó khác với var bằng việc sinh ra một lỗi để cho coder biết rằng, biến i đã kết thúc và hy sinh trong khi làm nhiệm vụ(block scope)
// scope của const tương tự như let chỉ khác là const không thể gán lại giá trị toàn bộ biến

let number = 1;   // Khai báo đầu tiên
let number = 2;   // Khai báo lại lần nữa
console.log(number); // Identifier 'number' has already been declared

// 4. Data types (tham trị, tham chiếu)
// - Data type
        // -- Primitive type
            // Number: 1,2,3, 4..
            // String: ‘name’..
            // Boolean: true, false
            // Null
            // Undefined
            // Symbol (ES6)

        // -- Object type
            // Object: 
            let web = {domain:'google.com', name:'chém gió chuyên nghiệp'}
            // Array: 
            let chemGio = ["web", "frontend", "html"]
            // Funtion:
            function sum(a,b) {
                return a + b
            }
            // Function cũng coi là một object
            console.log(typeof web, typeof chemGio, typeof sum)
            // Nhưng `null` không phải là object mặc dù
            typeof null ==='object' 
// - Tham trị, tham chiếu   
        // Ví dụ Tham trị
            let a = 5;
            let b = a;
            b = 10;
            console.log(a); // Output: 5 (giá trị của 'a' không thay đổi)
            console.log(b); // Output: 10
        // Ví dụ Tham chiếu
            let obj1 = { name: 'John' };
            let obj2 = obj1;
            obj2.name = 'Alice';
            console.log(obj1.name); // Output: 'Alice' (thay đổi được phản ánh trong cả hai biến)
            console.log(obj2.name); // Output: 'Alice'
// - Truthy và Falsy
        // Ví dụ về Truthy: 'D-soft', 23, {}
        // Ví dụ về Falsy: undefined, null, false, 0, NaN, ''
        // Liệt kê tất cả những gì làm với nó:
            // Kiểm tra và gán giá trị mặc định
            let username;
            let displayName = username || "Guest";
            // Xử lí điều kiện 
            let isAdmin = true; 
            let userStatus = isAdmin ? "Admin" : "Regular User";
            // Làm việc với chuỗi hoặc mảng
            let arr1 = [];
            let arr2 = [1, 2, 3];
            console.log(arr1.length === 0); 
            console.log(arr2.length === 0);
            let str1 = "";
            let str2 = "hello";
            console.log(!str1);
            console.log(!str2); 
// 5. Operators (Toán tử)
// Toán tử hạng
        // Ví dụ về toán tử hạng
            a=0, b=0;
            a++; // a = 1
            ++b; // b = 1
            b = ++a; // b = a = 2
            a = b++; // a = 2, b = 3
// Toán tử gán
        // Ví dụ về toán tử gán
            a = 1
            a += 2 // 4
            a -= 2 // 2
            a *= 2 // 4
            a **= 2 // 16
            a /= 2 // 8
            a %= 2 // 0
// Toán tử so sánh
        // Ví dụ về toán tử so sánh
            // So sánh bằng về giá trị
            console.log('2' == 2) // true
            console.log('2' === 2) // false
            // So sánh bằng về giá trị và kiểu dữ liệu
            console.log(2 === 2) // true
            // So sánh không bằng về giá trị
            console.log('2' !== 2) // false
            console.log(2 !== 2) // true
            // So sánh lớn bé hơn
            console.log(3 > 2) // true
            console.log(2 < 3)// true
            console.log( 3 >= 2)// true
            console.log(2<= 3)// true
            // Toán tử ba ngôi
            let diem = 5
            let xet = diem >= 5 ? "Lên lớp" : "Ở lại lớp"
            console.log(xet) // Lên lớp
            // Toán tử Logic
            console.log(true && false) // false
            console.log(true && true) // true
            console.log(true || false)// true
            console.log(true || true)// true
            console.log(!false) // true
        // Liệt kê tất cả những gì có thể làm với toán tử so sánh
            // Kiểm tra điều kiện
            let age = 18;
            let canVote = age >= 18 ? "Yes" : "No";
            // Kiểm tra dữ liệu đầu vào 
            let username = "example";
            let isValid = username.length >= 6 ? "Valid" : "Invalid";
            // Lọc dữ liệu
            let numbers = [1, 2, 3, 4, 5];
            let evenNumbers = numbers.filter(num => num % 2 === 0);
            console.log(evenNumbers); // Output: [2, 4]
// 6. Câu lệnh điều kiện (if-else)
            // Ví dụ if, if else, if else if
            if(5 > 3) {
                console.log('Bạn đã trúng giải')
            }

            let check = true
            if(check === true) {
            console.log ('bạn đã trúng giải')
            } else {
            console.log ('về nhà ngủ')
            }

            let diem = 6
            if (diem < 5) {
            console.log('Học kém')
            } else if(diem < 7) {
            console.log ('Học trung bình')
            } else if(diem < 9) {
            console.log('Học Khá')
            } else {
            console.log('Học giỏi')
            }
            
            //  Ví dụ về Switch case
            let chon = 1
            switch (chon) {
            case 1:
                console.log('chém gió')
                break
            case 2:
                console.log('chém bão')
                break
            case 3:
                console.log('chém bão bão')
                break
            default:
                console.log('khỏi chém')
            }

            // Ví dụ về toán tử ba ngôi
            let note = null
            note ? console.log('Note có ghi chú') : console.log('Note không có giá trị')

            // Ví dụ về toán tử logic
            let ghiChu = 'yes'
            !ghiChu && console.log('Note có ghi chú')   
// 7. Loops (Vòng lặp)
            // Ví dụ về while
            let a = 1
            let sum = 0
            while (a <= 10) {
              sum += a
              a++
            }
            // Ví dụ về do while
            let b = 2
            let total = 0
            do {
            total += b
            b++
            } while (b <= 10) 
            console.log(total)
            // Ví dụ về vòng for
            for (i=0; i < 10; i++) {
                console.log(i)
            }
            // Ví dụ về vòng for-in
            let web = {name:'doidev', skill: 'chém gió'}
            let text = ''
            for (let x in web) {
            text += web[x] + ' '
            }
            console.log(text)
            // Ví dụ về vòng for-of
            let doidev = ['chém gió', 'ăn vạ', 'vật vờ' ]
            let name = ''
            for (let value of doidev) {
            name += value + ' '
            }
            console.log(name)
// 8. Function (hàm)
        // Ví dụ về Declaration Function
        function hoisted() {
        console.log('hàm này bị hoisted')
        }
        // Ví dụ về Expression Function
        var expression = function() {
            console.log('cái này chạy không?')
        }
        // Ví dụ về Arrow Function
        const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
        console.log(materials.map((material) => material.length));

        // Phân biệt parrametter và argument
        // Ví dụ
        function greet(name) {
            console.log("Hello, " + name + "!");
        }
        // Trong hàm greet, "name" là một parameter.

        greet("John");
        // Trong lệnh gọi hàm greet, "John" là một argument.
// 9. This và function nâng cao
        // Ví dụ về this trong method
        const person = {
            name: "John",
            greet: function() {
              console.log("Hello, my name is " + this.name + ".");
            }
          };
          person.greet();
        // Ví dụ về this đứng một mình
        var x = this
        console.log(x) // [object window]
        // Ví dụ về this trong fuction
        function greet() {
            console.log("Hello, my name is " + this.name + ".");
          }
        const name = "Global";
        greet();
        // Ví dụ về this trong "stric mode"
        "use strict";
        function greet() {
        console.log(this);
        }
        greet(); // Output: undefined
        // Ví dụ về this trong event handlers
        <button id="myButton">Click me</button>
        <script>
        document.getElementById("myButton").addEventListener("click", function() {
          console.log(this); // "this" tham chiếu đến phần tử button
          this.textContent = "Clicked"; // Đặt nội dung của button thành "Clicked"
        });
      </script>

        // High order function
        // Ví dụ về HOC
        const tinhTong  = (a) => (b) => a + b
        const ketQua = [1,2,3,4,5].map((item) => item * item)
        console.log(tinhTong(1)(2))
        console.log(ketQua) 
        // Ví dụ về callback
        const increase = () => {
            let x = 0
            const increaseInner = ()  => ++x
            return increaseInner
          }
          const myFunction = increase()
          console.log(increase()())
          console.log(increase()())
          console.log(myFunction())
          console.log(myFunction())
          console.log(myFunction())

        // Dùng callback để xử lí bất đồng bộ, xử lí sự kiện, xử lí lỗi
        function fetchData(callback) {
            // Giả định là đây là một hàm để gọi API từ xa
            setTimeout(function() {
                let data = { name: "John", age: 30 };
                callback(data);
            }, 1000); // Giả định rằng việc gọi API mất 1 giây
        }
        
        function processData(data) {
            console.log("Data received:", data);
        }
        
        fetchData(processData); // fetchData sẽ gọi lại processData khi dữ liệu được trả về
        // Ví dụ Closure
        function outerFunction() {
            let outerVariable = "I'm outer!";
        
            function innerFunction() {
            }
        
            return innerFunction; 
        }
        
        let myFunction = outerFunction();
        
        myFunction(); // Gọi innerFunction từ myFunction
        
        // Ví dụ về Currying
        const findNumber = (num) => (func) => {
            const result = []
            for (let i = 0; i < num; i++) {
              if(func(i)){
                result.push(i)
              }
            }
            return result
          }
          findNumber(10) ((number) => number % 2 === 1)
          findNumber(20) ((number) => number % 2 === 0)
          findNumber(30) ((number) => number % 3 === 2)
// 10. Call, apply, bind
        //   Ví dụ
        const person = {
            fullName: function(city, country) {
              return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
            }
          };
        const person1 = {
        firstName: 'John',
        lastName: 'Doe'
        };
        const person2 = {
        firstName: 'Jane',
        lastName: 'Smith'
        };
        
        const fullName1 = person.fullName.call(person1, 'New York', 'USA');
        console.log(fullName1); // Output: "John Doe, New York, USA"
        
        const fullName2Func = person.fullName.bind(person1, 'Los Angeles', 'USA');
        console.log(fullName2Func()); // Output: "John Doe, Los Angeles, USA"
        
        const fullName3 = person.fullName.apply(person2, ['Chicago', 'USA']);
        console.log(fullName3); // Output: "Jane Smith, Chicago, USA"
          
// 11. Number & Method
        // Ví dụ về số nguyên
        var x = 999999999999999
        // Ví dụ về số thập phân
        var x = 0.5
        // Ví dụ về tính toán số
        var x = '10'
        var y = 20
        var z = x + y // z sẽ là một string 1020
        // Ví dụ về NaN
        let result2 = "Hello" / "World";
        let result3 = parseInt("Hello"); 
        // Ví dụ về Infinity
        let result1 = 1 / 0;
        // Ví dụ về Hexadecimal
        let hexString = "0xFF";
        // Ví dụ về Methods 
            // tostring
            let number = 123;
            let string = number.toString();
            console.log(string); // Output: "123"

            let array = [1, 2, 3];
            let stringArray = array.toString();
            console.log(stringArray); // Output: "1,2,3"
            // to Fixed
            let number = 3.14159265359;
            let roundedString = number.toFixed(2);
            console.log(roundedString); // Output: "3.14"

            // Ép kiểu về số
                // Sử dụng parseInt
                let numberString = "123";
                let integerNumber = parseInt(numberString);
                console.log(integerNumber); // Output: 123
                // Sử dụng parse Float()
                let floatString = "3.14";
                let floatNumber = parseFloat(floatString);
                console.log(floatNumber); // Output: 3.14
                // Sử dụng Number()
                let numberString = "123";
                let number = Number(numberString);
                console.log(number); // Output: 123

// 12. String & Method
        // Ví dụ 
        var web = 'doidev'
        var site = "doidev.com"
        // Tất cả những gì làm được với string
            // Tính độ dài chuỗi
            var txt = 'doidev.com'
            console.log(txt.length) 
            // Tách chuỗi
                // slice(start, end) nghĩa là tách từ vị trí start tới vị trí end
                var str = 'Apple, Banana, Kiwi'
                var res = str.slice(7, 13) // Banana
                // substring(start, end) tương tự slice nhưng không thể nhận số âm
                var str = 'Apple, Banana, Kiwi'
                var res = str.substring(7, 13) // Banana
                // substr() tương tự slice() nhưng tham số thứ 2 là độ dài chuỗi
                var str = 'Apple, Banana, Kiwi'
                var res = str.substr(7, 6) // Banana
                str.substr(7) // Banana, Kiwi
                str.substr(-4) // Kiwi
                // Thay thế chuỗi
                let originalString = "Hello, world!";
                let replacedString = originalString.replace("world", "JavaScript");
                // Chuyển đổi sang chữ hoa và chữ thường
                let originalString = "Hello, world!";
                let uppercaseString = originalString.toUpperCase(); 
                let lowercaseString = originalString.toLowerCase(); 
                // Nối chuỗi
                let firstName = "John";
                let lastName = "Doe";
                let fullName = firstName.concat(" ", lastName);
                // Xóa khoảng trắng
                let str = "  Hello, world!  ";
                let trimmedStr = str.trim();
                console.log(trimmedStr);

                let str = "  Hello, world!  ";
                let noSpaceStr = str.replace(/\s/g, "");
                console.log(noSpaceStr);

                // Lấy kí tự từ một chuỗi
                let str = "Hello";
                let firstChar = str.charAt(0); // Lấy ký tự đầu tiên
                let thirdChar = str[2]; // Lấy ký tự thứ ba

                // Lấy UTF-16 code tại vị trí bất kỳ trong chuỗiLấy UTF-16 code tại vị trí bất kỳ trong chuỗi
                let str = "Hello";
                let utf16Code = str.charCodeAt(2);

                // Chuyển chuỗi sang mảng và tham số là chuỗi ngăn cách
                let str = "apple,banana,orange";
                let delimiter = ","; // Chuỗi ngăn cách
                let arr = str.split(delimiter);
                console.log(arr); // Output: ["apple", "banana", "orange"]

// 13. Array & Methods
        // Ví dụ 
        const cars = [{ name: 'BMW', location: 'germany' }, 'Toyota', 24]
        // Tất cả những gì làm được với Array
            // length: Tính độ dài mảng
            const num = [1, 2, 3, 4]
            num.length // 4
            // Array.isArray() hoặc instanceof(): Nhận biết một biến có phải là mảng hay không
            const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
            Array.isArray(fruits)
            fruits instanceof Array 
            // toString() hoặc join(): Chuyển mảng sang chuỗi
            const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
            const str1 = fruits.toString() // Banana,Orange,Apple,Mango
            const str2 = fruits.join('-') // Banana-Orange-Apple-Mango
            // push(): Thêm 1 phần từ vào cuối mảng, return lại chiều dài mảng mới
            const fruits = ['Banana', 'Orange', 'Apple']
            const x = fruits.push('Mango') // giá trị của x là 4
            // pop(): Xóa phần tử cuối cùng của mảng, return lại phần tử vừa xóa
            const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
            const x = fruits.pop() // giá trị của x là Mango
            // shift(): Xóa phần tử đầu tiên của mảng, return lại phần tử vừa xóa
            const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
            const x = fruits.shift() // giá trị của x là Banana
            // unshift(): Thêm 1 phần tử vào đầu mảng, return lại chiều dài mảng mới
            const fruits = ['Orange', 'Apple', 'Mango']
            const x = fruits.unshift('Banana') // giá trị của x là 4
            // splice(): Thêm hoặc xóa nhiều phần tử trong 1 mảng. Return về mảng với những phần tử vừa được xóa
            const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
            // Xóa 1 phần tử tại vị trí số 0
            const x = fruits.splice(0, 1)
            console.log(x) // [ 'Banana' ]
            console.log(fruits) // [ 'Orange', 'Apple', 'Mango' ]

            // slice(start, end): Tách ra một mảng mới từ mảng cũ
            const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
            const newFruits2 = fruits.slice(1, 3)

            // concat(): Tạo mới một mảng bằng cách nối các mảng cũ
            const myGirls = ['Cecilie', 'Lone']
            const myBoys = ['Emil', 'Tobias', 'Linus']
            const myChildren = myGirls.concat(myBoys) // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

            // spread operator: Phân rã mảng (object) thành từng phần tử nhỏ 
            const cars1 = [1, 2, 3]
            const cars2 = [3, 4, 5]
            // Nối mảng
            const newCars = [...cars1, ...cars2] // [ 1, 2, 3, 3, 4, 5 ]
            // Tạo thành 1 mảng mới
            const cars3 = [...cars1] // [1, 2, 3]
            console.log(cars1 !== cars3) // true

            // forEach(): Lặp qua từng phần tử trong mảng
            const numbers = [1, 2, 3, 4, 5, 6, 7]
            const newNumbers = []
            numbers.forEach((value, index, array) => {
            newNumbers.push(value)
            })
            console.log(newNumbers) // [1, 2, 3, 4, 5, 6, 7]

            // map(): Tạo một mảng mới bằng cách thực hiện tính toán trên mỗi phần tử
            const numbers = [1, 2, 3]
            const newNumbers = numbers.map((value, index, array) => {
            return value * 2
            })
            console.log(newNumbers) // [2, 4, 6]

            // filter(): Tạo một mảng mới với những phần tử thỏa điều kiện
            const numbers = [1, 2, 3]
            const newNumbers = numbers.filter((value, index, array) => {
            return value >= 2
            })
            console.log(newNumbers) // [2, 3]
            // find(): Trả về phần tử thỏa điều kiện đầu tiên. Nếu không có sẽ return undefined
            const numbers = [1, 2, 3]
            const result = numbers.find((value, index, array) => {
              return value >= 2
            })
            console.log(result) // 2
            // findIndex(): Trả về index của phần tử thỏa điều kiện đầu tiên. Nếu không có sẽ return -1
            const cars = ['BMW', 'Toyota', 'Hyundai']
            const result = cars.findIndex((value, index, array) => {
              return value === 'Toyota'
            })
            console.log(result) // 1
            // indexOf(): Trả về index của phần tử trong mảng. Nếu không có sẽ return -1
            const cars = ['BMW', 'Toyota', 'Hyundai']
            const index = cars.indexOf('Toyota')
            console.log(index) // 1
            // every(): Nếu mọi phần tử thỏa điều kiện sẽ return true, còn không sẽ return false
            const numbers = [1, 2, 3]
            const check = numbers.every((value, index, array) => {
              return value > 2
            })
            console.log(check) // false
            // some(): Nếu có một phần tử thỏa điều kiện sẽ return true, còn không sẽ return false
            const numbers = [1, 2, 3]
            const check = numbers.some((value, index, array) => {
            return value > 2
            })
            console.log(check) // true
            // includes(): Kiểm tra một phần tử có trong mảng hay không. return true/false
            const numbers = [1, 2, 3, 4, 5]
            const check = numbers.includes(5) // true
            // reverse(): Đảo ngược thứ tự các item trong array
            var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
            fruits.reverse()
            console.log(fruits) // ["Mango", "Apple", "Orange", "Banana"]
            // sort(): sắp xếp các phần tử theo thứ tự Unicode và thay đổi mảng gốc
            let numbers = [4, 2, 5, 1, 3];
            numbers.sort();
            console.log(numbers); // Output: [1, 2, 3, 4, 5]

            let fruits = ["banana", "apple", "orange", "grape"];
            fruits.sort();
            console.log(fruits); // Output: ["apple", "banana", "grape", "orange"]
            // chúng ta truyền một hàm so sánh vào sort(). Hàm so sánh này sẽ quyết định cách sắp xếp các phần tử của mảng.
            let numbers = [4, 2, 5, 1, 3];
            numbers.sort((a, b) => b - a);
            console.log(numbers); // Output: [5, 4, 3, 2, 1]
            let fruits = ["banana", "apple", "orange", "grape"];
            fruits.sort((a, b) => a.length - b.length);
            console.log(fruits); // Output: ["apple", "grape", "banana", "orange"]
            // reduce(): Dùng để “xào nấu” một array, ví dụ tính tổng 1 array hay từ 1 array chuyển thành 1 array, object khác.
            var points = [1, 2, 3, 4, 5, 6]
            const result = points.reduce((total, current) => {
            return total + current
            })
            console.log(result) // 21
// 14. Object & Methods
            // Ví dụ về Object
            let circle = {
                radius: 5,
                color: "red",
                area: function() {
                    return Math.PI * this.radius ** 2;
                }
            };
            // Có thể truy cập và sử dụng thuộc tính của đối tượng
            console.log(circle.radius); // Output: 5
            console.log(circle.color); // Output: "red"
            console.log(circle.area());
            // Thêm sửa xóa 
            const person = {
                name: 'Tran Do Hoa'
              }
              // thêm thuộc tính vào person
              person.ability = ['Chém gió', 'ăn vạ']
              // sửa thuộc tính name
              person.name = 'Tran Do He'
              // xóa thuộc tính name
              delete person.name
            // Object.assign(): Merge object
            // Đối tượng nguồn 1
            let person1 = {
                firstName: "John",
                lastName: "Doe"
            };
            let person2 = {
                age: 30,
                email: "john.doe@example.com"
            };
            let target = {};
            Object.assign(target, person1, person2);
            // Spread operator: Dùng để shallow copy (copy nông) hoặc merge object, thêm 1 thuộc tính vào đối tượng
            let obj1 = { foo: 'bar' };
            let obj2 = { ...obj1 };
            console.log(obj2); 

            let obj1 = { foo: 'bar' };
            let obj2 = { baz: 'qux' };
            let combinedObject = { ...obj1, ...obj2 };
            console.log(combinedObject); 

            let obj1 = { foo: 'bar' };
            let newObj = { ...obj1, baz: 'qux' };
            console.log(newObj); // Output: { foo: 'bar', baz: 'qux' }

            // Object.keys(): Trả về mảng các key của object
            let obj = {
                firstName: "John",
                lastName: "Doe",
                age: 30
            };
            let keys = Object.keys(obj);
            console.log(keys); // Output: ["firstName", "lastName", "age"]
            
            // Object.values()
            let values = Object.values(obj);
            console.log(values); // Output: ["John", "Doe", 30]
            // Lặp object với for in
            for (let key in obj) {
                console.log(key + ": " + obj[key]);
            }
// 15. Date & time
            // Tạo Date
            let currentDate = new Date();
            // Tạo một đối tượng Date từ một chuỗi ngày:
            let dateString = "2024-04-05";
            let dateFromString = new Date(dateString);
            // Lấy thông tin về ngày, tháng, năm từ đối tượng Date:
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1; // Tháng bắt đầu từ 0
            let year = date.getFullYear();
            console.log("Ngày: " + day + ", Tháng: " + month + ", Năm: " + year);
            // Lấy thông tin về giờ, phút, giây từ đối tượng Date:
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            console.log("Giờ: " + hours + ", Phút: " + minutes + ", Giây: " + seconds);
            // Định dạng hiển thị của đối tượng Date:
            let date = new Date();
            console.log(date.toDateString()); // Hiển thị dưới dạng "Wed Apr 05 2024"
            console.log(date.toLocaleDateString()); // Hiển thị dưới dạng "4/5/2024" (phụ thuộc vào ngôn ngữ và cài đặt địa phương của máy)
            console.log(date.toISOString()); // Hiển thị dưới dạng "2024-04-05T07:00:00.000Z"

// 16. Object Window
        // Ví dụ
        window.alert('Hello')
        // Tính chiều cao bên trong của cửa sổ trình duyệt (pixel)
        console.log("Chiều cao bên trong của cửa sổ trình duyệt: " + window.innerHeight + " pixels");
        // Tính chiều rộng bên trong của cửa sổ trình duyệt (pixel)
        console.log("Chiều rộng bên trong của cửa sổ trình duyệt: " + window.innerWidth + " pixels");
        // mở một cửa sổ, đóng cửa sổ hiện tại
        let myWindow;
        function openWin() {
        myWindow = window.open("", "myWindow", "width=200, height=100");
        }
        function closeWin() {
        myWindow.close();
        }
        // resize cửa sổ hiện tại
        let myWindow = window.open("", "_blank", "width=200,height=100");
        myWindow.document.write("<p>This is my new window!</p>");
        myWindow.resizeTo(300, 200);
        // window.location
        console.log("URL trang hiện tại: " + window.location.href);
        console.log("Tên domain: " + window.location.hostname);
        console.log("Pathname của trang hiện tại: " + window.location.pathname);
        console.log("Giao thức của trang web: " + window.location.protocol);
        // Chuyển hướng sang trang mới
        window.location.assign("https://www.example.com");


// 17. Popup    
        // alert(): Sử dụng để hiển thị một cửa sổ thông báo đơn giản với một thông điệp.
        alert("Hello world!");
        // confirm(): Sử dụng để hiển thị một cửa sổ xác nhận với một thông điệp và hai nút "OK" và "Cancel". Nó trả về true nếu người dùng nhấp vào nút "OK", và false nếu người dùng nhấp vào nút "Cancel".
        let result = confirm("Are you sure?");
        if (result) {
            console.log("User clicked OK");
        } else {
            console.log("User clicked Cancel");
        }
        // prompt(): Sử dụng để hiển thị một cửa sổ nhập dữ liệu với một thông điệp và một ô nhập dữ liệu. Nó trả về chuỗi người dùng nhập vào ô nhập dữ liệu, hoặc null nếu người dùng nhấp vào nút "Cancel".
        let name = prompt("Please enter your name:");
        if (name !== null) {
            console.log("Hello, " + name + "!");
        } else {
            console.log("User clicked Cancel");
        }


