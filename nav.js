(function () {
    const mountNode = document.getElementById('site-nav');
    if (!mountNode) return;

    const currentPage = (() => {
        const pathname = window.location.pathname || '';
        const last = pathname.split('/').filter(Boolean).pop() || 'index.html';
        return last === '' ? 'index.html' : last;
    })();

    const isActive = (page) => currentPage === page;

    const navMarkup = `
    <nav class="site-nav">
        <button class="menu-toggle" id="mobile-menu" aria-label="Toggle navigation" aria-expanded="false" aria-controls="nav-links">
            ☰
        </button>

        <ul class="nav-links" id="nav-links">
            <li><a href="index.html" ${isActive('index.html') ? 'class="active" style="color: #ffffff;" aria-current="page"' : ''}>Home</a></li>

            <li class="dropdown">
                <a href="#" ${isActive('about.html') || isActive('bibliography.html') || isActive('gallery.html') ? 'class="dropbtn active" style="color: #ffffff;" aria-current="page"' : 'class="dropbtn"'}>Context ▾</a>
                <div class="dropdown-content">
                    <a href="about.html" ${isActive('about.html') ? 'aria-current="page"' : ''}>About Mah Laqa</a>
                    <a href="bibliography.html" ${isActive('bibliography.html') ? 'aria-current="page"' : ''}>Bibliography & Links</a>
                    <a href="gallery.html" ${isActive('gallery.html') ? 'aria-current="page"' : ''}>Visual Archive</a>
                </div>
            </li>

            <li class="dropdown">
                <a href="#" ${isActive('sources.html') || isActive('view.html') || isActive('analysis.html') ? 'class="dropbtn active" style="color: #ffffff;" aria-current="page"' : 'class="dropbtn"'}>The Text ▾</a>
                <div class="dropdown-content">
                    <a href="sources.html" ${isActive('sources.html') ? 'aria-current="page"' : ''}>The Witnesses</a>
                    <a href="view.html" ${isActive('view.html') ? 'aria-current="page"' : ''}>Read & Collate</a>
                    <a href="analysis.html" ${isActive('analysis.html') ? 'aria-current="page"' : ''}>Computational Analysis</a>
                </div>
            </li>
            <li><a href="about-project.html" ${isActive('about-project.html') ? 'class="active" style="color: #ffffff;" aria-current="page"' : ''}>About the Project</a></li>
            <li><a href="downloads.html" ${isActive('downloads.html') ? 'class="active" style="color: #ffffff;" aria-current="page"' : ''}>Resources</a></li>
        </ul>
    </nav>
    `;

    mountNode.outerHTML = navMarkup;

    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    if (mobileMenuBtn && navLinks) {
        const syncMenuState = () => {
            mobileMenuBtn.setAttribute('aria-expanded', String(navLinks.classList.contains('show')));
        };

        syncMenuState();

        ['click', 'touchstart'].forEach(function (evt) {
            mobileMenuBtn.addEventListener(evt, function (e) {
                e.preventDefault();
                navLinks.classList.toggle('show');
                syncMenuState();
            }, { passive: false });
        });
    }
})();
