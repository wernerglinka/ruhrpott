/* global window, document */

// https://github.com/BrentonCozby/dom-fader
const {fadeIn, fadeOut, fadeToggle} = domFader;


/**
 * Manage filterred rich list display
 * 
 * @params {*} none
 * @return {function} initializes a filterred rich list display
 */
const listFilters = (function() {
    
  const hideAllListItems = (list) => {
    const listItems = list.querySelectorAll("li");
    listItems.forEach((item) => {
      item.style.display = 'none';
    });
  };
  const showAllListItems = (list) => {
    const listItems = list.querySelectorAll("li");
    listItems.forEach((item) => {
      item.style.display = 'block';
    });
  };

  const showThisListItem = (list, category) => {
    const listItems = list.querySelectorAll("li");
    listItems.forEach((item) => {
      if (item.classList.contains(category)) {
        item.style.display = 'block';
      }
    });
  };
  

  const init = () => {
    const allListFilters = document.querySelectorAll(".js-list-filters");
    
    allListFilters.forEach(listFilters => {
      // get all filter buttons of this filter
      const filterButtons = listFilters.querySelectorAll("li");
      // get the filter targets of this filter
      const filterTargets = listFilters.nextElementSibling;

      filterButtons.forEach(filterButton => {
        // attach click event to each filter button
        filterButton.addEventListener("click", (e) => {
          // get the filter value
          const filterBy = e.target.innerText;
          
          if ( filterBy === "all") {
            showAllListItems(filterTargets);
          } else {
            // hide all list items
            hideAllListItems(filterTargets);
            // show the targets items only
            showThisListItem(filterTargets, filterBy);
          }
        });
      });
    });
  };

  return { init };
})();

export default listFilters;
