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
  interface Developer<T, x = null> {
    name: string;
    age: number;
    bike: {
      brand: string;
      model: string;
    };
    smartWacth: T;
    macbook?: x;
  }
  type apple = { model: string; color: string };
  const poorDeveloper: Developer<apple> = {
    name: "roton",
    age: 21,
    bike: {
      brand: "honda",
      model: "cbr1000rr",
    },
    smartWacth: {
      model: "apple watch",
      color: "black",
    },
  };

  interface sumsung {
    model: string;
    price: number;
    color: string;
  }
  interface mac {
    model: string;
    color: string;
  }

  const richDeveloper: Developer<sumsung, mac> = {
    name: "sabbir",
    age: 24,
    bike: {
      brand: "yamaha",
      model: "yZF-R1",
    },
    smartWacth: {
      model: "samsung",
      price: 10203023,
      color: "white",
    },
    macbook: {
      model: "2021",
      color: "gold",
    },
  };

  //
}
