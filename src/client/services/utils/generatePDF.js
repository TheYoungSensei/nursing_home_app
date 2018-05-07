/* eslint-disable new-cap,no-undef */

export const generatePDF = (infirmiers) => {
  const pdf = new jspdf('p', 'pt');
  const columns = [
    { title: 'Nom', dataKey: 'lastName'},
    { title: 'Prénom', dataKey: 'firstName'},
    { title: 'Email', dataKey: 'email'},
    {title: 'Téléphone', dataKey: 'phone'}
  ];
  const rows = infirmiers.map((inf) => {
    return {
      lastName: inf.lastName,
      firstName: inf.firstName,
      email: inf.email,
      phone: inf.phone
    };
  });
  pdf.autoTable(columns, rows);
  pdf.save('infirmiers.pdf');
};
