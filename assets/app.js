document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for in-page anchors
    var anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetSelector = anchor.getAttribute('href');
            if (!targetSelector || targetSelector === '#') return;
            var target = document.querySelector(targetSelector);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Quote form handling (simple client-side validation)
    var form = document.getElementById('quoteForm');
    var messageBox = document.getElementById('messageBox');

    function escapeHtml(text) {
        var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return String(text).replace(/[&<>"']/g, function (m) { return map[m]; });
    }

    function showMessage(type, html) {
        if (!messageBox) return;
        messageBox.classList.remove('hidden', 'bg-red-100', 'text-red-800', 'border-red-400', 'bg-green-100', 'text-green-800', 'border-green-400');
        if (type === 'success') {
            messageBox.classList.add('bg-green-100', 'text-green-800', 'border-green-400');
        } else {
            messageBox.classList.add('bg-red-100', 'text-red-800', 'border-red-400');
        }
        messageBox.innerHTML = html;
        setTimeout(function () { messageBox.classList.add('hidden'); }, 5000);
    }

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            var name = document.getElementById('name');
            var phone = document.getElementById('phone');
            var email = document.getElementById('email');
            var service = document.getElementById('service');
            var description = document.getElementById('description');

            var missing = [];
            if (!name.value.trim()) missing.push('Full Name');
            if (!phone.value.trim()) missing.push('Phone Number');
            if (!email.value.trim()) missing.push('Email Address');
            if (!service.value.trim()) missing.push('Service');
            if (!description.value.trim()) missing.push('Description');

            if (missing.length > 0) {
                showMessage('error', 'Please complete: ' + missing.join(', ') + '.');
                return;
            }

            showMessage('success', 'Thanks, <strong>' + escapeHtml(name.value) + '</strong>! Your free appraisal request has been sent. A Cleanup Hero will contact you soon!');
            form.reset();
        });
    }
});


