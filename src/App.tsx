import TopBar from "./components/TopBar";
import SideMenu from "./components/SideMenu";
import UnitPanel from "./components/UnitPanel";

import WorldMap from "./map/WorldMap";


export default function App(){

return (

<div className="game">


<TopBar/>


<div className="main">


<SideMenu/>


<div className="battlefield">

<WorldMap/>

</div>


<UnitPanel/>


</div>


</div>

)

}
