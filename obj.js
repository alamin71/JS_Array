const student = [
  {
    name: "alamin",
    roll: 20224,
    bacth: 1003,
    mobile: "01919123903",
  },
  {
    permanentAddress: "joypurhat",
    address: [
      {
        road: "6",
        block: "B",
        house: "26",
      },
    ],
  },
  {
    presentAddress: "dhaka",
  },
];
console.log(student[1].address[0].house);
