

export default{
    template:`
        <section id="addFriendBox">

            <div id="addFriendBoxTop"> 
                <input id="addFriendTextSearchFriend"
                    type="text"
                    placeholder=" Add a friend from below or search here">
            </div>
            
            <div id="addFriendBoxBottom">
                <div id="addFriendBoxForm"
                    v-for="(friend, i) of friends"
                    @click="addFriendToNewChannel( friend, i )">
                    
                    <div id="addFriendBoxPic"></div>

                    <div id="addFriendBoxName">{{ friend.name }}</div>
                </div>
            </div>

        </section>
    `,


    methods:{

        addFriendToNewChannel( friend, index ){
            this.$store.commit( 'appendFriendsAdded', friend )
            this.$store.commit( 'removeFriend', index ) },


        searchFriend(){

        }


    },


    computed:{
        friends(){
            return this.$store.state.friends },

    },
















    
}




/*

<div id="displayFriendBox" v-for="(friend, i ) of getNames" :key="friend.firstName + i">
                <div id="displayFriendPic">{{ friend.picture }}</div>
                <div id="displayFriendNick">{{ friend.firstName }}</div>
                <div id="displayFriendAddFavorite">❤️</div>
                <div id="displayFriendCreateChannelWith">➕</div>
                <div id="displayFriendRemove">🗑️</div>
            </div>

            */