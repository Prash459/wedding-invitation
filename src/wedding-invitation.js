/**
 * The program that changed my life ;)
 *
 * @author: Sudar Muthu (http://sudarmuthu.com/wedding)
 */

(function () {

	var Praveen = new Person("Praveen"),
		Sravani = new Person("Sravani");

	isResponsible(Sravani); 

	gettingMarried({
		boy: Praveen, 
		girl: Sravani,
		in: "Sri Kodandarama swamy Kalyana Mantapam, Main Bazar, Jammalamadugu,Andhra Pradesh- 516434",
		on: "October 26th, 2016",
		at: "5:00 AM - 05:30 AM. Reception: 7:00 PM - 9:00 PM(25 th Oct,2016)"
	});

	isResponsible(Sudar);

	// Person Class
	function Person(name) {
		this.name = name;
		this.status = "single";
		this.responsibility = "none";
	}

	// The grant process
	function gettingMarried(args) {
		args.boy.responsibility = "all";
		args.boy.status = args.girl.status = "committed";
   	    	
		console.log("Expecting you with your family in " + args.in + 
				    " on " + args.on + 
				    " at " + args.at
				   );
	}

	// Check if the person is responsible
	function isResponsible(person) {
		return ((person.status === "single" || 
				 person.name === "Sravani") ? false : true);
	}
	
}());
