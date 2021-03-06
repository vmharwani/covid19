

	
	const api='https://disease.sh/v3/covid-19/gov/india';
	async function getData(){
		const response=await fetch(api);
		const data=await response.json();
		const table=Object.values(data);
		
		states=[];
		cases=[];
		activecases=[];
		recoveredcases=[];
		deaths=[];

		for(var i=2;i<table[2].length;i++){
			console.log(table[2][i].state, table[2][i].active, table[2][i].cases, table[2][i].recovered, table[2][i].recovered);
			states.push(table[2][i].state);
			cases.push(table[2][i].cases);
			activecases.push(table[2][i].active);
			recoveredcases.push(table[2][i].recovered);
			deaths.push(table[2][i].deaths);
		}

		var temp='rgb(234, 46, 46)';
		var ctx = document.getElementById('mychart').getContext('2d');
		var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: states,
	        datasets: [{
	            label: 'Total Cases',
	            data: cases,
	            fill:false,
	            backgroundColor: temp,
	            borderColor: temp,
	            borderWidth: 1
	        }]
	    }
		});

		var temp2='rgb(72, 139, 220)';
		var ctx2 = document.getElementById('mychart2').getContext('2d');
		var myChart = new Chart(ctx2, {
	    type: 'bar',
	    data: {
	        labels: states,
	        datasets: [{
	            label: 'Active Cases',
	            data: activecases,
	            fill:false,
	            backgroundColor: temp2,
	            borderColor: temp2,
	            borderWidth: 1
	        }]
	    }
		});

		var temp3='rgb(120, 183, 98)';
		var ctx3 = document.getElementById('mychart3').getContext('2d');
		var myChart = new Chart(ctx3, {
	    type: 'bar',
	    data: {
	        labels: states,
	        datasets: [{
	            label: 'Recovered Cases',
	            data: recoveredcases,
	            fill:false,
	            backgroundColor: temp3,
	            borderColor: temp3,
	            borderWidth: 1
	        }]
	    }
		});

		var temp4='rgb(85, 89, 93)';
		var ctx4 = document.getElementById('mychart4').getContext('2d');
		var myChart = new Chart(ctx4, {
	    type: 'bar',
	    data: {
	        labels: states,
	        datasets: [{
	            label: 'Deaths',
	            data: deaths,
	            fill:false,
	            backgroundColor: temp4,
	            borderColor: temp4,
	            borderWidth: 1
	        }]
	    }
		});

	}
	getData();

