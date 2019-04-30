//用來蒐集題庫和練習

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },      // 76
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },         // 84
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },      // 78
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },          // 67
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },      // 59
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },  // 70
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },           // 89
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },   // 81
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },         // 37
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },       // 50
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },         // 90
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }     // 80
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];


//https://ithelp.ithome.com.tw/articles/10193378

// 【第一題：列出所有出生於 1500's 年代的發明家(Inventors)】

// 【第二題：列出所有發明家的姓和名】

//【第三題：將發明家的生日做排序，從老到年輕】

//【第四題：所有發明家的總歲數是多少?】

// 【第五題：排序所有發明家的壽命，從長到短】

//https://guahsu.io/2017/05/JavaScript30-04-Array-Cardio-Day-1/

//題目：將inventors內的first與last組合成一個陣列

//題目：依據生日由大至小排序所有的inventor

//題目：加總所有inventor的在世時間

//題目：依據年齡由大至小排序所有的inventor

//題目：列出wiki中巴黎所有包含’de’的路名

//題目：依據lastName排序所有people的資料

//分別計算data內每個種類的數量

//https://guahsu.io/categories/JavaScript30/