// box-setting //
let boxsetting = document.querySelector(".box-setting");

document.querySelector(".box-icons .gear").onclick = function () {
  this.classList.toggle("fa-spin");

  boxsetting.classList.toggle("open");
};

let textLanding = document.querySelector(".text-landing");
let landingpage = document.querySelector(".landing-page");

window.addEventListener("load", function () {
  textLanding.style.transform = "translate(-50%, -50%)";
  textLanding.style.opacity = "1";
});

// navbar toggel

let navbartoggel = document.querySelector(".landing-page .navbar");
let barrsicon = document.querySelector(".barrs-icon");

// إخفاء الـ navbar افتراضيًا للشاشات الصغيرة فقط
if (window.innerWidth <= 767) {
  navbartoggel.classList.add("navbar-hide");
}

// عند النقر على أيقونة القائمة
barrsicon.onclick = function () {
  if (window.innerWidth <= 767) {
    navbartoggel.classList.toggle("navbar-hide");
  }
};

// التحقق من حجم الشاشة عند تغيير حجم النافذة
window.addEventListener("resize", function () {
  if (window.innerWidth > 767) {
    navbartoggel.classList.remove("navbar-hide"); // تظهر الناف بار للشاشات الكبيرة
  } else {
    navbartoggel.classList.add("navbar-hide"); // تخفي الناف بار للشاشات الصغيرة
  }
});

let photos = ["twoimg.jpg", "threeimg.jpg", "primeimg.jpg", "oneimg.jpg"];
let num = 0;

let rol = setInterval(function () {
  landingpage.style.backgroundImage = `url(${photos[num]})`;
  num++;
  if (num >= photos.length) {
    num = 0;
  }
}, 3000);
// clearInterval(rol);

let lis = document.querySelectorAll(".colors li");

if (window.localStorage.getItem("color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("color")
  );

  lis.forEach(function (li) {
    li.classList.remove("active");
  });

  let activeLi2 = document.querySelector(
    `[data-font="${window.localStorage.getItem("color")}"]`
  );

  if (activeLi2) {
    activeLi2.classList.add("active");
  }
}

lis.forEach(function (li) {
  li.addEventListener("click", function (e) {
    lis.forEach(function (li) {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    document.documentElement.style.setProperty(
      "--main-color",
      e.currentTarget.dataset.color
    );
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
  });
});

//fonts///

let lisFont = document.querySelectorAll(".fonts li");

if (window.localStorage.getItem("font")) {
  document.body.style.fontFamily = window.localStorage.getItem("font");

  lisFont.forEach(function (li) {
    li.classList.remove("active");
  });

  // البحث والتحقق
  let activeLi = document.querySelector(
    `[data-font="${window.localStorage.getItem("font")}"]`
  );

  if (activeLi) {
    activeLi.classList.add("active");
  }
}

lisFont.forEach(function (li) {
  li.addEventListener("click", function (e) {
    lisFont.forEach(function (li) {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    document.body.style.fontFamily = e.currentTarget.dataset.font;
    window.localStorage.setItem("font", e.currentTarget.dataset.font);
  });
});

let clearButton = document.querySelector(".claer"); // تأكد من تحديد الزر بشكل صحيح

clearButton.onclick = function () {
  window.localStorage.clear();
  location.reload();
};
let about = document.querySelector(".about-us");

window.addEventListener("scroll", function () {
  if (window.scrollY > 390) {
    about.style.transform = "scale(1)";
  }
});

let typemygames = document.querySelector(".typemygames");

window.onscroll = function () {
  let offsettop = typemygames.offsetTop;

  let offseHeight = typemygames.offsetHeight;

  let innerhight = window.innerHeight;

  let pageyoffset = window.pageYOffset;

  if (pageyoffset > offsettop + offseHeight - innerhight) {
    let span = document.querySelectorAll(".londing span");
    span.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
  }
};

let boxIMG = document.querySelectorAll(".box-img img");
let statTwo = true;
boxIMG.forEach(function (IMG) {
  IMG.onclick = function (e) {
    let overlay = document.createElement("div");

    overlay.className = "overlay";

    document.body.appendChild(overlay);

    prrimepoup = document.createElement("div");

    prrimepoup.className = "prrimepoup";

    imgpoup = document.createElement("img");

    imgpoup.src = IMG.src;

    prrimepoup.appendChild(imgpoup);
    document.body.appendChild(prrimepoup);
    if (statTwo === true) {
      let nameGame = document.createElement("h3");
      // let buttondiv = document.createElement("div");
      // let button = document.createElement("button");
      // button.textContent = "عرض التفاصيل";
      // button.className = "buttontext";
      let dataname = document.createElement("p");

      nameGame.className = "nameGame";
      dataname.className = "dataname";
      let textname = document.createTextNode(IMG.alt);
      let textname2 = document.createTextNode(IMG.dataset.text);

      nameGame.appendChild(textname);
      dataname.appendChild(textname2);
      // buttondiv.appendChild(button);
      // buttondiv.className = "buttondiv";
      prrimepoup.appendChild(nameGame);
      // prrimepoup.appendChild(buttondiv);
      prrimepoup.appendChild(dataname);
    }

    let btnclose = document.createElement("span");

    btnclose.className = "btnclose";

    let textclose = document.createTextNode("X");

    btnclose.appendChild(textclose);
    prrimepoup.appendChild(btnclose);
  };
});

document.addEventListener("click", function (e) {
  if (e.target.className === "btnclose") {
    e.target.parentNode.remove();
    document.querySelector(".overlay").remove();
  }
});

// let stats = true;
// document.addEventListener("click", function (e) {
//   if (e.target.className === "buttontext") {
//     let prrimepoup = e.target.closest(".prrimepoup"); // إيجاد الـ popup الحالي
//     let imgpoup = prrimepoup.querySelector("img"); // إيجاد الصورة
//     let dataname = prrimepoup.querySelector(".dataname"); // إيجاد dataname
//     if (stats) {
//       imgpoup.style.transform = "scale(0)";
//       if (dataname);
//       // dataname.style.transform = "scale(1)";
//       // تغيير التنسيق إذا كان موجودًا
//       dataname.style.display = "block";
//       // تغيير التنسيق إذا كان موجودًا
//       dataname.classList.toggle("NoneDisplay");

//       stats = false;
//     } else {
//       imgpoup.style.transform = "scale(1)";
//       // dataname.style.transform = "scale(0)";
//       dataname.style.display = "none";

//       stats = true;
//     }
//   }
// });

// let none = document.querySelectorAll(".none");
// let more = document.querySelector(".more");
// none.forEach(function (None) {
//   None.classList.add("hide");
//   None.classList.add("hide2");

//   more.addEventListener("click", function () {
//     None.classList.toggle("hide");
//     None.classList.toggle("hide2");

//     if (!None.classList.contains("hide")) {
//       more.textContent = "عرض اقل";
//     } else {
//       more.textContent = "عرض المزيد";
//     }
//   });
// });
// none.style.display = "none";

let none = document.querySelectorAll(".none");
let more = document.querySelector(".more");

none.forEach(function (None) {
  None.classList.add("hide");
  None.classList.add("hide2");

  more.addEventListener("click", function () {
    None.classList.toggle("hide");
    None.classList.toggle("hide2");

    if (!None.classList.contains("hide")) {
      None.classList.add("show"); // إضافة الكلاس show لظهور العنصر تدريجياً
      more.textContent = "عرض اقل";
    } else {
      None.classList.remove("show"); // إزالة الكلاس show لإخفاء العنصر تدريجياً
      more.textContent = "عرض المزيد";
    }
  });
});

let futs = document.querySelector(".futs p");
let buy = document.getElementById("buy");
let statThree = true;
buy.addEventListener("click", function (e) {
  if (statThree === true) {
    futs.textContent = futs.dataset.game;

    let img = document.createElement("img");
    let imgTwo = document.createElement("img");
    img.className = "imgFire";
    imgTwo.className = "imgFire2";
    img.src =
      "https://cdn.pixabay.com/animation/2023/01/19/18/24/18-24-20-426_512.gif";
    imgTwo.src =
      "https://cdn.pixabay.com/animation/2023/01/19/18/24/18-24-20-426_512.gif";
    futs.appendChild(img);
    futs.appendChild(imgTwo);
    futs.style.backgroundColor = "#5c00ff";

    statThree = false;
  } else {
    futs.textContent = "دعم لعبة واحدة فقط 🎮";
    futs.style.backgroundColor = "#181818";

    statThree = true;
  }
});

let buy2 = document.getElementById("buy2");
let twoplan = document.querySelector(".twoplan");
let element = document.querySelector(".element");
let futs3 = document.querySelector(".futs3 p");

let stat55 = true;
let el1; // تعريف المتغير هنا ليكون متاحًا في أي مكان داخل الوظيفة

// buy2.addEventListener("click", function (e) {
//   if (stat55 === true) {
//     el1 = document.createElement("div");
//     Pgame = document.createElement("p");
//     Pgame2 = document.createElement("p");
//     text1 = document.createTextNode("اللعبه الاولي");
//     text2 = document.createTextNode("اللعبه الثانيه");
//     el1.dataset.game1 = "heloman";
//     el1.className = "el1";
//     Pgame.className = "Pgame";
//     Pgame2.className = "Pgame2";
//     el1.appendChild(Pgame);
//     el1.appendChild(Pgame2);
//     el1.style.top = "0";
//     twoplan.appendChild(el1);
//     Pgame.appendChild(text1);
//     Pgame2.appendChild(text2);
//     stat55 = false;
//   } else {
//     twoplan.removeChild(el1); // استخدام removeChild مع العنصر الموجود
//     stat55 = true;
//   }
// });
element.style.zIndex = "-30987";

let statFour = true;
buy2.addEventListener("click", function () {
  if (statFour === true) {
    element.style.top = "0";
    element.style.opacity = "1";
    element.style.zIndex = "";

    statFour = false;
  } else {
    element.style.top = "-500px";
    element.style.opacity = "0";
    element.style.zIndex = "-30987";
    statFour = true;
  }
});

// let cardImg = document.querySelectorAll(".card-img img");
// let input = document.querySelector(".input");
// let methodtext = document.querySelector(".method-text");
// let newDIV = document.querySelector(".new");
// let paypal = document.getElementById("pay-pal");
// let methodtextid = document.getElementById("method-text-id");
// let mastercard = document.getElementById("mastercard");
// let visa = document.getElementById("visa");
// newDIV.style.display = "none";

// cardImg.forEach(function (img) {
//   img.addEventListener("click", function () {
//     cardImg.forEach(function (item) {
//       item.classList.remove("border");
//     });
//     img.classList.add("border");
//     methodtextid.src = img.src;
//     if (paypal.className.includes("border")) {
//       newDIV.style.display = "block";
//       input.style.display = "none";
//     } else if (mastercard.className.includes("border")) {
//       input.style.display = "block";
//       newDIV.style.display = "none";
//     } else if (visa.className.includes("border")) {
//       input.style.display = "block";
//       newDIV.style.display = "none";
//     }
//   });
// });

// let closePage = document.querySelector(".close");
// let pagepayment = document.querySelector(".page-buy-payment");
// let planname = document.getElementById("plan-name");

// let pagaBuy = document.querySelectorAll(".page-buy");
// pagepayment.style.display = "none";
// let statfive = true;
// pagaBuy.forEach(function (b) {
//   b.addEventListener("click", function (e) {
//     pagepayment.style.display = "block";
//     input.style.display = "none";
//     const h1Text = b.closest(".plan").querySelector(".name-plan").textContent;
//     planname.textContent = `اسم الباقه ${h1Text}`;
//     window.scrollTo({
//       top: 6129,
//       behavior: "smooth", // هذه الخاصية تجعل التمرير يكون ناعماً
//     });
//   });
// });
// closePage.onclick = function () {
//   pagepayment.style.display = "none";
//   window.scrollTo({
//     top: 5225,
//     behavior: "smooth", // هذه الخاصية تجعل التمرير يكون ناعماً
//   });
// };
// let imgstop = document.querySelector(".img-stop");
// let pris = document.querySelector(".pris");

// pris.style.display = "none";

// imgstop.onclick = function () {
//   const boxImg = document.querySelector(".box-game .box-img-n");
//   boxImg.style.setProperty("--before-w", "0"); // تغيير الخلفية للون الأحمر
//   boxImg.style.setProperty("--before-h", "0"); // تغيير الخلفية للون الأحمر
//   this.style.transform = "scale(0)";
//   pris.style.display = "block";
//   setTimeout(function () {
//     pris.style.opacity = "0";
//     pris.style.transform = "scale(0)";
//   }, 3000);
// };

// // onform.onsubmit() = function () {
// //   onform.preventDefault();
// // }
// let onform = document.querySelector(".onform");
// let inputgav = document.querySelector(".text");
// let ver = document.querySelector(".ver");
// let vide = document.querySelector(".vide");
// let inputText = document.getElementById("inputText");
// let submitButton = document.getElementById("submit"); // جلب زر الإرسال
// let i = document.querySelector(".ico");
// let iT = document.querySelector(".fa-check");
// let email = document.getElementById("email-value");
// vide.style.opacity = "0";
// ver.style.zIndex = "-5000000";

// // استرجاع القيمة من localStorage عند تحميل الصفحة
// let storedValue = localStorage.getItem("value");
// if (storedValue) {
//   email.textContent = `الحساب المشارك ${storedValue}`; // عرض القيمة المخزنة في الـ email
// }

// onform.addEventListener("submit", function (e) {
//   e.preventDefault(); // منع السلوك الافتراضي

//   if (inputText.value === "") {
//     alert("Please fill out the field.");
//   } else {
//     // تعطيل زر الإرسال
//     submitButton.disabled = true;
//     submitButton.innerText = "Sending..."; // تغيير النص أثناء الإرسال

//     // رابط Google Apps Script اللي نشرته
//     const scriptURL =
//       "https://script.google.com/macros/s/AKfycbwz3TJxym8mblzUHffk_4TwrWY4zjmpigdEX4vKwG-IAjKVVtEV-pN2mFuRO1J7MA3R/exec";

//     fetch(scriptURL, {
//       method: "POST",
//       body: new URLSearchParams({ value: inputText.value }),
//     })
//       .then((response) => response.text())
//       .then((data) => {
//         console.log("Success:", data);

//         let overlay = document.createElement("div");

//         overlay.className = "Twooverlay";
//         vide.style.opacity = "1";

//         inputgav.appendChild(overlay);

//         setTimeout(function () {
//           overlay.remove();
//           vide.style.opacity = "0";
//         }, 3000);
//         i.style.transform = "scale(1)";
//         ver.style.zIndex = "5000000";
//         iT.style.opacity = "1";
//         i.style.opacity = "1";
//         i.style.animationPlayState = "running";

//         let inputTextValue = inputText.value; // الحصول على القيمة من الحقل
//         localStorage.setItem("value", inputTextValue); // تخزين القيمة في الـ localStorage

//         // عرض القيمة المخزنة في الـ email
//         email.textContent = `الحساب المشارك ${inputTextValue}`;

//         inputText.value = ""; // إفراغ حقل الإدخال
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
//       })
//       .finally(() => {
//         // إعادة تفعيل زر الإرسال
//         submitButton.disabled = false;
//         submitButton.innerText = "Send"; // إعادة النص لحالته الأصلية
//       });
//   }
// });

// let iconDown = document.querySelector(".icon-dwon");
// let footer = document.querySelector(".footer");
// let endsoch = document.querySelectorAll(".box-end");
// console.log(endsoch);

// iconDown.onclick = function (e) {
//   endsoch.forEach(function (soh) {
//     soh.classList.toggle("scale");
//     footer.classList.toggle("height");
//   });
//   if (!footer.classList.contains("height")) {
//     window.scrollTo({
//       top: 8371,
//       behavior: "smooth", // هذه الخاصية تجعل التمرير يكون ناعماً
//     });
//   }
// };
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 390) {
//     about.style.transform = "scale(1)";
//   }
// });
// // 8371;

// let forTop = document.querySelector(".forTop");
// forTop.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth", // هذه الخاصية تجعل التمرير يكون ناعماً
//   });
// };
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 0) {
//     forTop.style.display = "block";
//   } else {
//     forTop.style.display = "none";
//   }
// });
