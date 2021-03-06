function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function myInfo() {

	info =  'Jan Kowalski' + '\n' +
			'Kraków' + '\n' +
			'ul. Zajebistości 1/1' + '\n' + 
			'aaa@aaa.pl: ' + '\n';

	navigator.notification.alert(info);
	
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
};

function onError(contactError) {
    alert('onError!');
};

function contctList(){
		navigator.contacts.find(
        [navigator.contacts.fieldType.displayName],
        gotContacts,
        errorHandler);
}

function errorHandler(e) {
    alert("errorHandler: "+e);
}

function gotContacts(c) {
    alert("gotContacts, number of results "+c.length);
    for(var i=0, len=c.length; i<len; i++) {
        console.dir(c[i]);
    }
}