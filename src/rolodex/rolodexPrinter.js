import people from './people.json';

people.forEach(({ name, email, phone }) => {
  const fullName = name.split(' ');
  const [firstName, lastName] = fullName;

  console.log(`First Name: ${firstName}
  Last Name: ${lastName}
  Email: ${email}
  Phone Number: ${phone}
  `);
});
