/**
 * Represents a collection of all video elements on the page.
 * @type {NodeListOf<HTMLVideoElement>}
 */
const allVideos = document.querySelectorAll('video');
/**
 * Represents the sidebar element.
 * @type {HTMLElement}
 */
const sidebar = document.querySelector('.left-section');
/**
 * Represents a collection of sidebar items.
 * @type {NodeListOf<Element>}
 */
const sidebarItems = document.querySelectorAll('.sidebar .item');
/**
 * Represents a collection of category items.
 * @type {NodeListOf<Element>}
 */
const catItems = document.querySelectorAll('.categories a');

// Play/Pause video on mouse enter/leave
allVideos.forEach(video => {
    /**
     * Play the video when the mouse enters.
     * @event mouseover
     */
    video.addEventListener('mouseover', () => {
        video.play();
    });
    /**
     * Pause the video when the mouse leaves.
     * @event mouseleave
     */
    video.addEventListener('mouseleave', () => {
        video.pause();
    });
});

// Handle sidebar item click
sidebarItems.forEach(sideItem => {
    /**
     * Handle the click event on a sidebar item.
     * @event click
     */
    sideItem.addEventListener('click', () => {
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });
        sideItem.classList.add('active');
    });
});

// Handle category item click
catItems.forEach(catItem => {
    /**
     * Handle the click event on a category item.
     * @event click
     */
    catItem.addEventListener('click', () => {
        catItems.forEach(item => {
            item.classList.remove('active');
        });
        catItem.classList.add('active');
    });
});

// Move sidebar on small devices scroll
window.addEventListener('scroll', () => {
    if (window.innerWidth <= 992) {
        if (this.pageYOffset > 20) {
            sidebar.style.paddingTop = '20px';
        } else {
            sidebar.style.paddingTop = '70px';
        }
    }
});
