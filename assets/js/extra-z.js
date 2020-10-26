const curr = new Date();
const day = curr.getDate();
const month = curr.getMonth() + 1;

$.backstretch( [
	  "https://zoomers.xyz/img/social-network/1.jpg"
	, "https://zoomers.xyz/img/social-network/2.jpg"
	, "https://zoomers.xyz/img/social-network/3.png"
	, "https://zoomers.xyz/img/social-network/4.jpg"
	, "https://zoomers.xyz/img/social-network/5.jpg"
	, "https://zoomers.xyz/img/social-network/6.jpg"
	, "https://zoomers.xyz/img/social-network/7.png"
	, "https://zoomers.xyz/img/social-network/8.jpg"
	, "https://zoomers.xyz/img/social-network/9.jpg"
	, "https://zoomers.xyz/img/social-network/10.jpg"
	, "https://zoomers.xyz/img/social-network/11.jpg"
	, "https://zoomers.xyz/img/social-network/12.jpg"
], { duration: 20000, fade: 4000 } );

function refreshAt( hours, minutes ) {
    const now = new Date();
    const then = new Date();
    const dayUTC = new Date();

    if ( now.getUTCHours() > hours ||
       ( now.getUTCHours() == hours && now.getUTCMinutes() > minutes ) ) {
		then.setUTCDate( now.getUTCDate() + 1 );
    }

    then.setUTCHours(hours);
    then.setUTCMinutes(minutes);

    const timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
};

refreshAt( 9, 0 );
