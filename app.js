const form = document.forms[0];

form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const oldUl = form.nextElementSibling;
  const ul = document.createElement('ul');
  const name = form.elements.name.value;

  oldUl && oldUl.remove();

  fetch(`https://api.genderize.io?name=${name}`)
    .then(res => res.json())
    .then(genderObj => {
      const li = document.createElement('li');
      const gender = genderObj.gender;
      li.textContent = gender;
      ul.append(li);
    });
  fetch(`https://api.agify.io?name=${name}`)
    .then(res => res.json())
    .then(ageObj => {
      const li = document.createElement('li');
      const age = ageObj.age;
      li.textContent = age;
      ul.append(li);
    });
  fetch(`https://api.nationalize.io?name=${name}`)
    .then(res => res.json())
    .then(nationalityObj => {
      const li = document.createElement('li');
      const country = nationalityObj.country[0].country_id;
      li.textContent = country;
      ul.append(li);
    });
  document.body.append(ul);
});

// DIRBTINIO INTELEKTO API UŽDUOTIS:
// 1. Sukurti formą, kurioje galima įrašyti asmens vardą.
// 2. Formos submit metu, pagal įrašytą vardą, ekrane atvaizduoti tikėtiną asmens lyti, amžių ir tautybę. Naudoti šiuos API:
// Amžiui - https://agify.io/
// Tautybei - https://nationalize.io/
// Lyčiai - https://genderize.io/
