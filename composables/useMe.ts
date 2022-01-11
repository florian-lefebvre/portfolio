const _getAge = (dateString: string): number => {
  const today: Date = new Date();
  const birthDate: Date = new Date(dateString);
  let age: number = today.getFullYear() - birthDate.getFullYear();
  const m: number = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default function () {
  const age: number = _getAge("2004-05-04");
  const firstName: string = "Florian";
  const lastName: string = "LEFEBVRE";
  const fullName: string = `${firstName} ${lastName}`;
  return { age, firstName, lastName, fullName };
}
