let linkDataArray = Array.prototype.map.call(document.querySelectorAll('.link'), ( val ) => [val.innerHTML,val.href]);

let tableName = [];
let tableNumber = [];
let tableUrl = [];

for (let link of linkDataArray) {
  let name = link[0];
  let url = link[1];
  let hasName = false;

  for (let i = 0; i < tableName.length; i++) {
    if (tableName[i] === name) {
      hasName = true;
      tableNumber[i] += 1;
      tableUrl[i].push(url);
      break;
    }
  }

  if (!hasName) {
    tableName.push (name)
    tableNumber.push (1);
    tableUrl.push([url]);
  }
}

function generateTable() {

  const tbl = document.createElement("table");
  const columnNum = 3;
  const rowNum = tableName.length;

  for (let i = -1; i < rowNum; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < columnNum; j++) {
      let temp = 'empty';

      if(i === -1) {
        switch(j) {
          case 0:
            temp = 'Name';
            break;
          case 1:
            temp = 'Count';
            break;
          case 2:
            temp = 'URL';
            break;
        }
        const cellText = document.createTextNode(temp.toString());
        const cell = document.createElement("th");
        cell.appendChild(cellText);
        row.appendChild(cell);
        row.classList.add()
      }
      else {
        switch(j) {
          case 0:
            temp = tableName[i];
            break;
          case 1:
            temp = tableNumber[i];
            break;
          case 2:
            temp = tableUrl[i];
            break;
        }
        const cellText = document.createTextNode(temp.toString());
        const cell = document.createElement("td");
        cell.appendChild(cellText);
        row.appendChild(cell);
        row.classList.add()
      }
    }
    tbl.appendChild(row);
    tbl.classList.add()
  }
  document.querySelector('.table-container').appendChild(tbl);
}
generateTable();
