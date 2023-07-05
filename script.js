const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = []; 
	fruit.filter(input => input.toLowerCase().includes(str) ? results.push(input): ''); 
	return results;
}

function searchHandler(e) {
	const inputVal = e.target.value.toLowerCase(); 
	const results = search(inputVal); 
	inputVal ? showSuggestions(results) : suggestions.innerText = ''; 
    
}

function showSuggestions(results, inputVal) {
    
	suggestions.innerText = ''; 
	for (let i = 0; i < results.length && i < 5; i++) {
		const choice = results[i];
		const li = document.createElement('li');
		li.innerText = choice;
		suggestions.appendChild(li);
    }
		
	}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerText = '';
	
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);