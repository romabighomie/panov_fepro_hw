export async function carsData() {
	try {
		const response = await fetch('/carsData.json');
		const data = await response.json();
		
		return data.carsData;
		
	} catch (error) {
		console.error('Error fetching carsData:', error);
	}
}