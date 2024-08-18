//1
let str1 = "  Salom, dunyo!  "
console.log(str1.trim()); 

//2
let str2 = "JavaScript Dasturlash Tili"
console.log(str2.toUpperCase());
//Kichkinaga o'tkazish
console.log(str2.toLowerCase());

//3
let str3 = "JavaScript dasturlash tilida kod yozish juda qiziqarli"
console.log(str3.length); 

//4
let str4 = "Men kitob o'qishni yaxshi ko'raman";
let eskiSoz = "kitob";
let yangiSoz = "film";
console.log(str4.replace("kitob o'qishni", "film ko'rishni"));

//5
let str5 = "Telefon raqamingiz: +998907744745"
console.log(str5.slice(str5.length-13));


//2-mashq
//1
let str2_1 = "javascript dasturlash tili"
function capitalizeFirstLetterOfEachWord(str) {
    return str
        .split(' ') // Matnni bo'shliqqa qarab ajratamiz
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ) // Har bir so'zning birinchi harfini katta qilib, qolgan harflarini kichik qilamiz
        .join(' '); // So'zlarni yana birga qo'shamiz
}

const inputText = 'javascript dasturlash tili';
const result = capitalizeFirstLetterOfEachWord(inputText);
console.log(result); // "Javascript Dasturlash Tili"

//4
let str2_4 = "JavaScript bir necha yo'nalishda ishlatiladi"
console.log(str2_4.length ); 