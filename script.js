document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelector('.registared ul');
  const forms = document.forms;
  const create = document.querySelector('.submit');

  //   delete
  list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  //creating
  create.addEventListener('click', function () {
    create.style.color = 'red';

    const addForms = forms['add'];
    addForms.addEventListener('submit', function (e) {
      e.preventDefault();

      //creation
      const name = addForms.querySelector('input[type="text"]').value;
      const id = addForms.querySelector('input[type = "number"]').value;
      const country = addForms.querySelector('#country').value;
      const language = addForms.querySelector('#language').value;

      const li = document.createElement('li');
      // alert('hi');
      const name_space = document.createElement('span');
      const id_space = document.createElement('span');
      const country_space = document.createElement('span');
      const language_space = document.createElement('span');
      const btn_space = document.createElement('button');

      // adding text_content
      name_space.textContent = name;
      id_space.textContent = id;
      country_space.textContent = country;
      language_space.textContent = language;
      btn_space.textContent = 'delete';

      //add classes
      name_space.classList.add('name');
      id_space.classList.add('id');
      country_space.classList.add('country');
      language_space.classList.add('language');
      btn_space.classList.add('delete');

      //append to dom
      li.appendChild(name_space);
      li.appendChild(id_space);
      li.appendChild(country_space);
      li.appendChild(language_space);
      li.appendChild(btn_space);

      list.append(li);

      // addForms;
    });
  });
});
