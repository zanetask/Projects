window.addEventListener("load", function () {
    /**
     * @type {HTMLInputElement|null}
     */
    const title = document.querySelector("#title");
    /**
     * @type {HTMLTextAreaElement|null}
     */
    const body = document.querySelector("#body");
    /**
     * @type {HTMLInputElement|null}
     */
    const titleCopy = document.querySelector("#title-copy");
    /**
     * @type {HTMLTextAreaElement|null}
     */
    const bodyCopy = document.querySelector("#body-copy");
  
    function setupPrinterFor(elementCopy, element) {
      if (elementCopy) {
        elementCopy.value = element.value;
      } else {
        console.log(elementCopy);
      }
    }
    
    title?.addEventListener("keyup", function () {
        setupPrinterFor(titleCopy, title);
      });
      body?.addEventListener("keyup", function () {
        setupPrinterFor(bodyCopy, body);
      });
      
    });