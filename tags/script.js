let links = document.querySelectorAll('.content_link');

function MaxWidth(pics) {
  let i = null;
  for (let pic of pics) {
    let width = pic.getBoundingClientRect().width;
    i = (width > i) ? width : i;
  }
  return i;
}

function SumHeight(pics) {
  let i = null;
  for (let pic of pics) {
    i += pic.getBoundingClientRect().height;
    console.log(i);
  }
  return i;
}

let pics = document.querySelectorAll('.content_image');

document.getElementById('link_content').textContent = links[0].innerHTML;
document.getElementById('link_num').textContent = links.length;
document.getElementById('pics_num').textContent = pics.length;
document.getElementById('pic_width').textContent = pics[0].getBoundingClientRect().width;
document.getElementById('max_width').textContent = MaxWidth(pics);
document.getElementById('sum_height').textContent = SumHeight(pics);



