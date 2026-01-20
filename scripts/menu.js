// Shared navigation menu for all documentation pages
function loadNavigationMenu(activePage) {
    const menuItems = [
        { href: 'overview.html', icon: 'home', label: 'Overview', page: 'index' },
        { href: 'getting-started.html', icon: 'rocket', label: 'Getting Started', page: 'getting-started' },
        { href: 'results.html', icon: 'bar-chart-3', label: 'Results', page: 'results' },
        { href: 'executions.html', icon: 'folder-open', label: 'Executions', page: 'executions' },
       // { href: 'appendix.html', icon: 'book-open', label: 'Appendix', page: 'appendix' }
        // { href: 'research.html', icon: 'book-open', label: 'Research', page: 'research' }
    ];

    const nav = document.getElementById('doc-nav');
    if (!nav) return;

    nav.innerHTML = menuItems.map(item => {
        const isActive = item.page === activePage;
        const activeClasses = isActive
            ? 'bg-nav-active border-l-2 border-nav-active-border text-accent font-medium'
            : 'text-sidebar-foreground hover:bg-nav-hover';

        return `
            <a href="${item.href}" class="flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${activeClasses}">
                <i data-lucide="${item.icon}" class="w-4 h-4"></i>
                <span>${item.label}</span>
            </a>
        `;
    }).join('');

    // Re-initialize Lucide icons after DOM update
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
