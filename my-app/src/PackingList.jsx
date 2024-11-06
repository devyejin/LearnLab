/*
  true : <li className="item"> {name}✅</li>
  fase : <li className="item">{name}</li>
  나오고 싶다면?
*/

// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return <li className="item">{name}</li>;
//   } else {
//     return null;
//   }
// }

// function Item({ name, isPacked }) {
//   return (
//     <li className="item"> {name} {isPacked ? `✅` : null} </li>
//   )
// }

// function Item({ name, isPacked }) {
//   return <li className="item">{isPacked ? `${name} ✅` : name}</li>;
// }


//if문으로 처리하는게 젤 어렵넹


export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
