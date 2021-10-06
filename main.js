
const d = document;

searchFilters("searchBar_button","product-info","card-filter","product-title");

function searchFilters(input,selector){
    d.addEventListener("keyup", e => {
        if(e.target.matches(input)){
            // console.log(e.key);
        d.querySelectorAll(selector).forEach((el)=>
        el.textContent.toLowerCase().includes(e.target.value)
            ?el.classList.remove("filter")
            :el.classList.add("filter")
            );

        }
    });


}



