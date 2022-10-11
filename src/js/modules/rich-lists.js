/* global window, document */

/**
 * Manage filterred rich list display
 * 
 * @params {*} none
 * @return {function} initializes a filterred rich list display
 */
const listFilters = (function() {

  // fade out

  function fadeOut(el){
    el.style.opacity = 1;

    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  // fade in

  function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
      var val = el.style.opacity;
      console.log(val);
      if (!((val += .1) >= 1)) {
        console.log(val);
        el.style.opacity = val;
        requestAnimationFrame(fade);
      } 
    })();
  }
    
  const hideAllListItems = (list) => {
    const listItems = list.querySelectorAll("li");
    listItems.forEach((item) => {
      fadeOut(item);
    });
  };
  const showAllListItems = (list) => {
    const listItems = list.querySelectorAll("li");
    listItems.forEach((item) => {
      fadeIn(item);
    });
  };

  const showThisListItem = (list, category) => {
    const listItems = list.querySelectorAll("li");
    listItems.forEach((item) => {
      if (item.classList.contains(category)) {
        fadeIn(item);
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
          // reset active state for all filter buttons
          filterButtons.forEach(filterButton => {
            filterButton.classList.remove("active");
          });
          // set active state for this filter button
          e.target.classList.add("active");

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
