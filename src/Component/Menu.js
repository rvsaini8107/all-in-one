import React,{useState} from "react";
const Menu = () =>{
    const menuData = [
        {
          id: 1,
          title: 'buttermilk pancakes',
          category: 'breakfast',
          price: 15.99,
          img: 'https://image.lexica.art/full_jpg/c96b6cee-654d-42ef-8893-f85c4770b6aa',
          desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
          id: 2,
          title: 'diner double',
          category: 'lunch',
          price: 13.99,
          img: 'https://image.lexica.art/full_jpg/c96b6cee-654d-42ef-8893-f85c4770b6aa',
          desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
          id: 3,
          title: 'godzilla milkshake',
          category: 'shakes',
          price: 6.99,
          img: 'https://image.lexica.art/full_jpg/c96b6cee-654d-42ef-8893-f85c4770b6aa',
          desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
          id: 4,
          title: 'country delight',
          category: 'breakfast',
          price: 20.99,
          img: 'https://image.lexica.art/full_jpg/c96b6cee-654d-42ef-8893-f85c4770b6aa',
          desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
          id: 5,
          title: 'egg attack',
          category: 'lunch',
          price: 22.99,
          img: 'https://image.lexica.art/full_jpg/c96b6cee-654d-42ef-8893-f85c4770b6aa',
          desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
          id: 6,
          title: 'oreo dream',
          category: 'shakes',
          price: 18.99,
          img: 'https://image.lexica.art/full_jpg/c96b6cee-654d-42ef-8893-f85c4770b6aa',
          desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
          id: 7,
          title: 'bacon overflow',
          category: 'breakfast',
          price: 8.99,
          img: 'https://image.lexica.art/full_jpg/c96b6cee-654d-42ef-8893-f85c4770b6aa',
          desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
          id: 8,
          title: 'american classic',
          category: 'lunch',
          price: 12.99,
          img: 'https://image.lexica.art/full_jpg/c96b6cee-654d-42ef-8893-f85c4770b6aa',
          desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
          id: 9,
          title: 'quarantine buddy',
          category: 'shakes',
          price: 16.99,
          img: 'https://image.lexica.art/full_jpg/c96b6cee-654d-42ef-8893-f85c4770b6aa',
          desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
      ]
      const [category ,setCategory] = useState("all")
    return(
        <>
            <div className="containerMenu">
                <h2 style={{textAlign: "center"}}>Our Menu</h2>
                <ul className="ul-menu">
                    <li className="li-menu" onClick={()=>setCategory("all")}>All</li>
                    <li className="li-menu" onClick={()=>setCategory("breakfast")}>Breakfast</li>
                    <li className="li-menu" onClick={()=>setCategory("lunch")}>Lunch</li>
                    <li className="li-menu" onClick={()=>setCategory("shakes")}>Shakes</li>
                </ul>
                <div className="all-item">
                {
                    menuData.map((menuItem,index)=>(
                    menuItem.category===category||"all"===category ?
                        <div className="card" key={index}>
                            <div className="cardImg">
                                <img src={menuItem.img} alt={menuItem.title} width={"250px"} />
                            </div>
                            <div className="cardInfo">
                                <div className="rowHeading">
                                    <p style={{textTransform: "capitalize",fontWeight:"bold"}}>{menuItem.title}</p>
                                    <p style={{color: "orange"}}>${menuItem.price}</p>
                                </div>
                                <div className="disc">
                                    <p style={{color:"#7892B1"}}>{menuItem.desc}</p>
                                </div>
                            </div>
                        </div>
                    :""
                    ))
                }
                    
                </div>
            </div>
        </>
    );
}
// function Item(title){
//     console.log(title)
//     return(
//         <div className="card">
//             <div className="cardImg">
//                 <img src={title} alt={title} width={"250px"} />
//             </div>
//             <div className="cardInfo">
//                 <div className="rowHeading">
//                     <h3>{title}</h3>
//                     <p>$15.10</p>
//                 </div>
//                 <div className="disc">
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, neque.</p>
//                 </div>
//             </div>
//         </div>
//     )
// }
export default Menu;