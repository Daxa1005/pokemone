import React, { useState } from "react";

const Photo = () => {
  const [pht, setpht] = useState([]);
  const [input, setinput] = useState("");
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [number, setnumber] = useState(0);
  //const[Input,setInput]=useState(0)
  const [cart, setCart] = useState([]);
  const [cartcount,setCartcount]=useState(0)

  const photo = () => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => response.json())
      .then((json) => setpht(json));
  };

  const add = (id) => {
    // Check if cart is empty
    if (cart.length === 0) {
      setCart([
        ...cart,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // If cart is not empty
      // Search if id exists in cart
      if (cart.find((item) => item.id === id)?.quantity < 10) {
        // Will run if id is matched
        setCart(
          cart.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          })
        );
      } else {
        // Will run if id not matched
        setCart([
          ...cart,
          {
            id: id,
            quantity: 1,
          },
        ]);

      }
    }
    setCartcount(cartcount+1)
    setnumber(number + 1);
  };

  const sub = (id) => {
    if (cart.length === 0) {
      // setCart([
      //   ...cart,
      //   {
      //     id: id,
      //     quantity: 1,
      //   },
      // ]);
    } else {
      if (cart.find((item) => item.id === id)?.quantity > 0) {
        setCart(
          cart.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            }

            return item;
          })
        );
      } else {
        setCart([
          ...cart,
          {
            id: id,
            quantity: 1,
          },
        ]);
      }
    }
    
    setCartcount(cartcount-1)
    setnumber(number - 1);
  };

  
  // const addcart = () =>{
    
  // }





  return (
    <div>

      <h1 class="font-effect-fire">Shopping</h1>
     
      <button onClick={photo}>Photo details</button>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => {
          setinput(e.target.value);
        }}
        /> 
        {/* <div className='col-sm-6'> */}
      <button><h6>{cartcount}</h6></button>
      {/* </div> */}
        
      

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pht
          .filter((item) => {
            if (item.title.includes(input)) return item;
          })
          .map((ph) => {
            return (
              <div className="row">
                <div className="col-sm-10 ">
                  <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="card">
                      <h4>Shopping</h4>
                      <center>
                        <img src={ph.url} alt="Product"  />
                      </center>
                      <h3>Product</h3>
                      <div className="row">
                        <button
                          className="button"
                          id="+"
                          onClick={(e) => add(ph.id)}
                        >
                          +
                        </button>
                        <h4 style={{ marginLeft: "100px" }}>
                          {cart.find((item) => item.id === ph.id)
                            ? cart.find((item) => item.id === ph.id).quantity
                            : 0}
                        </h4>
                        <div className="col-sm-1">
                          <button
                            id="-"
                            className="button"
                            onClick={(e) => sub(ph.id)}
                          >
                            -
                          </button>
                        </div>
                      </div>

                      <h5>{ph.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
              // </div>
            );
          })}
      </div>
    </div>
  );
};
export default Photo;
