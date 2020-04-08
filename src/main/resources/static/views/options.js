/********************************* /
* Orginal by Hassan. 2020-03-18
* Last Edited by ......
* Notes: Will be edited later. Hardcoded ATM.
/**********************************/
import navBar from '../components/navbar.js'

export default{
    components:{
        navBar
    },

    //************************************************************** */

    template:`
        <div>
            <div id="homeContainer">
                <div id="appButton">
                    <h3>| | |</h3>
                </div>
                <div id="appNav">
                    <navBar/>
                </div>
                <main id="appMain">
                <div id="container">
                    <h3>O P T I O N S</h3>
                    <div id="optionsChangeNick">
                        <input id="optionsChangeNickField" type="text" placeholder="Change your nickname">            
                        <input id="optionsChangeNickButton" type="submit" value="Change nick">
                    </div>
                

                <form id="optionsBox" action="/action_page.php">
                    <input id="optionsBoxTextField" type="text" placeholder="Enter avatar URL">            
                    <input id="optionsBoxAddButton" type="submit" value="Upload avatar">
                </form>

                <form id="optionsBox" action="/action_page.php">
                    <input id="optionsBoxTextField" type="text" placeholder="Change your nickname">            
                    <input id="optionsBoxAddButton" type="submit" value="Change nick">
                </form>
                </div> <!-- div-end tag id="container" -->
                </main>
            </div> <!-- end-tag homeContainer -->
        </div>
    `,

}



/** OLD , Safe use if above not working/ugly // Johan
 * template:`
        <div>
            <h3>O P T I O N S</h3>
            <div id="homeContainer">
                <div id="appButton">
                    <h3>| | |</h3>
                </div>
                <div id="appNav">
                    <navBar/>
                </div>
                <main id="appMain">
                    <div id="optionsChangeNick">
                        <input id="optionsChangeNickField" type="text" placeholder="Change your nickname">            
                        <input id="optionsChangeNickButton" type="submit" value="Change nick">
                </div>

                <form id="optionsBox" action="/action_page.php">
                    <input id="optionsBoxTextField" type="text" placeholder="Change your nickname">            
                    <input id="optionsBoxAddButton" type="submit" value="Upload avatar">
                </form>

                <form id="optionsBox" action="/action_page.php">
                    <input id="optionsBoxTextField" type="text" placeholder="Change your nickname">            
                    <input id="optionsBoxAddButton" type="submit" value="Change nick">
                </form>
                </main>
            </div> <!-- end-tag homeContainer -->
        </div>
    `,
 */