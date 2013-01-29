var page = require('webpage').create();
page.onConsoleMessage = function (msg){
    console.log(msg);     
};
page.open('http://www.firstgiving.com/Page/2375648/Donation', function() {
    page.includeJs("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        page.evaluate(function() {
			$("#amount").val(1.00);
			$("#displayName").val('Display Name');
			$("#donationMessage").val('Donation Message');
			$("#billToEmail").val('email@eeeeemail.com');
			$("#billToFirstName").val('First Name');
			$("#billToLastName").val('Last Name');
			$("#billToAddressLine1").val('Bill To Address');
			$("#billToCity").val('Bill To City');
			$("#state").val('AL');
			$("#billToZip").val('12345');
			$("#ccNumber").val('4111111111111111');
			$("#ccCardValidationNum").val('123');
			$("#ccExpDateMonth").val('01');
			$("#ccExpDateYear").val('2015');

			console.log("Submitting donation");
			$("#donateContainer").submit();
			console.log("Donation submitted.");				
        });
		page.render('FG_Page_Donation.png');
        phantom.exit()
    });
});