/*
* Object destructing.
 */
console.log('destructing');
const person = {
	name: 'Amit',
	color: 'Brown',
	location: {
		city:'patna',
		temprature: 35,
		wind: 'mild'
	}
}

const {name = 'Anony', color} = person;
const {city:city_object, temprature, wind} = person.location;
console.log(`${name} is ${color} and he lives in ${city_object} where temprature is ${temprature}`);

/////////////////////////////////////////////////////////////////////////
///Array Destructing. 
/////////////////////////////////////////////////////////////////////////
const address = ['b-143 ', 'Buddha-colony main road',  '800001'];
const [house_no, street, city = 'Banglore', pincode] = address;
console.log(`i live in ${house_no} and road is ${street}`);