import React, { useEffect, useState, version } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Pokheader from './Pokheader';

const Pokemon = () => {
  const [pk, setPk] = useState([]);
  const [pok, setPok] = useState();
  const [filteredList, setFilteredList] = useState([]);

  useEffect (() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((json) => {setPk(json.results)
    setFilteredList(json.results)});
  },  []);

  const minipokemon = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPok(json);
        console.log(json.abilities);
      });

    //console.log(pok)
  };

  return (
    <div>
         <Pokheader pk={pk} setPk={setPk} filteredList={filteredList} setFilteredList={setFilteredList}/>

                 
      {/* <Button
        variant="contained"
        color="primary"
        onClick={pokemon}
        style={{
          display: "flex",
          marginTop: "5px",
          marginLeft: "10px",
          textdecoration: "underline",
        }}
      >
        pokemon List
      </Button> */}
      <br />
    <center>
        <div>
          {/* <Card
            style={{
              height: "340px",
              width: "350px",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              backgroundColor: "khaki",

              marginBottom: "10px",
              boxShadow: "5px 10px 15px black",
            }}
          >
            <CardContent>
              <Typography> */}
                {pok ? (
                    <div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                   <div> <h4 style={{ textAlign: "right" }}>{pok.id}</h4></div>
                                        <h3>Pokemon Details</h3>
                                    {/* <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png" alt="" style={{width:'250px', height:'200px'}}/> */}
                                    <img src={`http://pokeres.bastionbot.org/images/pokemon/${pok.id}.png`} />
                                </div>
                                <div class="flip-card-back">
                                    
                                    <h4 style={{textTransform:'capitalize'}}>{pok.name}</h4><br/>
                                    <h4>{" "} height:{pok.height} <br />weight:{pok.weight}{" "} </h4>   
                                   

                                         {
                                         pok.abilities && pok.abilities.map((item) => {
                                             return<>
                                                 <p><h4>Ability:{item.ability.name}</h4></p>
                                                 </>
                                         })
                                         } 
                                 </div>
                            </div>
                        </div>
                    </div>
                ):null}
                       {/* <h3
                    //     style={{fontFamily: "fantasy",fontsize: "xxxlarge", fontVariant: "all-small-caps",
                    //     color: "crimson",fontweight: "bold",fontStyle: "initial",textDecorationLine: "underline",}}>
                    //     Pokemon Details
                    //     </h3>
                    //     <h4 style={{ textAlign: "right" }}>{pok.id}</h4>
                        
                    //     </div>
                    //     )    : ("")
                    // }
                    // {/* </Typography>
                    //     </CardContent>
                    </Card> */}
        {/* </div> */}
        </div>
    </center>
    

    <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {pk && pk.length > 0
          ? filteredList.map((items) => {
                return (
                <Card
                  style={{
                    backgroundColor:"rgb(255 192 203 / 55%)",
                    padding: "5px",
                    marginTop: "60px",
                    marginLeft: "5px",
                    marginBottom: "5px",
                    marginRight:'5px',
                    // border: '1px solid rgba(3, 3, 3, 0.979)',
                    // text-shadow: '4px 4px 6px #000000',
                    // textShadow: "4px 4px 4px 6px #000000",
                    boxShadow: "10px 15px px black",
                  }}
                >
                  <CardContent>
                    <Typography>
                      <p
                        style={{
                          fontFamily: "cursive",
                            textTransform:'capitalize',
                            color: '#1f1e7e',
                          textdecoration: "overline",
                        }}
                      >
                        {" "}
                        {items.name}
                      </p>
                      <br />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => minipokemon(items.url)}
                      >
                        {" "}
                        details
                      </Button>
                    </Typography>
                  </CardContent>
                </Card>
              );
            })
          : null
          }
      </div>
  
    </div>
    
    
  );
};

export default Pokemon;
