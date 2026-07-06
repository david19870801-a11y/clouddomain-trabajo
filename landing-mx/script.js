document.addEventListener('DOMContentLoaded', function () {
    var trackLinks = document.querySelectorAll('[data-track]');

    trackLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            var eventName = link.getAttribute('data-track');

            if (typeof fbq === 'function') {
                fbq('track', 'Lead', {
                    content_name: eventName
                });
            }
        });
    });
});
