document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelector('.registared ul');
  const forms = document.forms;

  //   delete
  list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  //creating
});
