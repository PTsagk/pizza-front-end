import * as React from "react";
import { Component } from "react";
import MyVeggiesBG from "../../assets/MyVeggies.png";

const DATA = [
  {
    category: "Vegeterian",
    pizzas: [
      {
        name: "Veggie",
        image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
        description: `100% Μοτσαρέλα, σάλτσα ντομάτας,
         πεππερόνι, πικάντικο μοσχάρι, φρέσκα μανιτάρια. 
         Σε λεπτή ζύμη, με 41 εκ. διάμετρο και κομμένη 
         σε 6 μεγάλα κομμάτια που διπλώνεις στη μέση!`,
      },
      {
        name: "Margarita",
        image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
        description: `100% Μοτσαρέλα, σάλτσα ντομάτας,
         πεππερόνι, πικάντικο μοσχάρι, φρέσκα μανιτάρια. 
         Σε λεπτή ζύμη, με 41 εκ. διάμετρο και κομμένη 
         σε 6 μεγάλα κομμάτια που διπλώνεις στη μέση!`,
      },
      {
        name: "Ham and Bacon",
        image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
        description: `100% Μοτσαρέλα, σάλτσα ντομάτας,
         πεππερόνι, πικάντικο μοσχάρι, φρέσκα μανιτάρια. 
         Σε λεπτή ζύμη, με 41 εκ. διάμετρο και κομμένη 
         σε 6 μεγάλα κομμάτια που διπλώνεις στη μέση!`,
      },
    ],
  },
  {
    category: "Meat Lover's",
    pizzas: [
      {
        name: "Veggie",
        image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
        description: `100% Μοτσαρέλα, σάλτσα ντομάτας,
         πεππερόνι, πικάντικο μοσχάρι, φρέσκα μανιτάρια. 
         Σε λεπτή ζύμη, με 41 εκ. διάμετρο και κομμένη 
         σε 6 μεγάλα κομμάτια που διπλώνεις στη μέση!`,
      },
      {
        name: "Ham",
        image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
        description: `100% Μοτσαρέλα, σάλτσα ντομάτας,
         πεππερόνι, πικάντικο μοσχάρι, φρέσκα μανιτάρια. 
         Σε λεπτή ζύμη, με 41 εκ. διάμετρο και κομμένη 
         σε 6 μεγάλα κομμάτια που διπλώνεις στη μέση!`,
      },
      {
        name: "Pepperoni",
        image: "https://www.dominos.gr/gallery/fmobile/1532medium.png",
        description: `100% Μοτσαρέλα, σάλτσα ντομάτας,
         πεππερόνι, πικάντικο μοσχάρι, φρέσκα μανιτάρια. 
         Σε λεπτή ζύμη, με 41 εκ. διάμετρο και κομμένη 
         σε 6 μεγάλα κομμάτια που διπλώνεις στη μέση!`,
      },
    ],
  },
  {},
];
function Pizzas() {
  return (
    <div className="w-[100%] h-[100%] relative">
      <img
        src={MyVeggiesBG}
        alt=""
        className="absolute top-0 left-0 object-cover"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
    </div>
  );
}

export default Pizzas;
