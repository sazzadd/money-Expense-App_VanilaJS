const calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener('click',function(){
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    // validation
    // if(income <=0 || isNaN(income)){
    //     document.getElementById('income-error').classList.remove('hidden');
    //     return;
    // }
    // console.log('hellow')
    // if(software <=0 || isNaN(software)){
    //     document.getElementById('software-error').classList.remove('hidden');
    //     return;
    // }
    // if(courses <=0 || isNaN(courses)){
    //     document.getElementById('courses-error').classList.remove('hidden');
    //     return;
    // }
    // if(income <=0 || isNaN(internet)){
    //     document.getElementById('internet-error').classList.remove('hidden');
    //     return;
    // }
    // if(totalExpenses > income){
    //     document.getElementById('logic-error').classList.remove('hidden');
    //     return;
    // }
    //calculation 
    const totalExpenses = software + courses + internet ;
    const balance = income - totalExpenses  ;
    const totalExpensesElement = document.getElementById('total-expenses');
    const balanceElement = document.getElementById('balance');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
    balanceElement.innerText = balance.toFixed(2);
    const results = document.getElementById('results');
    results.classList.remove('hidden');
    // history
    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-3 rounded-md border-1-2 border-indigo-500 border-l-2 border-blue-500";
    historyItem.innerHTML= `
    <p class= "text-sx text-gray-500">${new Date().toLocaleDateString()}</p>
     <p>Income:৳ ${income.toFixed(2)}</p>
     <p>Expenses:৳ ${totalExpenses.toFixed(2)}</p>
     <p>Balance:৳ ${balance.toFixed(2)}</p>
    `
    const historyList = document.getElementById('history-list');
    historyList.insertBefore(historyItem,historyList.firstChild)
})
const calculateSavingsBtn = document.getElementById('calculate-savings');
calculateSavingsBtn.addEventListener('click',function(){
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    const savingsInput = parseFloat(document.getElementById('savings').value) ;
    const savingAmount = (savingsInput*balance) / 100;
    const savingsAmountResult = document.getElementById('savings-amount')
    savingsAmountResult.innerText = savingAmount.toFixed(2);
    const remainingBalance = balance - savingAmount;
    const remainingBalanceElement = document.getElementById('remaining-balance');
    remainingBalanceElement.innerText = remainingBalance;
})
// history button
    const historyTab = document.getElementById('history-tab');
    const assistantTab = document.getElementById('assistant-tab');
    historyTab.addEventListener('click', function(){
    historyTab.classList.add('text-white','bg-gradient-to-r', 'from-purple-600','to-blue-500','transition-all');
    historyTab.classList.remove('text-gray-600');
    assistantTab.classList.remove('text-white','bg-gradient-to-r', 'from-purple-600','to-blue-500');
    assistantTab.classList.add('text-gray-600')
    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
 })

 assistantTab.addEventListener('click', function(){
    assistantTab.classList.add('text-white','bg-gradient-to-r', 'from-purple-600','to-blue-500');
    assistantTab.classList.remove('text-gray-600');
    historyTab.classList.remove('text-white','bg-gradient-to-r', 'from-purple-600','to-blue-500');
    historyTab.classList.add('text-gray-600')
    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
 })