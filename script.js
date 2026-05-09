$(document).ready(function() {
    console.log("LEVEL ZERO: All systems operational.");

    // 1. Smooth Scrolling
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });

    // 2. Navbar Interaction
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.main-header').css({
                'background': '#000000',
                'padding': '8px 0',
                'box-shadow': '0 10px 40px rgba(0, 0, 0, 0.8)'
            });
        } else {
            $('.main-header').css({
                'background': '#000000',
                'padding': '12px 0',
                'box-shadow': '0 10px 30px rgba(0, 0, 0, 0.5)'
            });
        }
    });

    // 3. Contact Form Submission (Gaming Themed)
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        const btn = $(this).find('button');
        const originalText = btn.text();
        
        btn.prop('disabled', true).html('<i class="fas fa-satellite-dish fa-spin me-2"></i>UPLOADING...');
        
        setTimeout(function() {
            btn.prop('disabled', false).text('TRANSMISSION RECEIVED');
            btn.css({'background': '#FFFFFF', 'color': '#39FF14', 'border': '1px solid #39FF14'});
            
            setTimeout(function() {
                btn.text(originalText).css({'background': '#39FF14', 'color': 'black', 'border': 'none'});
                $('#contactForm')[0].reset();
            }, 3000);
        }, 1500);
    });

    // 4. Hero Title Animation
    setTimeout(function() {
        $('#hero-title').css({
            'opacity': '1',
            'transform': 'translateY(0)',
            'letter-spacing': '5px'
        });
    }, 500);

    // 5. Card Hover Sound (Conceptual / Visual Feedback)
    $('.feature-card').hover(
        function() {
            $(this).css('border-color', '#39FF14');
            $(this).find('i').addClass('fa-bounce');
        },
        function() {
            $(this).css('border-color', '#E0E0E0');
            $(this).find('i').removeClass('fa-bounce');
        }
    );

    // 6. Subscription Feedback
    $('#subscribeForm').on('submit', function(e) {
        e.preventDefault();
        const email = $(this).find('input').val();
        alert("ENLISTED! Welcome to the Level Zero Elite, " + email.split('@')[0].toUpperCase());
        $(this)[0].reset();
    });
});
