let elBody = document.querySelector("body");
let elContainer = document.createElement("div");
let elForm = document.createElement("form");
let elLabel = document.createElement("label");
let elInputBtnWrapper = document.createElement("div");
let elInput = document.createElement("input");
let elBtn = document.createElement("button");
let elList = document.createElement("ul")

elContainer.style.maxWidth = "700px";
elContainer.style.width = "100%";
elContainer.style.display = "flex";
elContainer.style.flexDirection = "column";
elContainer.style.width = "100%";
elContainer.style.margin = "30px auto";
elContainer.style.borderRadius = "15px";
elContainer.style.backgroundColor = "bisque";

elForm.action = "https://echo.htmlacademy.ru/";
elForm.style.padding = "30px 5px";
elForm.style.display = "flex";
elForm.style.rowGap = "15px";
elForm.style.flexDirection = "column";
elForm.style.alignItems = "center";

elLabel.textContent = "To do list";
elLabel.style.fontSize = "40px";
elLabel.style.fontFamily = "Monotype Corsiva";

elInputBtnWrapper.style.margin = "0 auto";
elInputBtnWrapper.style.maxWidth = "650px";
elInputBtnWrapper.style.width = "100%";
elInputBtnWrapper.style.display = "flex";
elInputBtnWrapper.style.flexWrap = "wrap";
elInputBtnWrapper.style.rowGap = "30px";

elInput.type = "text";
elInput.style.width = "78%";
elInput.style.fontSize = "28px";
elInput.style.padding = "15px";
elInput.style.borderRadius = "10px 0 0 10px";
elInput.style.border = "none";
elInput.style.margin = "0 auto";
elInput.style.boxShadow = "0 0 20px 7px white";


elBtn.type = "submit";
elBtn.style.fontSize = "28px";
elBtn.style.padding = "15px 28px";
elBtn.style.border = "none";
elBtn.style.borderRadius = "10px";
elBtn.style.color = "grey";
elBtn.style.fontFamily = "Harrington";
elBtn.style.boxShadow = "0 0 5px 2px coral";
elBtn.style.cursor = "pointer";
elBtn.style.margin = "0 auto";

elList.style.listStyle = "none"
elList.style.margin = "0";
elList.style.padding = "0";


elBody.appendChild(elContainer)
elContainer.appendChild(elForm)
elContainer.appendChild(elList);
elForm.appendChild(elLabel)
elForm.appendChild(elInputBtnWrapper);
elInputBtnWrapper.appendChild(elInput).placeholder = "Please, enter your to do"
elInputBtnWrapper.appendChild(elBtn).textContent = "Add";


elForm.addEventListener("submit", function(event){
  event.preventDefault();



  function addedNewItem(){
    if(elInput.value != 0){
      let elItem = document.createElement("li");
      elList.appendChild(elItem)
      elItem.textContent = elInput.value
      elItem.style.fontSize = "28px";
      elItem.style.maxWidth = "90%";
      elItem.style.backgroundColor = "white";
      elItem.style.padding = "15px 15px";
      elItem.style.margin = "28px";
      elItem.style.borderRadius = "10px";
      elItem.style.boxShadow = "0 0 15px 2px cyan";

      elInput.value = ""
    }
  }
  addedNewItem()

  // function addedListItem(val){}
})