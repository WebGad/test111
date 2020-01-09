const puppeteer = require('puppeteer');
const faker = require('faker');
faker.locale = 'ru';

// Рандом буквы для адресов
function getRandomChar() {
    const chars = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я'];
    const charNumber = Math.floor(Math.random() * (chars.length - 0) + 0);
    return chars[charNumber];
}
// Рандом для поля Должность
function getRandomChar2() {
  const chars2 = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ч', 'Ш', 'Э', 'Ю'];
  const charNumber = Math.floor(Math.random() * (chars2.length - 0) + 0);
  return chars2[charNumber];
}
// Рандом для повторения фунции и ИНН в Место работы
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// Генерация времени для добавление в имя скриншота при ошибке
function getNowTime() {
  var date = new Date();
  const yy = date.getFullYear().toString();
  const mn = date.getMonth().toString()+1;
  const dd = date.getDate().toString();
  const hh = date.getHours().toString();
  const mm = date.getMinutes().toString();
  return yy + '.' + mn + '.' + dd + '.' + hh + '.' + mm;
}
// Генерация даты трудоустройства
function getNowTimeJob(years) {
  var date2 = new Date();
  const yy = date2.getFullYear().toString() - years;
  const mn = date2.getMonth().toString();
  const dt = date2.getDate().toString();
    return dt + mn + yy;
}
console.log(getNowTimeJob(21));

let auto = 1;
    while (auto) { // когда auto будет равно 0, условие станет ложным, и цикл остановится
// Faker
const lead = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  date: faker.date.past(),
};           
// Запуск по максимальному разрешению
async function getPic(){
  const browser = await puppeteer.launch({
    headless: false,
    args:['--start-maximized']
  });
  const [page] = await browser.pages();
  await page.goto('https://b2blast.deltacredit.ru');
  await page.setViewport({width: 1600, height: 800})
  await page.click('#bySelection > div:nth-child(4) > div');
     
  // await page.click('#snils');
  // await page.keyboard.press('0');
  // await page.keyboard.press('0');
  // await page.keyboard.press('0');
  // await page.waitFor(500);
  // await page.keyboard.press('0');
  // await page.keyboard.press('0');
  // await page.keyboard.press('0');
  // await page.waitFor(1000);
  // await page.keyboard.press('6');
  // await page.waitFor(500);
  // await page.keyboard.press('0');
  // await page.keyboard.press('0');
  // await page.waitFor(500);
  // await page.keyboard.press('0');
  // await page.waitFor(1000);
  // await page.keyboard.press('2');
  //   await page.waitFor(5000);
  //   await page.click('#password');
  // await page.type('#password', '11111111');
  //    await page.waitFor(500);
  // await page.click('#loginByPwdButton');

  // document.getElementsByClassName('header-box')[1].children[1].children[0].click();
  // document.getElementById("snils").value = "000-000-600 02";
  // document.getElementById("snils").focus();
  // document.getElementById("password").value = "11111111"; 
  // document.getElementById("password").focus();
  // document.getElementById("loginByPwdButton").click();
  

  // Логин и пароль
  await page.waitForSelector('#userNameInput');
    await page.type('#userNameInput', 'deltarieltorros@yandex.ru');
    await page.type('#passwordInput', 'Gbdfytn002');
    await page.click('#submitButton');  
  try{
    // throw new Error('Karina');
    

  // Выбор Типа заявки
  await page.waitForSelector('#wrapper > div > app-home > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > div > button > span > mat-icon');
   await page.click('#wrapper > div > app-home > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > div > button > span > mat-icon');
  
   // Выбор ОО заявки 
   await page.waitForSelector('#cdk-overlay-0 > div > div > button.onlineLeadButton.mat-menu-item');
   await page.waitFor(1500);
   await page.click('#cdk-overlay-0 > div > div > button.onlineLeadButton.mat-menu-item');
  //  await page.waitFor(1500);
   await page.waitForSelector('#full_fio');
   await page.type('#full_fio', 'Петрова Ядвига Сысоевна');
   await page.waitFor(1500);
   await page.keyboard.press('ArrowDown');
   await page.waitFor(500);
   await page.keyboard.press('Enter');
     
  //  Пол
  if (await page.$('#mcdsoft_children_not_resident_amount'))  {
   await page.click('#mcdsoft_children_not_resident_amount');
   await page.type('#mcdsoft_children_not_resident_amount','0');}
              
  //  Срок кредита в годах
  await page.click('#mcdsoft_period_year');
   await page.type('#mcdsoft_period_year','' + getRandomInt(3, 7));
   
// Первоначальный взнос
await page.click('#navicons_first_pay_money');
   await page.type('#navicons_first_pay_money','' + getRandomInt(100000, 500000));

  // Ввод телефона Заёмщика
  await page.click('#mobilephone');
   await page.type('#mobilephone', lead.phone);
   await page.waitFor(1000);

  // Сохранение
  await page.click('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button');
  await page.waitFor(500);
  // Заполнить количество детей 0

  // Страна рождения
  await page.click('#mcdsoft_type_object > div > div.mat-select-value > span');  
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('Enter');

  // Сумма кредита
  await page.click('#navicons_credit_sum');
   await page.type('#navicons_credit_sum', '' + getRandomInt(10000, 80000));

  // Тип объекта
  await page.click('#mcdsoft_familystatus > div > div.mat-select-value > span');
   await page.keyboard.press('Enter');
   await page.waitFor(1000);

    // Сохранение
  await page.click('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button');
   await page.waitForSelector('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button');
      
  // Email
  await page.click('#emailaddress1');
   await page.type('#emailaddress1', 'qwer@yandex.ru');
  
   //СНИЛС
   await page.click('#dc_snils');
   await page.type('#dc_snils', '00000060002');
   await page.waitFor(1000);

// Уровень образования
  // await page.click('#mat-input-244');#mat-tab-content-10-0 > div > personal-data-short > row > div > div > dc-autocomplete > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix
  await page.keyboard.press('Tab');
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('Enter');
      
//  Адрес
  await page.click('#mcdsoft_full_address');
   await page.type('#mcdsoft_full_address', '' + getRandomChar());
   await page.waitFor(1000);
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('Enter');
   await page.waitFor(1000);
     
// Место работы
  // Организация или ИНН
  await page.click('#companyname');
   await page.type('#companyname', '' + getRandomInt(99, 300));
   await page.waitFor(1000);
    let k = getRandomInt(2, 4);
     while (k) {
     await page.keyboard.press('ArrowDown');
        k--;
     }
  await page.keyboard.press('Enter');
   await page.waitFor (1000);
   
  //Сфера деятельности компании 
  await page.click('#job-place > div.ng-star-inserted > row:nth-child(1) > div > dc-autocomplete > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix');
   let s = getRandomInt(1, 63);
    while (s) {
    await page.keyboard.press('ArrowDown');
    s--;
  }
  await page.keyboard.press('Enter');

  // Телефон организации
  await page.click('#mcdsoft_company_phone');
   await page.type('#mcdsoft_company_phone', lead.phone);

   // Дата трудоустройства текущего места работы
   await page.keyboard.press('Tab'); //Костыль
  await page.type(getNowTimeJob());

  // Форма занятости
  await page.click('#mcdsoft_employment_type > div > div.mat-select-value > span');
      await page.keyboard.press('Enter');
  
  // Фактический адрес организации
  await page.click('#mcdsoft_company_address');
   await page.type('#mcdsoft_company_address', '' + getRandomChar());
   await page.waitFor(1000);
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('Enter');
      
  // Должность
  await page.click('#jobtitle');
   await page.type('#jobtitle', '' + getRandomChar2());
   await page.waitFor (1000);
    let d = getRandomInt(1, 20);
     while (d) { // когда s будет равно 0, условие станет ложным, и цикл выбора Сферы деятельности остановится
     await page.keyboard.press('ArrowDown');
    d--;
  }
  await page.keyboard.press('Enter');
  
  // Характер работы
  await page.click('#mcdsoft_nature_of_work > div > div.mat-select-value > span');
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('Enter');
   
  //  Сохранение
  await page.click('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button > span > mat-icon');
   await page.waitForSelector('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button > span > mat-icon');
   const idc = page.url().slice(-36);

   // Страна рождения
  await page.click('#mat-input-15'); 
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
     
   // Отправить в банк
  await page.waitFor(1000);
   await page.click('#wrapper > div > lead-ex > div.bottomSnackbar.bottomSnackbarShow > button');
    
  //  #upload_print_66e9b397-af12-ea11-8462-005056bf2b6e > div
  }catch (ex) {
    console.log(ex);
    await page.screenshot({path: 'b2b' + getNowTime() + '.png'});
  } //скрин при возникновении ошибки
  
  //Сохранение
  await page.click('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button');
  await page.waitForSelector('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button');
  // await browser.close();
}

getPic();   
auto--;
            }