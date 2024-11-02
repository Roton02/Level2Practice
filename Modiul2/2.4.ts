{
  // Clean code using interface or type alias   
  type GenariceArry<T> = Array<T>;
  interface MezbaVai {
    name: string;
    age: number;
    haveBike: boolean;
    haveMac: boolean;
    mobile: number;
    area?: string;
  }
  const person: GenariceArry<MezbaVai> = [
    {
      name: "Mezbah",
      age: 50,
      haveBike: true,
      haveMac: true,
      mobile: 1222939399,
    },
  ];
  // Generice with interface

  //
}
