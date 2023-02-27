let filelist = document.querySelector("#filelist");
let textarea = document.querySelector("#file");
let textAreaNewDirectory = document.querySelector("#changeDir");
fetch("/").then(resp => resp.text()).then(files => {
  for (let file of files.split("\n")) {
    let option = document.createElement("option");
    option.textContent = file;
    filelist.appendChild(option);
  }
  loadCurrentFile();
});
function loadCurrentFile() {
  fetch(filelist.value)
      .then(resp => resp.text())
      .then(file => {
        textarea.value = file;
  });
}
filelist.addEventListener("change", loadCurrentFile);
function saveFile() {
  fetch(filelist.value, {method: "PUT", body: textarea.value});
}
function createDirectory() {
  fetch(textAreaNewDirectory.value,{method: "MKCOL"});
}
function deleteDirectory() {
  fetch(textAreaNewDirectory.value,{method: "DELETE"});
}

