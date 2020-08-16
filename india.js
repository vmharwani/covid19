const api='https://disease.sh/v3/covid-19/historical/india?lastdays=90';
	async function getData(){
		const response=await fetch(api);
		const data=await response.json();
		console.log(data);
		
		let value=Object.values(data.timeline);
		
		let date=Object.keys(value[0]);
		let cases=Object.values(value[0]);
		let recovered=Object.values(value[2]);
		let deaths=Object.values(value[1]);


		var ctx = document.getElementById('mychart').getContext('2d');
		var myChart = new Chart(ctx, {
	    type: 'line',
	    data: {
	        labels: date,
	        datasets: [{
	            label: 'Total Cases',
	            data: cases,
	            fill:false,
	            backgroundColor: [
	                'rgb(234, 46, 46)',
	            ],
	            borderColor: [
	                'rgb(234, 46, 46)',
	            ],
	            borderWidth: 1
	        },
	        {
	            label: 'Deaths',
	            data: deaths,
	            fill:false,
	            backgroundColor: [
	                'rgb(44, 2, 2)',
	            ],
	            borderColor: [
	                'rgb(44, 2, 2)',
	            ],
	            borderWidth: 1
	        },
	        {
	            label: 'Recovered Cases',
	            data: recovered,
	            fill:false,
	            backgroundColor: [
	                'rgb(120, 183, 98)',
	            ],
	            borderColor: [
	                'rgb(120, 183, 98)',
	            ],
	            borderWidth: 1
	        }
	        ]
	    }
		});
	}
	getData();
	
