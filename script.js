let money, data; // переменые в функции 
function start() {
	money = +prompt("Ваш бюджет на месяц?",""); // let убрали
	data = prompt("Введите дату в формате YYYY-MM-DD", "");

	while (isNaN(money) || money == "" || money == null ) {   // проверка, не даст пока не заполним пройти дальше 
		money = +prompt("Ваш бюджет на месяц?",""); // let убрали
	}
}

start(); // вызов функции start


let appData = {  // объект 
	budget: money,
	timeData: data,
	expenses: {},  // объект в объекте 
	optionalExpenses: {},
	income: [], // массив
	savings:true
};

function chooseExpenses () { // создали функцию 
	for (let i = 0; i < 2; i++) {  // цикл шаг +1 до 2 , спрашивает два вопроса по два раза 
		let a = prompt("Введите обязательную статью расходов в этом месяце","");
		let	b = prompt("Во сколько обойдется?", "");	
	
	if ((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a !='' && b !='' && a.length < 50 ) {
			console.log("done"); // проверка на ввод , и перевод в строку
			appData.expenses[a] = b; // идет в в объект appData , в его внутренйи объет expenses [a] ключ б значение 
		} else {                            
			console.log ("bad result"); // если не прошел проверку
			i--; // возврат к началу цикла 
		}
	
	};
}
chooseExpenses(); // вызов функции 

function detectDayBudget (){
	appData.moneyPerDay=(appData.budget/30).toFixed(); // пустая скобка округление но целого , если 1 до первого знака после запятой

alert("Ежедневный бюджет: " + appData.moneyPerDay );// вывод значеняи объъекта 
}
 
detectDayBudget();

function detectLevel (){
	if (appData.moneyPerDay < 100){
		console.log("Минимальный уровень достатка");
	
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
		console.log ("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000){
		console.log("Высокий уровень достатка");
	} else { 
		console.log ("Ошибка");
	};
}

detectLevel();

function checkSavings(){ // проверка севинг в appdata , если отмена то не идет дальше , если правда выполнение 
	if (appData.savings == true){
		let save = +prompt("Какова сумма накоплений ? ");  // + числовое
		let percent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
	}
}

checkSavings(); //вызов 

function chooseOptExpenses () {

	for (let i = 1; i <= 3; i++) {  // спрашивает три раза вопрос
		let questionOptExpenses = prompt("Статья необязательных расходов?","");
		appData.optionalExpenses[i] = questionOptExpenses ; // записываетс в объект optionalExpenses i ключ questionOptExpenses значение 
		console.log(appData.optionalExpenses); 
	}

}
chooseOptExpenses();

