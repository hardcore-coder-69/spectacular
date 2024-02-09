document.addEventListener("DOMContentLoaded", function () {
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function loadContent() {
        var page = getParameterByName('page');
        var contentSection = document.getElementById('content');
        var content = '';

        switch (page) {
            case 'products':
                content = `<div class="about">
                            <h2>Our Products</h2>
                            <p>Here are some of the products launched by Spectacular</p>
                        </div>`;
                break;
            case 'services':
                content = `<div class="about">
                            <h2>Our Services</h2>
                            <p>We offer a wide range of services to meet your needs.</p>
                        </div>`;
                break;
            case 'contact':
                content = `<div class="about">
                            <h2>Contact Us</h2>
                            <p>Feel free to get in touch with us for any inquiries or feedback.</p>
                        </div>
                        <div class="about-us">
                            <h2>About Us</h2>
                            <p>We are a leading company providing excellent services to our customers.</p>
                        </div>`;
                break;
            default:
                content = `<div class="about">
                            <h2>Welcome to Spectacular</h2>
                            <p>We are dedicated to providing top-notch services to our customers.</p>
                        </div>`;
        }

        contentSection.innerHTML = content;
    }

    loadContent();
});
