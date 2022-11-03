var prodcutNameInput = document.getElementById("prodcutNameInput");
var prodcutPriceInput = document.getElementById("prodcutPriceInput");
var prodcutCategryInput = document.getElementById("prodcutCategryInput");
var prodcutDecsInput = document.getElementById("prodcutDecsInput");
var prodcutsContianer = [];
if (localStorage.getItem("products") != null) {
    prodcutsContianer = JSON.parse(localStorage.getItem("products"));
    disPlayProduct()
}

function addProdcut() {
  if(validataproduct() == true ){
    products = {
      name: prodcutNameInput.value,
      price: prodcutPriceInput.value,
      categry: prodcutCategryInput.value,
      desc: prodcutDecsInput.value,
    };  
    prodcutsContianer.push(products);
    localStorage.setItem("products", JSON.stringify(prodcutsContianer)  );
  
  //   clearFrom();
  disPlayProduct();
  }
  else{
    window.alert("Invilid product Name ")
  }
 
}

function clearFrom() {
  prodcutNameInput.value = "";
  prodcutPriceInput.value = "";
  prodcutCategryInput.value = "";
  prodcutDecsInput.value = "";
}
function disPlayProduct() {
    cartoona=``;
    for(var i=0 ; i< prodcutsContianer.length ; i++){
        cartoona +=`  <tr>
        <td>${i}</td>
        <td>${prodcutsContianer[i].name}</td>
        <td>${prodcutsContianer[i].price}</td>
        <td>${prodcutsContianer[i].categry}</td>
        <td>${prodcutsContianer[i].desc}</td>
        <td> <button onclick="deleteProduct(${i});"  class="btn btn-outline-danger" > Delete </button> </td>
        <td> <button  onclick="UpdataProduct(${i});" class="btn btn-outline-warning" >Updata</button> </td>

      </tr>`;
    }
    document.getElementById("tabelBody").innerHTML= cartoona;
}
function deleteProduct(indexproduct) {
 prodcutsContianer.splice(indexproduct , 1)
 localStorage.setItem("products", JSON.stringify(prodcutsContianer)  );
 disPlayProduct();
}
function UpdataProduct(indexproduct) {
  var products = {
    name: prodcutNameInput.value,
    price: prodcutPriceInput.value,
    categry: prodcutCategryInput.value,
    desc: prodcutDecsInput.value,
  };
 prodcutsContianer.splice(indexproduct , 1 ,products     )
 localStorage.setItem("products", JSON.stringify(prodcutsContianer)  );
 disPlayProduct();
}
 function saerchPoduct(term) {
  cartoona=``;

  for( var i =0 ; i<prodcutsContianer.length; i++){
    if(prodcutsContianer[i].name.toLowerCase().includes(term.toLowerCase()) == true ){
      cartoona +=`  <tr>
      <td>${i}</td>
      <td>${prodcutsContianer[i].name}</td>
      <td>${prodcutsContianer[i].price}</td>
      <td>${prodcutsContianer[i].categry}</td>
      <td>${prodcutsContianer[i].desc}</td>
      <td> <button onclick="deleteProduct(${i});"  class="btn btn-outline-danger" > Delete </button> </td>
      <td> <button class="btn btn-outline-warning" >Updata</button> </td>

    </tr>`;
    }
  }
  document.getElementById("tabelBody").innerHTML=cartoona;
}
function validataproduct() {
  var  regex =/^[A-Z][a-z]{3,8}$/;
  var regexone =/^[0-9]{3,7}$/;
  if(regex.test(prodcutNameInput.value) ==true && regexone.test(prodcutPriceInput.value)==true ){
      return true;
  }
  else{
    return false ;
  }
}
