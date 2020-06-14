import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
declare global {
    interface Window { initMap: any }
}
// Create the script tag, set the appropriate attributes
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_API_KEY}&callback=initMap`;
script.defer = true;
script.async = true;
const user = new User();
const company = new Company();
// Attach your callback function to the `window` object
window.initMap = function() {
    const map = new CustomMap('map');
    map.addMarker(user);
    map.addMarker(company);
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
console.log(user, company);